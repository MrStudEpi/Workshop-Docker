const { MongoClient } = require("mongodb");

const connectionString = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mongodb:27017/`;

const config = {
    useNewUrlParser: true,
    connectTimeoutMS: 2000,
    socketTimeoutMS: 2000,
    
}

let client = null;

module.exports = {
    connect: async () => new Promise(async (resolve, reject) => {
        try {
            console.log('Connecting to the database...');
            client = await MongoClient.connect(connectionString, config);
            console.log('Connected to the database.');
            return resolve(client);
        } catch (err) { 
            console.log('Unable to connect to the database.');
            return reject(err);
        }
    }),
    client
};