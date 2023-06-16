import express from 'express';
import dotenv from 'dotenv';
import  Colors  from 'colors';
import connectDB from './mongoDB/db.js'

const app = express();

dotenv.config()


app.use(express.json());

connectDB();


const PORT =  process.env.PORT;


app.listen(PORT,() =>{
    console.log(`The server is running on port ${PORT}`.yellow.bold);
})