var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET slots listing. */
router.get('/', function(req, res, next) {
	var data = JSON.parse(fs.readFileSync("./data/slotnumbers.json"));
	console.log("Slots file", data.slotNumbers);
    res.render('slots', { title: 'List of Slots', slots: data.slotNumbers});
});

module.exports = router;
