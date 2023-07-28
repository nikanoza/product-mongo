import { Schema, model } from "mongoose";

const { String, Number } = Schema.Types;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});

const Product = model("Product", productSchema);
export default Product;
