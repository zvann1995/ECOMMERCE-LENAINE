const Producto = require("../models/productos.model");
let response = {
    msg: "",
    exito: false
}

exports.create = function(req,res) {
    let producto = new Producto({
        nombre: req.body.nombre,
        cantidad: req.body.cantidad,
        precio: req.body.precio
    })

    producto.save(function (err) {
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al guardar el producto"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El producto se guardó correctamente"
        res.json(response)
    })
}

exports.find = function(req,res){
    Producto.find(function(err, productos){
        res.json(productos)
    })
}

exports.findOne = function(req,res){
    Producto.findOne({_id: req.params.id},function(err, producto){
        res.json(producto)
    })
}

exports.update = function(req,res){
    let producto = {
        nombre: req.body.nombre,
        cantidad: req.body.cantidad,
        precio: req.body.precio
    }

    Producto.findByIdAndUpdate(req.params.id, {$set: producto}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al modificar el producto"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El producto se modifico correctamente"
        res.json(response)
    })
}

exports.remove = function(req,res){
    Producto.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al eliminar el producto"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El producto se a eliminado correctamente"
        res.json(response)
    })
}