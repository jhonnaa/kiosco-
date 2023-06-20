const jsonDb = require('../model/jsonDatabase')

const productModel = jsonDb('productos')


const productControler = {
    productos: (req, res) => {
        let producto = productModel.all()

        //let filtrados = productModel.all()

        
        //let filter= filtrados.filter(element=>element.categoria == req.body.categoria)


        //let fil= filter.filter(element=>element.precio <= req.body.max &&  element.precio >= req.body.min)
        
        res.render('index',{producto})
    },

    formAdd:(req,res)=>{
        res.render('formAgregar')
    },
    create:(req,res)=>{
        let newProduct = productModel.create({
            nombre: req.body.nombre,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
            foto: req.body.foto,
            stock: req.body.stock
        })

        res.redirect('/')
    },
    delete:(req,res)=>{
        productModel.delete(req.params.id)
        res.redirect('/')
    },
    edit:(req,res)=>{
        let producto = productModel.find(req.params.id)
        res.render('editForm',{producto})
    },
    update:(req,res)=>{
        let productToUpdate = productModel.find(req.params.id)
        let productAct = ({
            id: productToUpdate.id,
            nombre: req.body.nombre,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
            foto: req.body.foto,
            stock: req.body.stock
        })
        productModel.update(productAct)
        res.redirect("/")
        
    }
}

module.exports = productControler