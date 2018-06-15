# Collisions R US
![Alt Text](https://cdn.dribbble.com/users/176572/screenshots/1261789/dribbble_14.gif)
### Collaboraters:
<p> Tiffany Gomez, Taron Hakobyan, Chris Newbolt and Clifford Ferraren.
   
## Overview
Los Angeles is a large commuter city which inherently lends itself to numerous traffic collisions. 
Car crashes are one of the leading causes of death in the US(1) and as such they are an ideal candidate for study. Studying a leading cause of death may unveil insights which may help prevent or reduce deaths due to traffic collisions.


## Step 1: Finalize Idea and Logistics
 
Objective: Analyze data from LA County database regarding traffic collisions in LA County.
<br>
We will create a dashboard page with multiple graphs updating from the same data. This facilitates visual analyzation of the data.
<br>
Original data source: https://data.lacity.org/A-Safe-City/Traffic-Collision-Data-from-2010-to-Present/d5tf-ez2w
<br>
## Step 2: Data Munging
Data Wrangling
   
    Columns to delete:

        Premise Code,
        Crime Code Desc,
        Crime Code,
        Area ID,
        Date Reported Dr Number,

    Columns to ADD:

        Day of the week 
    
    Pull additional dataset for cities
## Step 3: Store data in database
We will utilize SQLite

## Step 4: Create Dashboard page with graphs
Dashboard Page

Graph 1: Heat Map: Geography, Sex
<br>
Graph 2: Time Series: Different times of the year, Time of day, Day of week
<br>
Graph 3: 
        
        Accident Particulars vs city population(vs age range of drivers)

## Step 5: Analyze data

            
## References
1) Centers for Disease Control and Prevention, National Center for Injury Prevention and Control. Web-based Injury Statistics Query and Reporting System (WISQARS) Fatal Injury Data. (2017)



