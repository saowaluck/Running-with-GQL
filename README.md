# Running-with-GQL

A GraphQL learning project demonstrating different approaches to implementing GraphQL servers in Node.js.

## Project Overview

This project contains two GraphQL server implementations:

1. **Basic GraphQL Server** (`graphql-basic/`) - A simple in-memory GraphQL execution
2. **HTTP Express GraphQL Server** (`graphql-with-http-and-express/`) - A full HTTP server with Express and GraphQL

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/saowaluck/Running-with-GQL.git
cd Running-with-GQL
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Basic GraphQL Server

The basic server demonstrates GraphQL schema execution without HTTP:

```bash
npm run start-basic
```

This will execute a simple GraphQL query `{ hello }` and print the result to the console.

**What it does:**
- Creates a simple GraphQL schema with a `hello` query
- Executes the query directly using the `graphql` function
- Outputs the result to the console

### HTTP Express GraphQL Server

The Express server provides a full HTTP GraphQL endpoint:

```bash
npm run start-http-express
```

This starts a server at `http://localhost:5000/graphql`

**What it does:**
- Creates an Express server with GraphQL HTTP handler
- Provides a `/graphql` endpoint for GraphQL queries
- Accepts HTTP POST requests with GraphQL queries

### Testing the HTTP Server

Once the Express server is running, you can test it using:

1. **cURL:**
```bash
curl -X POST http://localhost:5000/graphql \
  -H "Content-Type: application/json" \
  -d '{"query": "{ hello }"}'
```

2. **GraphQL Playground or any GraphQL client**
   - Navigate to `http://localhost:5000/graphql`
   - Send queries like:
   ```graphql
   {
     hello
   }
   ```

## Project Structure

```
Running-with-GQL/
├── graphql-basic/
│   └── server.js          # Basic GraphQL execution example
├── graphql-with-http-and-express/
│   └── server.js          # HTTP GraphQL server with Express
├── package.json           # Project dependencies and scripts
└── README.md             # This file
```

## Dependencies

- `graphql`: Core GraphQL library for schema building and execution
- `express`: Web framework for HTTP server
- `graphql-http`: HTTP handler for GraphQL requests

## Learning Objectives

This project demonstrates:

1. **GraphQL Schema Definition** - How to define types and queries
2. **Root Resolvers** - How to implement query resolvers
3. **GraphQL Execution** - Direct execution vs HTTP server
4. **HTTP Integration** - Setting up GraphQL over HTTP with Express

## Next Steps

To extend this project, you could:

- Add more complex types and queries
- Implement mutations for data modification
- Add database integration
- Implement authentication and authorization
- Add GraphQL subscriptions for real-time updates

## Contributing

Feel free to submit issues and enhancement requests!

## License

ISC License
