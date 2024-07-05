const productModel = require("../model/productModel")


const createProduct = async(req,res)=>{

      try{

     const {productName,categoryName,price,quantity} = req.body;

     console.log(req.body)

      const verifyProduct = await productModel.findOne({productName})

      console.log(verifyProduct)

      if(verifyProduct){

         res.send({message : "Product already exists"})
      }else{
        console.log("exe")
        const createOne = new productModel({
       
            productName : productName,
            categoryName : categoryName ,
            price : price,
            quantity : quantity
          })
          console.log("exe2"),
          await createOne.save();

          res.status(200).send({message : "product created..!"})
     }


      } catch(err){

         res.status(500).send({message : err.message})
      }    
}

const getAllProducts = async(req,res)=>{

   try{
    const allItems = await productModel.find({})
    
    if(allItems){
        res.status(200).send(allItems)
    }else{
        res.send({message : "No products find"})
    }
   }catch(err){

      res.status(500).send({message : err.message})   
    
    }
    
}

const findSingleProduct = async(req,res)=>{

    try{
    
    const {id} = req.params;
    
    const getSingle = await productModel.findById(id) 

    if(getSingle){
        res.status(200).send(getSingle)
    }else{
        res.send({message : "There is No product"})
    }
    }catch(err){
        res.status(500).send({message : err.message})
    }
}


// const editProduct = async(req,res)=>{

//     try{
//         const {id} = req.params;
//         const data = req.body;
    
//         const updateItem = await productModel.findByIdAndUpdate({_id: id ,data})
//         res.status(200).send({message : "Product Updated",updateItem})
//     }catch(err){
//         res.status(500).send({message: err.message})
//     }


// }

module.exports = {createProduct,getAllProducts,findSingleProduct};