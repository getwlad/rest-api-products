import Product from "../../models/product/ProductModel";
import ProductListService from "../../services/product/ProductListService";
import { v4 } from "uuid";
class ProductController {
  async index(req, res) {
    const {
      name,
      description,
      price,
      img,
      createdBefore,
      createdAfter,
      updatedBefore,
      updatedAfter,
      sort,
    } = req.query;
    const page = req.query.page || 1;
    const limit = req.query.limit || 25;
    let where = {};
    let order = [];
    const data = await ProductListService.index(
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
    );

    return res.json(data);
  }
  async create(req, res) {
    const { name, description, price, img } = req.body;

    const product = await Product.create({
      name,
      description,
      price,
      img,
    });
    return res.status(201).json(product);
  }
  async show(req, res) {
    const id = req.params.id;
    const product = await Product.findByPk(id);
    if (!product) {
      res.status(404).json({ Error: "Produto não encontrado" });
    }
    return res.status(200).json(product);
  }
  async update(req, res) {
    const id = req.params.id;
    const product = await Product.findByPk(id);
    if (!product) {
      res.status(404).json({ Error: "Produto não encontrado" });
    }
    await product.update(req.body);
    return res.status(200).json(product);
  }
  async delete(req, res) {
    const id = req.params.id;
    const product = await Product.findByPk(id);
    if (!product) {
      res.status(404).json({ Error: "Produto não encontrado" });
    }
    await product.destroy();
    return res.status(200).json({ msg: "sucesso" });
  }
}

export default new ProductController();
