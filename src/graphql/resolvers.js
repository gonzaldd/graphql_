const {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require('./product.resolvers');

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
  },
};

module.exports = resolvers;
