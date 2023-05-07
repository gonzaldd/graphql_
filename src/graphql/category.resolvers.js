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

const getCategory = async (_, { id }) => {
  return await categoryServiceInstance.findOne(id);
};

module.exports = {
  categories,
  createCategory,
  getCategory,
};
