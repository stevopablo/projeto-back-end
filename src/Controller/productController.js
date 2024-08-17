const Product = require('../models/connection');

const getAllProducts = async (req, res) => {
  try {
    const product = await Product.findAll();
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  const { name, slug, use_in_menu, stock, description, price, price_with_descount } = req.body;
  try {
    const newProduct = await Product.create({ name, slug, use_in_menu, stock, description, price, price_with_descount});
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const {name, slug, use_in_menu, stock, description, price, price_with_descount } = req.body;
  try {
    const updatedProduct = await Product.update({name, slug, use_in_menu, stock, description, price, price_with_descount  }, { where: { id } });
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.destroy({ where: { id } });
    res.json({ message: 'Usuário deletado com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct
}