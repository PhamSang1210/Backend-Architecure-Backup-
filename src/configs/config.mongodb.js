import { ENV } from "../enviroments/env";

const dev = {
    app: {
        port: ENV.PORT,
    },
    db: {
        host: ENV.DB_HOST,
        port: ENV.DB_PORT,
        name: ENV.DEV_DB_NAME,
    },
};

const pro = {
    app: {
        port: ENV.PORT,
    },
    db: {
        host: ENV.DB_HOST,
        port: ENV.DB_PORT,
        name: ENV.PRO_DB_NAME,
    },
};

const config = { dev, pro };
const env = ENV.NODE_ENV;

export default config[env];
