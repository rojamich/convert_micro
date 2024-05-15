# Number Converter Microservice
This microservice is used for converting numbers using various formulas.

Repository: https://github.com/rojamich/convert_micro.git
Deployed: https://convert-micro.onrender.com/

I am using the free service on Render, which may experience a delay of up to one minute while it is redeployed after being inactive for 15 minutes.

## How to Use

Celsius to Fahrenheit Conversion Example

Converts a temperature value from Celsius to Fahrenheit.

**Endpoint:** /ctof

**Parameters:**

- num: The value to be converted from Celsius to Fahrenheit.

**Example Request:**

```javascript
const inputValue = 20;  // number to be converted
const conversionType = 'ctof';  // Endpoint is name of formula

const response = await fetch(`https://convert-micro.onrender.com/${conversionType}?num=${inputValue}`);
const responseData = await response.json();

console.log('Conversion result:', responseData);
```

**Example Response:**

```javascript
{
  "fahrenheit": 68
}
```


### Project Configuration

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