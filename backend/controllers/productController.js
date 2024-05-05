const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apiFeatures");
// create product
exports.createProduct = catchAsyncErrors(async (req,res,next)=>{
    const product = await Product.create(req.body);
    res.status(201).json(
        {
            success:true,
            product
        }
    )

});

// get all product
exports.getAllProducts = catchAsyncErrors(async (req,res)=>{
    const apiFeatures= new ApiFeatures(Product.find(),req.query);
    const products = await apiFeatures.query;

    res.status(200).json(
        {
            success:true,
            products
        }
    )
});
// get product details
exports.getProductDetails = catchAsyncErrors(async (req,res,next)=>{
    const product = await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler("Product not found", 404));
    }
    res.status(200).json({
        success:true,
        product
    })
});

// update product information
exports.updateProduct = catchAsyncErrors(async (req,res,next)=>{
    let product = await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success:false,
            message:"product not found"
        })
    }
    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });
    res.status(200).json({
        success:true,
        product
    })
});

// delete product
exports.deleteProduct = catchAsyncErrors(async (req,res,next)=>{
 const product = await Product.findById(req.params.id);
 if(!product){
    return res.status(500).json(
        {
            success: false,
            message:"product not found"
        }
    )
 }
 await product.deleteOne();
 res.status(200).json({
    success:true,
    message: "product successsfully deleted"
 })
});