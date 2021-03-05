var express = require('express');
var router = express.Router();

// GET register.
router.get('/', (req, res, next) => {
    res.render('register', {
        title: 'BabyFashion'
    })

})

module.exports = router;