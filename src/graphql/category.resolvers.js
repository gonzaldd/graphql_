const CategoryService = require('../services/category.service');
const categoryServiceInstance = new CategoryService();
const checkJwtGql = require('../utils/checkJwtGql');
const checkRoleGql = require('../utils/checkRolesGql');

const categories = () => categoryServiceInstance.find({});

const createCategory = async (_, { name, image }, context) => {
  const user = await checkJwtGql(context);
  checkRoleGql(user, 'admin');

  return await categoryServiceInstance.create({ name, image });
};

module.exports = {
  categories,
  createCategory,
};
