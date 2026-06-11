const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Backend Running Successfully");
});

app.get("/api/student", (req, res) => {
    res.json({
        name: "Bhargavi",
        course: "B.Tech CSE",
        domain: "Web Development"
    });
});

app.listen(process.env.PORT || 3000);
