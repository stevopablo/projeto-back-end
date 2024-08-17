const product_category = require('../models/connection');

const getAllProduct_category = async (req, res) => {
  try {
    const product_category = await product_category.findAll();
    res.json(product_category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct_category = async (req, res) => {
  const { Category_id } = req.body;
  try {
    const newProduct_category = await product_category.create({ Category_id});
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateProduct_category = async (req, res) => {
  const { id } = req.params;
  const { Category_id} = req.body;
  try {
    const updatedProduct_category = await product_category.update({ Category_id}, { where: { id } });
    res.json(updatedProduct_category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteProduct_category = async (req, res) => {
  const { id } = req.params;
  try {
    await User.destroy({ where: { id } });
    res.json({ message: 'Usuário deletado com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    getAllProduct_category,
    createProduct_category,
    updateProduct_category,
    deleteProduct_category
}