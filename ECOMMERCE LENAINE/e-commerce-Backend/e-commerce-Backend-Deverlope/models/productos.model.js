const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productoSchema = new Schema({
    nombre:{type:String, required:true, max:60},
    cantidad:{type:Number, required:true, max:10000, min: 0},
    precio:{type:Number, required:true, max:10000000}
});

module.exports = mongoose.model("producto", productoSchema);