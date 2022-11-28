const express = require("express")
const router = express.Router()
const productosController = require("../controllers/productos.controller")


router.get("/", productosController.find)


module.exports = router