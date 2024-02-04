import basketRepositories from "../repositories/basket.repository.js";

class BasketServices {
  async getAll(id: number) {
    try {
      const productsByUserId = await basketRepositories.allByUser(id);

      return productsByUserId;
    } catch (err) {
      throw err;
    }
  }

  async create(id: number, productId: string, img: string) {
    try {
      const basket = await basketRepositories.create(id, productId, img);
      return basket.products;
    } catch (err) {
      throw err;
    }
  }
}

export default new BasketServices();
