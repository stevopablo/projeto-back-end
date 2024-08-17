const Category = require('../models/connection');

const getAllCategory = async (req, res) => {
  try {
    const category = await Category.findAll();
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCategory = async (req, res) => {
  const { name, slug, use_in_menu } = req.body;
  try {
    const newCategory = await User.create({ name, slug, use_in_menu });
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name, slug, use_in_menu } = req.body;
  try {
    const updatedCategory = await User.update({ name, slug, use_in_menu }, { where: { id } });
    res.json(updatedCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    await User.destroy({ where: { id } });
    res.json({ message: 'Usuário deletado com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    getAllCategory,
    createCategory,
    updateCategory,
    deleteCategory
}