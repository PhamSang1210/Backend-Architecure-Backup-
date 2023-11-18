"use strict";
import accessRouter from "./access/access.route.js";
const str = "Hello";
function routes(app) {
    //[GET:/]
    app.use("/", (req, res) => {
        res.json({
            mgs: "SUCCESS",
        });
    });
    // [METHOD:CRUD]
    app.use("/v1/api", accessRouter);
}

export default routes;
