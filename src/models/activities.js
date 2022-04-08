const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    description: {type: String, minLength:[1, 'Description is null']},
    activity: {type: String, minLength:[1, 'Activity is null']},
    kcalories: {type: Number, min:[1, 'kcalories is null']},
    date: {type: String, minLength:[1, 'date is null']},
});

const DataModel = mongoose.model('activities', dataSchema)

module.exports = DataModel;