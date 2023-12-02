// require express
const express = require('express');
// create a new Router
const router = express.Router();
//import controller
const messagesController = require('../../../controllers/api/v1/messages');

// GET /api/v1/messages
router.get("/", messagesController.getAll);

// POST /api/v1/messages
router.post("/", messagesController.create);

//export the router
module.exports = router;