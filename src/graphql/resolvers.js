const { getProduct, getProducts } = require('./product.resolvers');

const resolvers = {
  Query: {
    ping: () => 'pong',
    product: getProduct,
    allProducts: getProducts,
  },
};

module.exports = resolvers;
