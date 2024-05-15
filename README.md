Number Converter Microservice
This microservice is used for converting numbers using various formulas.

Repository: https://github.com/rojamich/convert_micro.git
Deployed: https://convert-micro.onrender.com/

How to Use

Celsius to Fahrenheit Conversion

Converts a temperature value from Celsius to Fahrenheit.

Endpoint: /ctof

Parameters:

num: The value to be converted from Celsius to Fahrenheit.

Example Request:
GET /ctof?num=20

Example Response:
{
  "fahrenheit": 68
}

Fahrenheit to Celsius Conversion

Converts a temperature value from Fahrenheit to Celsius.

Endpoint: /ftoc

Parameters:

num: The value to be converted from Fahrenheit to Celsius.

Example Request:
GET /ftoc?num=68

Example Response:
{
  "celsius": 20
}


Project Configuration

Here is the package.json file for this project:

{
  "name": "convert_micro",
  "version": "1.0.0",
  "description": "Number Converter Microservice",
  "main": "app.js",
  "repository": "https://github.com/rojamich/convert_micro.git",
  "author": "Michael Rojas",
  "license": "MIT",
  "private": false,
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2"
  },
  "engines": {
    "node": ">=14"
  }
}