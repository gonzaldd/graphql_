const ProductServer = require('./../services/product.service');
const service = new ProductServer();

const getProduct = async (_, { id }) => {
  const product = await service.findOne(id);
  return product;
};

const getProducts = async () => {
  const products = await service.find({});
  console.log(products);
  return products;
};

module.exports = { getProduct, getProducts };
