const userController = require('../controllers/users.controller');
const express = require('express');
const router = express.Router();

router.get("/", userController.getAllUser);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
router.delete("/:id", userController.deleteUser);
router.put("/:id", userController.updateUser);

module.exports = router;