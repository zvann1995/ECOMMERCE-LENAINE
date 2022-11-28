const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComprasSchema = new Schema({
    id_cliente:{type:String, required:true},
    subtotal:{type:Number, required:true},
    id_productos:{type:[String], required:true}
});

module.exports = mongoose.model("compras", ComprasSchema);