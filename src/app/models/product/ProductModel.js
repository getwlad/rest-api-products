import Sequelize, { Model } from "sequelize";
class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
        },
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        price: Sequelize.STRING,
        img: Sequelize.STRING,
      },
      {
        sequelize,
        name: {
          singular: "product",
          plurar: "products",
        },
      }
    );
  }
}

export default Product;
