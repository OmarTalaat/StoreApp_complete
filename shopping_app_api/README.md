

Storefront Backend Project


Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
You need the following modules and dependencies installed to run this project:

docker-compose   # To run the Postgres database on Docker
node 16.14.2          # To run the application
yarn             # For dependency management

# Installing
run the following command to install the project dependencies:

yarn

Next, start the Postgres server on Docker:

docker-compose up -d

Next, you need to run the database migrations:

db-migrate up

# Running the application

Use the following command to build the application :
yarn run build

Use the following command to run the application in watch mode:

yarn run watch
The application will run on http://localhost:3000/api
Use the following command to run the application in using node:

yarn start
The application will run on http://localhost:3000/api

Running the unit tests
Use the following command to run the unit tests:

  yarn test


Built With
NodeJS - The JavaScript runtime
Yarn - The dependency manager
db-migrate - The database migration tool
Express - The web framework
TypeScript - Types JS extension
Jasmine - The unit testing framework


