const { MongoClient, ObjectId } = require("mongodb");
const config = require("../config");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = "paste mongo uri here";

class MongoLib {
  constructor() {
    this.client = new MongoClient(
      MONGO_URI,
      { useUnifiedTopology: true },
      { useNewUrlParser: true }
    );
    this.dbName = DB_NAME;
  }

  connect() {
    return new Promise((res, rej) => {
      this.client.connect((error) => {
        if (error) {
          rej(error);
        }
        console.log("Connected successfully to Mongo ");
        res(this.client.db(this.dbName));
      });
    });
  }

  getAll(collection, query) {
    return this.connect().then((db) => {
      return db.collection(collection).find(query).toArray();
    });
  }

  create(collection, data) {
    return this.connect()
      .then((db) => {
        return db.collection(collection).insertOne(data);
      })
      .then((result) => result.insertedId);
  }

  update(collection, id) {
    return this.connect()
      .then((db) => {
        return db
          .collection(collection)
          .updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true });
      })
      .then((result) => result.upsertedId || id);
  }

  delete(collection, id) {
    return this.connect()
      .then((db) => {
        return db.collection(collection).deleteOne({ _id: ObjectId(id) });
      })
      .then(() => id);
  }
}

module.exports = MongoLib;
