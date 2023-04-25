const boom = require('@hapi/boom');

const CategoryService = require('../services/category.service');
const categoryServiceInstance = new CategoryService()

const categories = () => categoryServiceInstance.find({})

const createCategory = async(_, {name, image}, context ) => {
    const { user } = await context.authenticate('jwt', { session: false });

    if(!user){
        throw boom.unauthorized()
    }
    
    return await categoryServiceInstance.create({name, image})
}


module.exports = {
    categories,
    createCategory
}