
# AAK-TeleScience-Test-Project
Due Data Friday May 17th
Objective: Make a funnel chart of your country's population in React, populated by data from Django Restframe-work using best practices

![unnamed](https://github.com/juzorey/AAK-TeleScience-Test-Project/assets/76601270/2f49587e-4bd7-4e5d-a747-09f3b75f0fc3)


![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-brightgreen.svg)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
    1. [Front-end](#Front-End-Installation)
    2. [Back-end](#Back-End-Installation)

4. [License](#license)
5. [Contact](#contact)

## Introduction
Used React.js, Django RestFramwork and React ApexCharts to create funnel chart of country's population
For the reuire of the best test, I used best practices with Api, State Handling, Race Control, Throttling, Class Based Views, Data Fixtures and Optimization
- The ports are open to all so you may view the rest framework and call from any port

 - For the requirements of this project, I  didn't implement redux or react-query or axios since it would've added unnecesary complexity for a project that had less than 10 states and a small dataset 
 - necessarily for scaliblity, I would use redux or react-query, axios, django authentication, django signals, django businesslogic seperation, django permissions, django security keys



## Features
- Feature 1: Django Api Request Throttling.
- Feature 2: Django Sqlite3.
- Feature 3: Django Fixtures.
- Feature 4: React useFetch Custom Hook.
- Feature 5: React Api Context State Management.
- Feature 6: React Api Fetch Controllers.
- Feature 7: React Api Race Condition Control.
- Feature 8: React Error and Loading Control.
- Feature 9: React Api Fetch Controllers.
- Feature 10: React Optimization Code Splitting.
  


### Prerequisites
There is a a requirments.txt that you can download to run on your local machine
IF you want to see the rest framework through a port use http://127.0.0.1:8000/api/data

- Npm
- Pip
Optional
- Run backend on virtual environment

## Installation
Step-by-step instructions on how to get the project running locally

```sh
git clone https://github.com/your-username/project-name.git
```


### Front-End-Installation
```sh
npm run dev
```
### Back-End-Installation
while in venv
```sh
pip install -r .\requirements.txt
```
if data didnt load run 
```
python3 manage.py loaddata age-sex-us-2023.json
```

