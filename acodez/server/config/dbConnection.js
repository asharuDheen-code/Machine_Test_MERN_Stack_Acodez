const mongoClient = require("mongodb").MongoClient;
require("dotenv").config({
  path: "./config/config.env",
});

const state = {
  db: null,
};

module.exports.connect = (done) => {
  const dbName = process.env.DB_NAME;
  const URI = process.env.MONGO_URI;
  console.log(dbName);
  mongoClient.connect(URI, { useUnifiedTopology: true }, (err, data) => {
    if (err) console.log(`database err ${err}`);
    console.log("Database conneccted");
    state.db = data.db(dbName);
  });
};

module.exports.get = () => {
  return state.db
};
