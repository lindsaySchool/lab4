// require express
const express = require('express');
// create a new Router
const router = express.Router();
//import controller
const messagesController = require('../../../controllers/api/v1/messages');

// GET /api/v1/messages
router.get("/", messagesController.getAll);

//GET /api/v1/messages/:id
router.get("/:id", messagesController.getById);

// POST /api/v1/messages
router.post("/", messagesController.create);

// PUT /api/v1/messages/:id
router.put("/:id", messagesController.update);

// DELETE /api/v1/messages/:id
router.delete("/:id", messagesController.remove);

//export the router
module.exports = router;