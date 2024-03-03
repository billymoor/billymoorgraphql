# GraphQL Client

A lightweight JavaScript package for making GraphQL queries to a specified endpoint URL.

## Installation

```bash
npm install graphql-client
```

## Usage

```javascript
const GraphQLClient = require('graphql-client');

const client = new GraphQLClient('https://example.com/graphql');

const query = `
  query {
    posts {
      title
      body
    }
  }
`;

client.query(query)
  .then(data => console.log('Data:', data))
  .catch(error => console.error('Error:', error));
```

## API

### `new GraphQLClient(url)`

Creates a new GraphQL client instance with the specified GraphQL endpoint URL.

- `url` (string): The URL of the GraphQL endpoint.

### `query(query, variables)`

Executes a GraphQL query with optional variables.

- `query` (string): The GraphQL query string.
- `variables` (object, optional): The variables used in the query.

Returns a Promise that resolves with the query result.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
