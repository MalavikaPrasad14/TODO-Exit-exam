const express =require('express');
const cors =require('cors');
const app = new express();
require ('./db/connection');
const todo_route = require('./route/todoRoutes');

require('dotenv').config();
const port=process.env.port

app.use(cors());


app.use('/home',todo_route);


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})