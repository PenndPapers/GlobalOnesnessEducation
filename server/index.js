import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import AuthRoute from './Routes/AuthRoute.js';

const app = express();
const port = 5000;
dotenv.config();

//middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res) => res.send('Hello World! from server'));

mongoose.set("strictQuery", false);

mongoose
    .connect(process.env.MONGO_DB,
        { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(() => app.listen(process.env.PORT || 5000, () => console.log(`Server is running on ${process.env.PORT || 5000}`))).
    catch((error) => console.log(error.message));

//usage of routes
app.use('/auth',AuthRoute);
