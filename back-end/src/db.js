import mongodb from 'mongodb';

let client;
const connectionString = "mongodb+srv://robert:gj5jswABEb4tQ1vd@cluster0.l26vij8.mongodb.net/";

export const initializeDbConnection = async () => {
    client = await mongodb.MongoClient.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

export const getDbConnection = dbName => {
    return client.db(dbName);
}