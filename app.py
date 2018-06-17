# import dependencies
import datetime as dt
import numpy as np
import pandas as pd

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, render_template

application.debug = True

# Database Setup

engine = create_engine("sqlite:///la_collision.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

######### Save references to each table

# Create our session (link) from Python to the DB
session = session(engine)

# Flask Setup
app = Flask(__name__)

# Flask Routes
@app.route("/")
def welcome():
    return render_template ('index.html')
        
@app.route("/heatmap")
def heat():
    return render_template ('heat.html') 

@app.route("/timemap")
def time(): 
    return render_template ('time.html')

##

if __name__ == '__main__':
    app.run()
