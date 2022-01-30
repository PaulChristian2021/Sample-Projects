const router = require("express").Router();
const Product = require("../models/product");

router.get("/", async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).send(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", getProduct, (req, res) => {
  res.send(res.product);
});

router.post("/", async (req, res) => {
  const product = new Product({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    category: req.body.category,
    image: req.body.image,
    ratingrate: req.body.ratingrate,
    ratingcount: req.body.ratingcount,
    stock: req.body.stock,
  });
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch("/:id", getProduct, async (req, res) => {
  if (req.body.title != null) {
    res.product.title = req.body.title;
    res.product.price = req.body.price;
    res.product.description = req.body.description;
    res.product.category = req.body.category;
    res.product.image = req.body.image;
    res.product.ratingrate = req.body.ratingrate;
    res.product.ratingcount = req.body.ratingcount;
    res.product.stock = req.body.stock;
  }
  try{
    const updatedProduct = await res.product.save()
    res.json(updatedProduct)
  }catch(err){
    res.status(400).json({message:err.message})
  }
});

router.delete("/:id", getProduct, async (req, res) => {
  try{
    await res.product.remove()
    res.json({message:'Deleted!'})
  }catch(err){
    res.status(500).json({message: err.message})
  }
});

async function getProduct(req,res,next){
  let product;
  try{
    product = await Product.findById(req.params.id);
    if(product == null){
      return res.status(400).json({message:'Cannot find product.'})
    }
  }catch(err){
    return res.status(500).json({message: err.message})
  }
  console.log(product)
  res.product = product;
  next();
}

module.exports = router;