# Unhandled JSON Errors in Express.js POST Route

This repository demonstrates a common error in Express.js applications: the lack of proper error handling when processing JSON request bodies in POST routes.

## The Bug

The `bug.js` file shows a vulnerable Express.js route that doesn't handle cases where the request body is malformed or empty.  If a client sends an invalid JSON payload, the application might crash or produce unexpected results without any clear indication of the error.

## The Solution

The `bugSolution.js` file demonstrates how to properly handle potential errors during JSON body parsing. It uses `try...catch` blocks to gracefully handle parsing errors and sends appropriate error responses to the client.