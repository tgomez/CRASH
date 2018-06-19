#################################################
# Dependencies
#################################################
# Flask (Server)
from flask import Flask, jsonify, render_template, request, flash, redirect

# SQL Alchemy (ORM)
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, desc,select

import pandas as pd
import numpy as np
