import { MongoClient } from 'mongodb';

let client;
let connectionString = process.env.CONNECTIONSTRING;

export const initializeDbConnection = async () => {
    client = await MongoClient.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

export const getDbConnection = dbName => {
    const db = client.db(dbName);
    return db;
}