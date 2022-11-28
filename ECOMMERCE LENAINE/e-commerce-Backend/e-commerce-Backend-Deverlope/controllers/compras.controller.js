const Compra = require("../models/compras.model");
let response = {
    msg: "",
    exito: false
}

exports.create = function(req,res) {
    let compra = new Compra({
        id_cliente: req.body.id_cliente,
        subtotal: req.body.subtotal,
        id_productos: req.body.id_productos
    })

    compra.save(function (err) {
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al guardar la compra"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "La compra se guardó correctamente"
        res.json(response)
    })
}

exports.find = function(req,res){
    Compra.find(function(err, compras){
        res.json(compras)
    })
}

exports.findOne = function(req,res){
    Compra.findOne({_id: req.params.id},function(err, compra){
        res.json(compra)
    })
}

exports.update = function(req,res){
    let compra = {
        id_cliente: req.body.id_cliente,
        subtotal: req.body.subtotal,
        id_productos: req.body.id_productos
    }

    Compra.findByIdAndUpdate(req.params.id, {$set: compra}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al modificar la compra"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "La compra se modifico correctamente"
        res.json(response)
    })
}

exports.remove = function(req,res){
    Compra.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al eliminar la compra"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "La compra se a eliminado correctamente"
        res.json(response)
    })
}