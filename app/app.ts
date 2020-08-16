// app/app.ts
import express from "express";
import bodyParser from "body-parser";
import { Routes } from "./routes";
import mongoose from "mongoose";

class App {
    public app: express.Application;
    public routePrv: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config(); 
        this.routePrv.routes(this.app); 
        this.mongoSetup();        
    }

    private mongoSetup(): void{
        var db_server = process.env.DB_SERVER || "localhost";
        var url = 'mongodb://' + db_server + ':27017';
        mongoose.connect(url, {})
        .then(() => console.log('connection successful'))
        .catch((err) => console.error(err));
    }

    private config(): void{

        this.app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");         
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");         
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            next();
        });           

        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;
