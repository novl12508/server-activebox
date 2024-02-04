import basketRepositories from "../repositories/basket.repository.js";

class BasketServices {
  async getAll(id: string) {
    try {
      const productsByUserId = await basketRepositories.allByUser(id);

      return productsByUserId;
    } catch (err) {
      throw err;
    }
  }

  async create(productId: string, id: string) {
    try {
      const basket = await basketRepositories.create("2", "1");
      return basket.products;
    } catch (err) {
      throw err;
    }
  }
}

export default new BasketServices();
