const ProductServer = require('./../services/product.service');
const service = new ProductServer();

const getProduct = (_, { id }) => service.findOne(id);

const getProducts = () => service.find({});

const addProduct = async (_, { dto }) => service.create(dto);

const updateProduct = (_, { dto }) => service.update(dto.id, dto);

const deleteProduct = async (_, { dto }) => {
  await service.delete(dto.id);
  return dto.id;
};

const getProductByCategory = async (parent) => {
  return await service.getByCategory(parent.dataValues.id);
};

module.exports = {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductByCategory,
};
