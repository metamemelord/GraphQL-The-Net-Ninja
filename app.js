const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

const mongo_uri =
  "mongodb+srv://metamemelord:hehehasdele@dashboard-db-wvq8d.azure.mongodb.net/gql-the-net-ninja";

(function() {
  mongoose
    .connect(mongo_uri, { useNewUrlParser: true })
    .then(result => {
      console.log("Connected to Mongo Cloud");
    })
    .catch(err => {
      console.log("Something went wrong while connecting to Mongo Cloud");
    });
})();

// bind express with graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
