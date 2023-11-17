"use strict";
import express from "express";
const router = express.Router();

router.get("/shop/signup", (req, res) => {
    res.json("OK");
});

export default router;
