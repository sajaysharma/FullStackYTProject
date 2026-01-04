// require('dotenv').config({path: './env'})

import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config({
    path: './.env'  
})

connectDB()
.then(() => {
    // start server code
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})









/*
import mongoose, { connect } from 'mongoose';
import { DB_NAME } from './constants';
import express from 'express0';
const app = express();

( async () => {
        try {
              await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
              app.on("error", (error) => {
                console.log("ERROR: ", error);
                throw error
              })  
              
              app.listen(process.env.PORT, () => {
                console.log(`App is Listening on port ${process.env.PORT}`);
              })
        } catch (error) {
                console.log("ERROR: ",error);
                throw error
        }
})()

*/