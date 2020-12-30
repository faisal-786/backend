var mongoose = require("mongoose");
const Joi = require("@hapi/joi");
var productSchema = mongoose.Schema({
  name: String,
  contact: String,
  city: String,
  service: String
});
var Product = mongoose.model("Product", productSchema);

function validateProduct(data) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    contact: Joi.string().min(3).max(100).required(),
    city: Joi.string().min(2).max(100).required(),
    service: Joi.string().min(3).max(100).required(),
    
  });
  return schema.validate(data, { abortEarly: false });
}
module.exports.Product = Product;
module.exports.validate = validateProduct;