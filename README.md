## Familyar Project 0018 \#wirvsvirus

<div align="center">
  <img src="https://github.com/jul095/familyar-0018-hackathon/blob/master/frontend/public/assets/img/Familyar_Logo.png">
</div>

You might consider visiting our [![Devpost](https://img.shields.io/badge/info-Devpost-blue)](https://devpost.com/software/familyar)

### The application is divided in a frontend and server part of the application


### Dependencies
----
At first install the dependencies from package.json with `npm install`.

- [npm](https://www.npmjs.com)
- [yarn](https://yarnpkg.com/)
- [docker and docker-compose](https://docs.docker.com/compose/install)

### Server
----
The server application is written in Typescript with NodeJS and the Express and typeorm framework.



#### Run Server
Execute the database server and the backend application with
```
yarn start:server
```
This command will start a postgres database and execute the node application.

### Frontend
----
The frontend is Ionic-based with React as frontend-technology. So it'is possible to build a web-based android or IOS app.

Build an android app with
```
yarn build:web
```
Prerequisite is
- [android studio](https://developer.android.com/studio/)

#### Run App Frontend
You can execute the Ionic-based PWA with
```
yarn start:web
```

### Acknoledgements
----
- With the use of [ionic](https://ionicframework.com/)
- Provided starter code [ionic-conference-app](https://github.com/ionic-team/ionic-conference-app)
- That guy on [stackoverflow](https://stackoverflow.com/questions/46888298/activity-class-does-not-exist-error-type-3)
