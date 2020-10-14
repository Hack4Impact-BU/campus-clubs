import { MongoClient } from 'mongodb';

export const dbClient = new MongoClient(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

export const connectToDb = async () => {
    if (!dbClient.isConnected()) await dbClient.connect();
    return dbClient.db('campusclubs');
}

async function databaseMiddleware(req, res, next) {
    if (!dbClient.isConnected()) await dbClient.connect();
    req.db = dbClient.db('campusclubs');
    return next()
}


export default databaseMiddleware;