const express = require("express");
const fs = require("fs").promises;
const app = express();
const { authentication } = require("./middleware");

app.get("/data/:user", authentication, async(req, res) => {
    const data = await fs.readFile("data.txt", "utf8");
    return res.status(200).json({message : data});
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});