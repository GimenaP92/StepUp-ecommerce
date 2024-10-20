import { Request, Response } from "express";
import { catchedController } from "../utils/catchedController";
import { getProductsService, getProductByIdService, getProductsByCategoryId } from "../services/products.service";

export const getProducts = catchedController(
  async (req: Request, res: Response) => {
    const products = await getProductsService();
    res.json(products);
  }
);


export const getProductById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const product = await getProductByIdService((id)); 
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
}


export const fetchProductsByCategory = async (req: Request, res: Response) => {
  const categoryId = parseInt(req.params.categoryId); // Cambia aquí para obtener el categoryId de los parámetros de la ruta

  if (isNaN(categoryId)) {
    return res.status(400).json({ error: 'Invalid category ID' });
  }

  try {
    const products = await getProductsByCategoryId(categoryId);
    
    if (products.length === 0) {
      return res.status(404).json({ message: 'No products found for this category' });
    }

    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
};