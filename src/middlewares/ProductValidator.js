import * as Yup from "yup";
class ProductValidator {
  async validateSchema(req, res, next) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required(),
      price: Yup.string().required(),
      img: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(404).json({ error: "Error on validate schema" });
    }

    next();
  }
  async validateId(req, res, next) {
    const id = req.params.id;
    if (!id) {
      res.status(404).json({ Error: "Id inválida" });
    }
    next();
  }
}

export default new ProductValidator();
