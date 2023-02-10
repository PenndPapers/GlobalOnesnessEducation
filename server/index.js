import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import AuthRoute from './Routes/AuthRoute.js';

const app = express();
const port = 6000;
dotenv.config();

//middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// heyy
app.get('/', (req, res) => res.send('Hello World! from server'));

mongoose.set("strictQuery", false);

mongoose
    .connect(process.env.MONGO_DB,
        { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(() => app.listen(process.env.PORT || port, () => console.log(`Server is running on ${process.env.PORT || port}`))).
    catch((error) => console.log(error.message));

//usage of routes
app.use('/auth',AuthRoute);
