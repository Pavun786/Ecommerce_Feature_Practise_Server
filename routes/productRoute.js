const express= require("express")
const router = express.Router()
const {createProduct,getAllProducts,findSingleProduct} = require("../Controller/productController")

router.post("/create",createProduct)
router.get("/getAll",getAllProducts)
router.get("/:id",findSingleProduct)

module.exports = router;