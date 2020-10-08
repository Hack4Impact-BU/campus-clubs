import { CCRequest, CCResponse, MongoClient } from "../utils/utils";

export default class Controller {
    req: CCRequest;
    res: CCResponse;
    db: MongoClient

    constructor(req: CCRequest, res: CCResponse) {
        this.req = req;
        this.res = res;
        this.db = req.db;
    }

    sendMessage(message: String, status = 200) {
        return this.res.status(status).json({message: message});
    }

    sendJson(json: Object, status = 200) {
        return this.res.status(status).json(json);
    }

    sendClientError(error: String, status = 400){
        return this.res.status(status).json({error: error});
    }
    
    sendServerError() {
        return this.res.status(500).json({error: "The server experienced an error. Please try again later"});
    }

}