const express = require('express');
const path = require('path');
const {ApolloServer} = require('apollo-server-express');
const db = require('./config/connection');
const routes = require('./routes');
const {authMiddleware} = require('./utils/auth');


const {resolvers, typeDefs} = require('./schemas');
const app = express();
const server = new ApolloServer({
  resolvers,
  typeDefs,
  context: authMiddleware
});

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}


app.get('/', (req, res) => {
  res.sendFile(path.join(_dirname, '../client/build/index.html'));
});

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({app});
}

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
