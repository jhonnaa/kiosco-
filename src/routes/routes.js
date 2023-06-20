const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

router.get('/',productController.productos)
router.get('/agregarForm',productController.formAdd)
router.post('/agregar',productController.create)
router.delete('/delete/:id',productController.delete)
router.get('/editForm/:id',productController.edit)
router.put('/update/:id',productController.update)
module.exports = router
