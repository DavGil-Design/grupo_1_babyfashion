var express = require('express');
var router = express.Router();

// GET home page.
router.get('/', function(req, res, next) {

  let categories = ['ropa','Accesorios','Caminadores','Carreolas','Neceser'];
  let subTitle = ['trend','suggested'];
  let subTitle_title = ['Tendencias','Sugeridos']
  let trendProduct = [
    {
      name: 'Caminador1',
      description: 'Camiandor1-D',
      price: '15.000',
      stockProducts: '3'
    },
    {
      name: 'Ropa1',
      description: 'Ropa1-D',
      price: '5.000',
      stockProducts: '2'
    },
  ];
  let suggestedProduct = [
    {
      name: 'Caminador1',
      description: 'Camiandor1-D',
      price: '15.000',
      stockProducts: '3'
    },
    {
      name: 'Ropa1',
      description: 'Ropa1-D',
      price: '5.000',
      stockProducts: '2'
    },
  ];

  res.render('index', {
    title: 'BabyFashion',
    categories: categories,
    subTitle : subTitle,
    subTitle_title: subTitle_title,
    trendProduct: trendProduct,
    suggestedProduct: suggestedProduct
  });
});

module.exports = router;
