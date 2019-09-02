const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index', { title: '묵투두' });
});

module.exports = router;
