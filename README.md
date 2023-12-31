# Simple Zomato Order AlmaBetter's Project

## Express API with MySQL Connector
This is a simple Express.js API that connects to a MySQL database using the `mysql` library. The API has two endpoints: `/api/orders` and `/api/orders/:lim/:off`. The first endpoint returns the first 10 orders from the `orders` table, while the second endpoint returns a specific number of orders based on the `lim` (limit) and `off` (offset) parameters.

### Static Web
- Client site web application [Click Here](https://zomato-backend-live.vercel.app/).

### If you want to use client side application also so follow the step

1. Clone this repository 
2. run `npm install` (client dir)
3. run `npm start` (client dir)  

 ## Getting Started 
To run this API on your local machine, follow these steps:

1. Clone this repository to your local machine.
2. Install Node.js if you haven't already. 
3. Run `npm install` for install whole dependencies of package.json (In Server Folder) .
4. Download XAMPP Web Server Install and Open XAMPP Control Panel (start Apache and MySQL)
5. Run createDatabase.js file for Set up data to MySQL database
6. Run the API by running `npm run run` or `npm run `in the project directory.

- If you encounter any issues, please let me know by submitting an issue on the GitHub repository.


## API Endpoints 

### GET http://localhost:8080/api/orders

## Response

The API returns a JSON object containing the first 10 orders from the `orders` table.

### GET http://localhost:8080/api/orders/:lim/:off

This endpoint returns a specific number of orders from the `orders` table based on the `lim` (limit) and `off` (offset) parameters.

## Request Parameters

- `lim` (required): The number of orders to return.
- `off` (by Default 0 and It is optional): The number of orders to skip before returning the results.

## Response

The API returns a JSON object containing the specified number of orders from the `orders` table.

## Example Request
To return the first 5 orders, the following URL should be used: http://localhost:8080/api/orders/5/0

## Error Handling
If an error occurs while executing a database query, the API returns a `400 Bad Request` status code and a JSON object with an error message. If an unexpected error occurs, the API returns a `401 Unauthorized` status code and a JSON object with an error message.

