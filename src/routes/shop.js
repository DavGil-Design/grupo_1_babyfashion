var express = require('express');
var router = express.Router();

// GET shop page.
router.get('/', (req, res, next) => {
    res.render('shop', {
        title: 'BabyFashion'
    })

})

module.exports = router;