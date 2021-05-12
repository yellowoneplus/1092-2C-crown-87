const Category = require('../../models/categoryModel')

exports.fetchCategories = async () => {
    try{
        const[rows] = await Category.fetchAll();
        return rows;
    }catch(err){
        return {message: 'Error on getting date'}
    }
}