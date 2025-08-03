const express = require("express");
const dotenv = require("dotenv")
const PORT = process.env.PORT||5000;
const app = express()
const connectDb = require('./config/connectDb')
const routes = require('./routes/routes')
const  cors = require('cors')

dotenv.config()
connectDb()

app.use(express.json())
app.use(cors())
app.use("/api/v1/product",routes)

app.get("/",(req,res)=>{


res.send("hello world")


})
app.listen(PORT,(req,res)=>{


console.log(`server runnig on ${PORT}🚀🚀🚀`);


})