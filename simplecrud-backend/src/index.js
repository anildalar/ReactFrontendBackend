const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors());
app.use(express.json());


const env = require('./dotenv');
const dbo = require('./db');
const getRoute = require('./routes/PostRoute');
const addPost = require('./routes/addPost');


app.get('/getposts',getRoute);

app.post('/addpost',addPost);

//Lets Define the port

app.listen(process.env.PORT,()=>{
    console.log(`The server is running on port ${process.env.PORT} `);
});