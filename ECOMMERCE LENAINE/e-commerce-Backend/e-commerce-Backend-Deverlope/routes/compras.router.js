const express = require("express")
const router = express.Router()
const comprasController = require("../controllers/compras.controller")

router.post("/", comprasController.create)

router.get("/", comprasController.find)
router.get("/:id", comprasController.findOne)
router.put("/:id", comprasController.update)
router.delete("/:id", comprasController.remove)

module.exports = router