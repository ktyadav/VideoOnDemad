# Video On Demand

## Prerequisites

### Application Developed in Visual Studio Code 

Node.js and npm are essential to start this project

## Technologies Used
* Angular 2
* TypeScript
* NodeJs 
* ExpressJs
* Bootstrap
* MongoDb

## About Application

### This application User Interface is depeloped in Angular 2 using TypeScript.
### Rest API depeloped in NodeJs using Express.
### MongoDB online mLab database used to store user history on server.

## How to Run

Install the npm packages described in the `package.json` and verify that it works:

```bash
npm install
```
### Navigate to server Dir and start server by typing below command
```bash
node server.js 

```
#### Node Api Url --  {http://localhost:9090}

### Now run application by typing below command

```bash
npm start 
```
#### Application Url --  {http://localhost:3000}
The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

## Note:
>>>
User Id is hard coded in two files, If in case need to change the user then change in below two files
* video-details.component.ts under app/videos
* history.component.ts under app/history 
>>>


