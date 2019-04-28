const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
//specify where to find the schema
const User = require('./models/user')


// connect to the local and display the status 
// mongoose.connect('mongodb://localhost:27017/IT6203', { useNewUrlParser: true })
//     .then(() => { console.log("connected"); })
//     .catch(() => { console.log("error connecting"); });


// connect to the MONGODB ATLAS and display the status 
const uri = "mongodb+srv://prai:Dikhuppa123@it6203-plblu.mongodb.net/test?retryWrites=true";
// const uri = "mongodb+srv://it6203:kennesawstate1@cluster0-divzh.mongodb.net/test?retryWrites=true";

mongoose.connect(uri, { useNewUrlParser: true })
    .then(() => { console.log("connected"); })
    .catch(() => { console.log("error connecting"); });


// use the following code on any request that matches the specified mount path
app.use((req, res, next) => {
    console.log('This line is always called');
    res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE'); //allowable methods
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next();
});
app.get('/', (req, res, next) => {
    res.send('This is response from Express');

});
app.get('/users', (req, res, next) => {
    //call mongoose method find (MongoDB db.users.find())
    User.find()
        //if data is returned, send data as a response 
        .then(data => res.status(200).json(data))
        //if error, send internal server error
        .catch(err => {
            console.log('Error: ${err}');
            res.status(500).json(err);
        });
    // const users = [
    //     { "id": "1", "firstName": "John", "lastName": "Dow" },
    //     { "id": "2", "firstName": "Ann", "lastName": "Smith" },
    //     { "id": "3", "firstName": "Joan", "lastName": "Doe" }];
    // //send the array as the response 
    // res.json(users);

});



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// serve incoming post requests to /users
app.post('/users', (req, res, next) => {
    // create a new user variable and save request’s fields 
    const user = new User({
        firstName: req.body.firstName, // getting from httprequest
        lastName: req.body.lastName,
        mood: req.body.mood
    });
    //send the document to the database 
    user.save()
        //in case of success
        .then(() => { console.log('Success'); })
        //if error
        .catch(err => { console.log('Error:' + err); });

    // const user = req.body;
    // console.log(user.firstName + " " + user.lastName);
    // //sent an acknowledgment back to caller 
    // res.status(201).json('Post successful');
});

//:id is a dynamic parameter that will be extracted from the URL
app.delete("/users/:id", (req, res, next) => {
    User.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json("Deleted!");
    });
});

// serve incoming put requests to /students
app.put('/users/:id', (req, res, next) => {
    console.log("id: " + req.params.id)
    // check that the parameter id is valid 
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        //find a document and set new first and last names
        User.findOneAndUpdate({ _id: req.params.id },
            {
                $set: {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    mood: req.body.mood
                }
            }, { new: true })
            .then((student) => {
                if (student) { //what was updated
                    console.log(student);
                } else {
                    console.log("no data exist for this id");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    } else {
        console.log("please provide correct id");
    }

});


//to use this middleware in other parts of the application
module.exports = app;