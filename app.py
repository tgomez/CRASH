#import dependencies
from flask import Flask, jsonify, render_template, request, flash, redirect
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, desc,select
import pandas as pd
import numpy as np
import logging
#################################################
#resolving Handling issues
handler = logging.StreamHandler()
handler.setLevel(logging.ERROR)
app = Flask(__name__)
app.logger.addHandler(handler)
app.config['PROPAGATE_EXCEPTIONS'] = True

#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///la_colission.sqlite")
# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)
# Create our session (link) from Python to the DB
session = Session(engine)

#################################################
# Flask Setup

@app.route('/names')
def names():
    """Return a list of sample names."""

@app.route("/")

def main():
    return render_template('index.html')
if __name__ == "__main__":
    app.debug = True
    app.run()

@app.route('/api', methods=['POST', 'GET'])
def api_response():
    if request.method == 'POST':
        return request.json