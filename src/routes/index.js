"use strict";
import accessRouter from "./access/access.route.js";
function routes(app) {
    //[GET:/]
    app.use("/", (req, res) => {
        res.send("ok");
    });
    // [METHOD:CRUD]
    app.use("/v1/api", accessRouter);
}

export default routes;
