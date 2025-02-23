const express = require("express");
const router = express.Router();
const Product = require("../Models/Product");

// Get all products
const GetAllPro = async (req, res) => {
  try {
    const data = await Product.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving products", error: error.message });
  }
};

// Get product by ID
const IdProduct = async (req, res) => {
  try {
    const data = await Product.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving product", error: error.message });
  }
};

// Add a new product
const AddPro = async (req, res) => {
  try {
    const data = await Product.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: "Error adding product", error: error.message });
  }
};

// Update product by ID
const UpdatePro = async (req, res) => {
  try {
    const data = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!data) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: "Error updating product", error: error.message });
  }
};

// Delete product by ID
const DelProduct = async (req, res) => {
  try {
    const data = await Product.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error: error.message });
  }
};

// const GetProductByCategory = async (req, res) => {
//   try {
//     const category = req.params.categoryName
//     const products = await Product.find({ category: category })
//     res.status(200).json(products)
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching products", error: error.message })
//   }
// }

const getproduct = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const products = await Product.find({ category: categoryId }); 
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Error fetching products" });
  }
};


module.exports = { GetAllPro, IdProduct, AddPro, UpdatePro, DelProduct , getproduct};

