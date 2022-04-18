const config = require('../config')
const mongoose = require('mongoose');
const app = require('../api/index')

const boots = async ()=>{
    //Connect to mongodb
    console.log(config)
    await mongoose.connect(config.mongoUri, config.mongoOptions);
    //Start express server
    app.listen(config.port, ()=>{
        console.log(`Listening on port ${config.port}`);
    })
}

boots();