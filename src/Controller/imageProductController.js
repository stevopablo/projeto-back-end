const image_product = require('../models/connection');

const getAllImgeProduct = async (req, res) => {
  try {
    const image_product = await image_product.findAll();
    res.json(image_product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createImageProduct = async (req, res) => {
  const {enable, path, shape, radius, type, values} = req.body;
  try {
    const newImgeProduct = await image_product.create({ enable, path, shape, radius, type, values });
    res.status(201).json(newImgeProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateImageProduct = async (req, res) => {
  const { id } = req.params;
  const { enable, path, shape, radius, type, values } = req.body;
  try {
    const updatedImageProduct = await image_product.update({enable, path, shape, radius, type, values}, { where: { id } });
    res.json(updatedImageProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteImageProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await image_product.destroy({ where: { id } });
    res.json({ message: 'Usuário deletado com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    getAllImgeProduct,
    createImageProduct,
    updateImageProduct,
    deleteImageProduct
}