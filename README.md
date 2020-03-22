## Familyar Project 0018 \#wirvsvirus

### The application is divided in a frontend and server part of the application


### Dependencies
At first install the dependencies from package.json with `npm install`.

- [npm](https://www.npmjs.com)
- [yarn](https://yarnpkg.com/)
- [docker and docker-compose](https://docs.docker.com/compose/install)

### Server
The server application is written in Typescript with NodeJS and the Express and typeorm framework.



#### Run Server
Execute the database server and the backend application with 
```
yarn start:server
```
This command will start a postgres database and execute the node application.

### Frontend
The frontend is Ionic-based with React as frontend-technology. So it'is possible to build a web-based android or IOS app.

#### Run App Frontend
You can execute the Ionic-based PWA with
```
yarn start:web
```
