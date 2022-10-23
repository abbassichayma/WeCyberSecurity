const express = require ("express");
const connect = require("./config/connectDb")
const userRoutes = require('./routes/user.Routes')
const cors = require('cors')

const app = express();
require('dotenv').config()

app.use(express.json());
app.use(cors())
app.use('/api/user/',userRoutes);


const PORT = 4000 || process.env.PORT;
connect();


app.listen(PORT,(error)=>{
    if(error) throw console.log(error);
    console.log(`listen to port ${PORT}`);
})



