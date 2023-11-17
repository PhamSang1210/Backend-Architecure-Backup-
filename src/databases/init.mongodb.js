import mongoose from "mongoose";
import configDatabase from "../configs/config.mongodb.js";
import { countConnect } from "../helpers/check.connect.js";

const { host, port, name } = configDatabase.db;

const connectString = `mongodb://${host}:${port}/${name}`;

class Database {
    constructor() {
        this.connect();
    }

    async connect() {
        //gia su o moi truong dev
        if (1 === 1) {
            mongoose.set("debug", true);
            mongoose.set("debug", { color: true });
        }

        try {
            await mongoose.connect(connectString);
            // Check connectDatabse
            console.log("SUCCESS <3", countConnect());
        } catch (error) {
            console.log("ERROR !!!!!!!!!!!!!!");
        }
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

const instanceMongodb = Database.getInstance();

export default instanceMongodb;
