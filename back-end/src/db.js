import { MongoClient } from 'mongodb';

let client;
const connectionString = process.env.CONNECTIONSTRING;

export const initializeDbConnection = async () => {
    client = await MongoClient.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

export const getDbConnection = dbName => {
    return client.db(dbName);
}