const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));


// fill the following filled <username> , <password>, <dbname>
mongoose.connect("mongodb+srv://<username>:<password>@cluster0.bd86g.gcp.mongodb.net/<dbname>", {useNewUrlParser: true}, {useUnifiedTopology: true})


// create schema

const notesSchema = {
    First_name: String,
    Last_name: String,
    Uni_roll: String,
    Branch: String,
    Message: String,
    
}

const Note = mongoose.model("note", notesSchema);


app.get("/",function(req, res) {
    res.sendFile(__dirname + "/index.html")  

})
    // app .post
app.post("/", function(req,res) {
    let newNote = new Note({
        First_name : req.body.First_name,
        Last_name: req.body.Last_name,
        Uni_roll: req.body.Uni_roll,
        Branch: req.body.Branch,
        Message: req.body.Message,


    });
    newNote.save();
    res.redirect('/');
})

app.listen(3000, function() {
    console.log("server is running on 3000");

})
