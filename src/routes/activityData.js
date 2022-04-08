const express = require('express');
const { send } = require('express/lib/response');
const router = express.Router();
const DataModel = require('../models/activities')

// Check data in database
router.use('/:id', async (req, res, next)=>{
    const activityId = req.params.id;
    if (activityId && !activityId.match(/^[0-9a-fA-F]{24}$/)){
        return res.status(404).send('Record not found');
    }
    const foundData = await DataModel.findById(activityId)
    if (!foundData){
        return res.status(404).send('Record not found');
    }
    req.record = foundData;
    return next();
});

router.get('/', async (req, res, next)=>{
    const response = await DataModel.find();
    return res.send(response)
})

router.get('/:id', (req, res, next)=>{
    return res.send(req.record)
})

router.post('/', async (req, res, next)=>{
    const body = req.body;
    console.log('body',body)
    const newReccord = new DataModel(body);
    const error = newReccord.validateSync();
    console.log('error',error)
    if (error) {
        const errorFieldNames = Object.keys(error.errors);
        if (errorFieldNames.length >0 ){
            return res.status(400).send(error.errors[errorFieldNames[0]].message);
        }
    }
    res.send('you can saved')
    // Save
    await newReccord.save();
})

module.exports = router;