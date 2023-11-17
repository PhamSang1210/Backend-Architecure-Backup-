"use strict";
import accessRouter from "./access/access.route.js";
function routes(app) {
    app.use("/v1/api", accessRouter);
}

export default routes;
