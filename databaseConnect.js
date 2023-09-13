const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config();

const databaseName = 'inventory_application';

const uri = `mongodb+srv://admin:${process.env.MONGO_DB_PASSWORD}@cluster0.jqqmhiw.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function runDatabaseConnection() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
}

module.exports = runDatabaseConnection;

