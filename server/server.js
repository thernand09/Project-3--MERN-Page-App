const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
// API 
app.get('/api/endpoint', (req, res) => {
    const apiKey = req.get('Authorization').split(' ')[1];
    if (apiKey === process.env.API_KEY_SPOON) {
      res.status(200).json({ data: 'Success' });
    } else {
      res.status(401).json({ error: 'Unauthorized' });
    }
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
    await server.start();
  
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
  
    app.use('/graphql', expressMiddleware(server, {
      context: authMiddleware
    }));
  
    if (process.env.NODE_ENV === 'production') {
      app.use(express.static(path.join(__dirname, '../client/dist')));
  
      app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'));
      });
    }
  
    db.once('open', () => {
      app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
      });
    });
  };
  
  // Call the async function to start the server
    startApolloServer();


    module.exports = app;
