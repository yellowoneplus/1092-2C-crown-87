const Category_87 = require('../modelS/categoryModel');
const Clothing_87 = require('../models/clothingModel_87');

exports.getHomepage = async (req, res) => {
    let data;
    const [rows] = await Category_87.fetchAll();
    data = rows;
    /*res.json(data);*/
    res.render('crown2_87', 
    { title: 'Hsingtai Chung 408410487 (async/await)' ,
      data
    });
}

exports.getProductsByCategory = async (req, res) => {
  console.log('req.params', req.params.product);
  let data = {};
  data.cid = 0;
  if(req.params.product === 'hats') data.cid = 1;
  const [rows] = await Clothing_87.getProductsByCategory(data.cid);
  data.Clothing_87 = rows;
  res.json(data);
}