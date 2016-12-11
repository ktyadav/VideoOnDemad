# Video On Demand

## Prerequisites

Node.js and npm are essential to start this project

## Technologies Used
* Angular 2
* TypeScript
* NodeJs 
* ExpressJs
* Bootstrap
* MongoDb

## About Application
> This application User Interface is depeloped in Angular 2 using TypeScript.
> Rest API depeloped in NodeJs using Express.
> MongoDB online mLab database used to store user history on server.

## How to Run

Install the npm packages described in the `package.json` and verify that it works:

```bash
npm install
```
### navigate to server dir and start server by typing below command
```bash
node server.js
```
>Now run application by typing below command

```bash
npm start
```
The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.

You're ready to write your application.

### npm scripts

We've captured many of the most useful commands in npm scripts defined in the `package.json`:

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm run tsc` - runs the TypeScript compiler once.
* `npm run tsc:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run lite` - runs the [lite-server](https://www.npmjs.com/package/lite-server), a light-weight, static file server, written and maintained by
[John Papa](https://github.com/johnpapa) and
[Christopher Martin](https://github.com/cgmartin)
with excellent support for Angular apps that use routing.
