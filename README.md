# UserParser API

# Table of Contents

1. [Prerequisites](#prerequisites)
2. [Getting Started](#getting-started)
3. [Available Endpoints](#available-endpoints)
4. [Making Post Requests](#making-post-requests)

## Prerequisites

**You must have the following installed to use UserParser API:**

1. [NodeJS](https://nodejs.org/en/download/)
2. [Typescript](https://www.typescriptlang.org/download)
3. [Postman](https://www.postman.com/downloads/)

## Getting Started

To use this API, you'll need to follow these steps:

1. In your terminal window, navigate to UserParser API: `cd ~/YOUR_PROJECTS_DIRECTORY/user-parser-api/`.

2. In your terminal, run `npm install` or `npm i` to install all the required packages.

3. Create a `.env` file in the root directory of UserParser API and create a variable call `PORT`. Your file should look like this: PORT=3000

4. Run `npm run start` to compile the typescript files via `tsc` and to start the server. (you can use `npm run dev` any time after this since everything will already be compiled in `/dist/`)

Once the server is running, you can send a POST request to either of the available endpoints

## Available Endpoints

The two available endpoints are:

1. [localhost:3000/api/v1/parser](localhost:3000/api/v1/parser)
2. [localhost:3000/api/v2/parser](localhost:3000/api/v2/parser)

## Making Post Requests

UserParser API expects a JSON object in the request body that follows this convention:

```JSON
{
  "data": "JOHN0000MICHAEL0009994567"
}
```

You can send this via Postman by:

1. Creating a new request to one of UserParser API's endpoints and setting that request to POST.
2. Pasting the JSON object above into the body and selecting raw.
3. Finally change the data type from text to JSON in the dropdown menu to the right.

Alternatively, you can paste this `cURL` into your terminal instead of using Postman:

```bash
curl --location --request POST 'localhost:3000/api/v1/parse' \
--header 'Content-Type: application/json' \
--data-raw '{
    "data": "JOHN0000MICHAEL0009994567"
}'
```

The response object will look like this for the v1 endpoint:

```JSON
{
    "statusCode": 200,
    "data": {
        "firstName": "JOHN0000",
        "lastName": "MICHAEL000",
        "clientId": "9994567"
    }
}
```

And like this for the v2 endpoint:

```JSON
{
    "statusCode": 200,
    "data": {
        "firstName": "JOHN",
        "lastName": "MICHAEL",
        "clientId": "999-4567"
    }
}
```
