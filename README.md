# API-Functionality using Node.js and Express.js

This is a simple RESTful API built using Node.js and Express.js that allows users to retrieve and update information about products in a database. The API uses a MongoDB database to store the product information, with each product having a name, description, and price. The API allows users to retrieve a single product by ID, retrieve all products, and update the price of a product by ID.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository
2. Install the dependencies by running `npm install`
3. Start the server by running `npm start`

## API Endpoints

The API has the following endpoints:

### Retrieve a single product by ID
GET /localhost:3000/products/:id

This endpoint retrieves a single product by its ID. The ID is provided in the URL parameter.

### Retrieve all products
GET /localhost:3000/products

This endpoint retrieves all products in the database.

### Update the price of a product by ID
PATCH /localhost:3000/products/:id

This endpoint updates the price of a product by its ID. The ID is provided in the URL parameter. The new price is provided in the request body as a JSON object with a `price` property.


#### Example Request
GET /localhost:3000/products

#### Example Response
HTTP/1.1 200 OK
Content-Type: application/json

[
{
"id": "1234",
"name": "Product A",
"description": "This is product A",
"price": 19.99
},
{
"id": "5678",
"name": "Product B",
"description": "This is product B",
"price": 29.99
}
]

## Error Handling

The API handles common errors, such as invalid input or database errors, and returns appropriate error messages.

## Unit Tests

The API has unit tests to ensure that it functions as expected. To run the tests, run `npm test`.


## License

This project is licensed under the MIT License. See the LICENSE file for details.

