const express = require('express');
const bodyParser = require('body-parser')
const userRouter = require('../src/routes/user');
const config = require('../config')

const cors = require('cors')
const app = express();

if (config.isVercel){
    app.use(async(req,res,next)=>{
        await mongoose.connect(config.mongoUri, config.mongoOptions);
        return next();
    })
}

app.use(bodyParser.json());
app.use(
    cors({
      origin: '*',
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    })
  );
app.use('/users', userRouter);

module.exports = app;