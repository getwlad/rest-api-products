import { Op } from "sequelize";
import Product from "../../models/product/ProductModel";
class ProductListService {
  async index(
    name,
    description,
    price,
    img,
    createdBefore,
    createdAfter,
    updatedBefore,
    updatedAfter,
    sort,
    page,
    limit,
    where,
    order
  ) {
    if (name) {
      where = {
        ...where,
        name: {
          [Op.like]: name,
        },
      };
    }

    if (description) {
      where = {
        ...where,
        description: {
          [Op.like]: description,
        },
      };
    }

    if (price) {
      where = {
        ...where,
        price: {
          [Op.in]: price,
        },
      };
    }
    if (img) {
      where = {
        ...where,
        img: {
          [Op.in]: img,
        },
      };
    }
    if (createdBefore) {
      where = {
        ...where,
        createdBefore: {
          [Op.gte]: parseISO(createdBefore),
        },
      };
    }

    if (createdAfter) {
      where = {
        ...where,
        createdAfter: {
          [Op.lte]: parseISO(createdAfter),
        },
      };
    }

    if (updatedBefore) {
      where = {
        ...where,
        updatedBefore: {
          [Op.gte]: parseISO(updatedBefore),
        },
      };
    }

    if (updatedAfter) {
      where = {
        ...where,
        updatedAfter: {
          [Op.lte]: parseISO(updatedAfter),
        },
      };
    }

    if (sort) {
      order = sort.split(",").map((item) => item.split(":"));
    }

    const data = await Product.findAll({
      where,
      order,
      limit,
      offset: limit * page - limit,
    });

    return data;
  }
}

export default new ProductListService();
