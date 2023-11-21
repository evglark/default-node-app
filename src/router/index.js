const express = require('express');

const taskRouter = require('../modules/task');

const router = express.Router();

router.use(taskRouter);

module.exports = router;
