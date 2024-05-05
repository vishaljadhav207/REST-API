import express from "express";

const app = express();

//Routes;
//http methods get,post,put,patch delete
app.get("/", (req, res, next) => {
    res.json({ message: "welcome to elib api's" })
})

export default app;