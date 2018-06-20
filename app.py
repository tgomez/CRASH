# import dependencies
import datetime as dt
import numpy as np
import pandas as pd

from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

# Flask Setup
app = Flask(__name__)

from flask_sqlalchemy import SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///db.sqlite"

db = SQLAlchemy(app)

from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

app.debug = True

# Database Setup

engine = create_engine("sqlite:///db/la_colission.sqlite")

# reflect an existing database into a new model
Base = automap_base()

LA_collisions= Base.classes.collision

# reflect the tables
Base.prepare(engine, reflect=True)

######### Save references to each table

# Create our session (link) from Python to the DB
#db.session = session(engine)


# Flask Routes
@app.route("/")
def welcome():
    return render_template ('index.html')

#@app.route ("/data", methods=["GET"])
#def data():
#    if request.method == "GET":
#        area_name = request.form["area_name"]
#        #code to query database
#        return jsonify(variableUsedToQueryDB)


@app.route("/names")
def names():
   # """Return a list of sample names."""
    stmt = Session.query(LA_collisions).statement
    df = pd.read_sql_query(stmt, Session.bind)
    df.set_index('id', inplace=True)
    print(df)
    return jsonify(list(df))


#######

if __name__ == '__main__':
    app.run()
