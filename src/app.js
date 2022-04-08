const express = require('express');
const bodyParser = require('body-parser')
const userRouter = require('./routes/user');
const mongoose = require('mongoose');
const cors = require('cors')

const config = require('./config')

const app = express();

const PORT = process.env.PORT || 7001;

app.use(bodyParser.json());
app.use(
    cors({
      origin: '*',
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    })
  );
app.use('/users', userRouter);

const boots = async ()=>{
    //Connect to mongodb
    await mongoose.connect(config.mongoUri, config.mongoOptions);
    //Start express server
    app.listen(PORT, ()=>{
        console.log(`Listening on port ${PORT}`);
    })
}

boots();