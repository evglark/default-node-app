const express = require('express');

const tasksRouter = require('../modules/tasks');

const router = express.Router();

router.use(tasksRouter);

module.exports = router;
