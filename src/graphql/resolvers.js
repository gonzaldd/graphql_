const {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductByCategory,
} = require('./product.resolvers');
const { login } = require('./auth.resolvers');
const {
  createCategory,
  categories,
  getCategory,
} = require('./category.resolvers');

const resolvers = {
  Query: {
    ping: () => 'pong',
    product: getProduct,
    allProducts: getProducts,
    allCategories: categories,
    category: getCategory,
  },
  Mutation: {
    addProduct,
    updateProduct,
    deleteProduct,
    login,
    createCategory,
  },
  Category: {
    products: getProductByCategory,
  },
};

module.exports = resolvers;
