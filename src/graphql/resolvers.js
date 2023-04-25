const {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require('./product.resolvers');
const { login } = require('./auth.resolvers');
const { createCategory, categories } = require('./category.resolvers')

const resolvers = {
  Query: {
    ping: () => 'pong',
    product: getProduct,
    allProducts: getProducts,
    allCategories: categories
  },
  Mutation: {
    addProduct,
    updateProduct,
    deleteProduct,
    login,
    createCategory
  },
};

module.exports = resolvers;
