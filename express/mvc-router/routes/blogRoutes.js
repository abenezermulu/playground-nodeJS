const express = require('express'); 
const blogController = require('../controllers/blogController');

const router = express.Router(); 

router.get('/', blogController.blog_index);
router.get('/blogs/create', blogController.blog_create);

module.exports = router; 