# Challenge Instructions


In the following repo are 2 django services -- "frontend" and "backend" which live in the directories "frontend" and "backend", respectively. The frontend service is a user facing app that can be reached by anyone with access to the internet. The backend service is behind a firewall and cannot be reached by regular people on the internet. Only the frontend service can talk to the backend service. In this challenge, the frontend service needs to display data that only the backend service is aware of.


## Backend service

You'll find a sqlite database with data located at the root of the "backend" dir. i.e.

```
/backend/db.sqlite3
```

The sqlite.db in the backend service contains a table that does not have a corresponding django model. You'll need to create a django model that matches the table called `people_person` (all the other tables in the db are managed by django, no need to do anything with them).

You will then need to create a way in the backend service to communicate the data in the table `people_person`.




## Frontend service

In the frontend service you'll need to create a page accessible at `/` (e.g. localhost:8000/) that displays a bar graph of car makes and number of people with each car make. This is a histogram with car makes on the x-axis and count of car makes on the y-axis. This data will need to be retrieved from the backend service since this frontend service does not have the data/models locally.



## Running the services
The backend service can be started as follows,

```
python backend/manage.py runserver 8500
```

The frontend service can be started as follows,

```
python frontend/manage.py runserver 8000
```

A user can visit the front end service on their browser @ `localhost:8000/`. A user cannot reach the backend service at `localhost:8500/` due to a firewall. However the front end service does have access to backend service via `localhost:8500/`. How would you enable the frontend service to access data that only the backend service is able to interface with and present that data to the user?



## Summary:

1. Define a django model to match the `people_person` sqlite table.
2. Design and implement a way for other services (e.g. the frontend service) to access the data in the backend service db (specifically the table `people_person`).
3. Complete the home page in the frontend service to display a bar graph of the data in the `people_person` (located in the backend service). Feel free to graph the data in anyway you would justify as meaningful.
4. Write tests (if necessary)
5. Use any javascript, css, html libraries as desired -- you don't have to be fancy, keep the focus on solving the problem.
6. Follow PEP8 style coding guidelines, add documentation where necessary.

## Note

The project uses python 3.3.2 (feel free to switch to 2.7.* if needed) and Django 1.6..

Please feel free to ask us any questions.
