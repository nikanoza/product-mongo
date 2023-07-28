import { Request, Response } from "express";
import { v4 as uuid } from "uuid";

import Product from "../models/Product.js";

export const getProducts = async (_: Request, res: Response) => {
  try {
    const data = await Product.find();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(401).json(error);
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { title, price } = req.body;
    const id = uuid();

    const newProduct = new Product({
      title,
      price,
      id,
    });

    await newProduct.save();

    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(401).json(error);
  }
};
