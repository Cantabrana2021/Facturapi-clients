const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./schemas/productSchema');
const resolvers = require('./resolvers/productResolver');
const UserTypeDefs = require('./schemas/userSchema');
const userResolvers = require('./resolvers/userResolvers');

const startServer = async () => {
  // Conectar a MongoDB
  await mongoose.connect('mongodb+srv://lpzkntabrana:PolloFrito202445@tienda.dnagw.mongodb.net/?retryWrites=true&w=majority&appName=Tienda');
  
  const server = new ApolloServer({ 
    typeDefs: [typeDefs, UserTypeDefs],  
    resolvers: [resolvers, userResolvers], 
  });
  
  server.listen().then(({ url }) => {
    console.log(`Servidor corriendo en ${url}`);
  });
};

startServer();
