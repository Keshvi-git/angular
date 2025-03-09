const express=require('express')
const Product =require('../Models/Product')
const { GetAllPro, IdProduct, AddPro, UpdatePro, DelProduct, getproduct } = require('../Controller/productController')
const router = express.Router()

router .get('/', GetAllPro)
router.get('/:id', IdProduct)
router.post('/', AddPro)
router.patch('/:id', UpdatePro)
router.delete('/:id', DelProduct)
router.get("/category/:categoryId", getproduct)

router.get('/best-selling', async (req, res) => {
    try {
      const products = await Product.find({ratings:{$gt:4}}).sort({ sales: -1 }).limit(10);
      res.json(products);
    } catch (error) {
      console.error('Error fetching best-selling products:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
module.exports = router