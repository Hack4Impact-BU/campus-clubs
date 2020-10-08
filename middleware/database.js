import { MongoClient } from 'mongodb';

const dbClient = new MongoClient(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

async function databaseMiddleware(req, res, next) {
    if (!dbClient.isConnected()) await dbClient.connect();
    req.db = dbClient.db('campusclubs');
    return next()
}

export default databaseMiddleware;