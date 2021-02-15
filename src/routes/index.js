var express = require('express');
var router = express.Router();

// GET home page.
router.get('/', function(req, res, next) {

  let categories = ['ropa','Accesorios','Caminadores','Carreolas','Neceser'];
  let subTitle = ['trend','suggested'];
  let subTitles_title = ['Tendencias','Sugeridos'];

  res.render('index', {
    title: 'BabyFashion',
    categories: categories,
    subTitle : subTitle,
    subTitles_title: subTitles_title,

  });
});

module.exports = router;
