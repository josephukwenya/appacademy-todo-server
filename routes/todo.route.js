const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Get all TODO lists
router.get('/', async(req, res) => {

})

// Create a new TODO list
router.post('/', async(req, res) => {

})

// Uppdate a TODO from the list
router.put('/:id', async(req, res) => {

})

// Delete a TODO from the list
router.delete('/:id', async(req, res) => {

})

module.exports = router;