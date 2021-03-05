var express = require('express');
var router = express.Router();

// GET productDetails.
router.get('/', (req, res, next) => {
    res.render('productDetail', {
        title: 'BabyFashion'
    })

})

module.exports = router;