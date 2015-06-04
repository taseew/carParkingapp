var express = require('express');
var router = express.Router();

/* Get page for adding a new slot */

router.get('/', function(req, res, next) {
  res.render('addSlot', { title: 'Add New Slot'});
});

module.exports = router;
