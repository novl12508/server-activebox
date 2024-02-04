import productRepository from "../repositories/product.repository.js";

import { IProductData } from "./products.interface.js";

class ProductServices {
  async all() {
    try {
      const products = await productRepository.findAll();
      return products;
    } catch (err) {
      throw err;
    }
  }

  async create(data: IProductData) {
    try {
      const productCreate = await productRepository.create(data);
      return productCreate;
    } catch (err) {
      throw err;
    }
  }

  async getOne(id: string) {
    try {
      const product = await productRepository.findByOne(id);

      if (!product) {
        throw new Error("Такой продукт не найден");
      }
      return product;
    } catch (err) {
      throw err;
    }
  }
}

export default new ProductServices();
