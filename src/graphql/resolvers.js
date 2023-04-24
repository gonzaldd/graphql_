const {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require('./product.resolvers');
const { login } = require('./auth.resolvers');

const resolvers = {
  Query: {
    ping: () => 'pong',
    product: getProduct,
    allProducts: getProducts,
  },
  Mutation: {
    addProduct,
    updateProduct,
    deleteProduct,
    login,
  },
};

module.exports = resolvers;
