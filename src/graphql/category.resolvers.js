const CategoryService = require('../services/category.service');
const categoryServiceInstance = new CategoryService()

const categories = () => categoryServiceInstance.find({})

const createCategory = (_, {name, image}) => categoryServiceInstance.create({name, image})


module.exports = {
    categories,
    createCategory
}