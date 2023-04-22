const { getProduct, getProducts, addProduct } = require('./product.resolvers');

const resolvers = {
  Query: {
    ping: () => 'pong',
    product: getProduct,
    allProducts: getProducts,
  },
  Mutation: {
    addProduct,
  },
};

module.exports = resolvers;
