import { NextApiRequest, NextApiResponse } from "next";

interface MongoCollection {
    insertOne: (doc: Object) => Promise<Object>,
    deleteOne: (filter: Object) => Promise<Object>
}

export interface MongoClient {
    collection: (collection: String) => MongoCollection
}

export interface CCRequest extends NextApiRequest {
    db: MongoClient
}

export interface CCResponse extends NextApiResponse {
}

