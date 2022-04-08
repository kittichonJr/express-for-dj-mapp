const express = require('express')
const activityData = require('./activityData')
const router = express.Router();

router.use('/me/activitiesReccord', activityData)

module.exports = router;