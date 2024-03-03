// index.js

const fetch = require('node-fetch');

class GraphQLClient {
  constructor(url) {
    this.url = url;
  }

  async query(query, variables) {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    });

    const data = await response.json();

    if (response.ok) {
      return data.data;
    } else {
      throw new Error(data.errors ? data.errors[0].message : 'Unknown error');
    }
  }
}

module.exports = GraphQLClient;
