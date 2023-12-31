import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) =>{
    res.render("index.ejs");
});

app.get("/work", (req, res) =>{
    res.render("work.ejs");
});

app.get("/public/index.ejs", (req, res)=>{
    res.render("index.ejs");
});

app.get("/public/work.ejs", (req, res)=>{
    res.render("work.ejs");
});

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});