import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

export const checkProductExists = async (itemId: number): Promise<boolean> => {
  const item: Product | null = await ProductRepository.findOneBy({
    id: itemId,
  });
  return !!item;
};

export const getProductsService = async (): Promise<Product[]> => {
  return await ProductRepository.find();
};

export const getProductByIdService = async(id:number):Promise<Product | null> => {
 const product = await ProductRepository.findOneBy({
  id
 })
 return product;
}


export const getProductsByCategoryId = async (categoryId: number) => {
  const products = await ProductRepository.find({ where: { categoryId } });
  return products;
};