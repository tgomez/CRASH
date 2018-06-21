# import dependencies 
import datetime as dt
import numpy as np
import pandas as pd
import random

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine


# Create engine using the `la_colission.sqlite` database file
engine = create_engine("sqlite:///db/sample_colission.sqlite")

# Declare a Base using `automap_base()`
Base = automap_base()

# Use the Base class to reflect the database tables
Base.prepare(engine, reflect=True)

# Print all of the classes mapped to the Base
Base.classes.keys()

# Assign the collision class to a variable called `collision`
Collision = Base.classes.collision

# Create a session
session = Session(engine)


#import necessary libraries
from flask import (Flask, 
                   jsonify, 
                   render_template, 
                   request, 
                   redirect)

# Flask Setup
app = Flask(__name__)


# Flask Routes
@app.route("/")
def default():
    return render_template("index.html")


@app.route("/data")
def data_header():
   # """Return a list of collisions."""

    stmnt = session.query(Collision).statement
    
    df = pd.read_sql_query(stmnt, session.bind)
    df.set_index('id', inplace=True)

    # Returning list of the column names (sample names)
    # return jsonify(list(df.columns))
    return jsonify(list(df))

@app.route('/collision')
def list_collision():
    """Return the MetaData for a given sample."""
    sel = [Collision.id,
           Collision.age,
           Collision.descent,
           Collision.sex, 
           Collision.area,
           Collision.location,
           Collision.geojson, 
           Collision.date,
           Collision.day_of_week, 
           Collision.time,
           Collision.reporting_district]

    results = session.query(*sel).all()

    # Create a dictionary entry for each row of metadata information
    collisions = []
    for result in results:
        collisions.append({
        "ID":result[0],
        "Age":result[1],
        "Descent":result[2],
        "Gender":result[3],
        "Area":result[4],
        "Location":result[5],
        "GeoLocation":result[6],
        "Date":result[7],
        "Day of the Week":result[8],
        "Time":result[9],
        "Reporting District":result[10]   
        })

    return jsonify(collisions)

if __name__ == '__main__':
    app.run(debug=True)