const product = require('../models/product')



//get controller 

const getAllProducts = async (req,res)=>{
try {
const products = await product.find()
res.status(200).json(products)


}
    
 catch (error) {
    console.log("this is the error",error)

}
}

//post controller


const addProducts = async (req,res)=>{

try {

const {ModelName,desc,price,img} = req.body // getting from body

const newProduct = new product({ModelName,desc,price,img})

const saveProduct = await newProduct.save();
res.status(200).json(saveProduct);
console.log(saveProduct);


} catch (error) {
    res.status(400).json({message:error.message})
 
    
}


} 


const deleteProduct = async (req,res)=>{
     const productId = req.params.id; // ✅ correct
    

     console.log(req.params.id);

try {


    
    const productDelete = await product.findByIdAndDelete(productId);

    if(!productId){

        res.status(404).json({message:"product is not there"})
        
    }
    else{

        res.status(200).json({message:"product deleted succesfully"})

    }

} catch (error) {
  res.status(500).json({ message: "Server error", error: error.message });
}

}


module.exports = {getAllProducts,addProducts,deleteProduct}