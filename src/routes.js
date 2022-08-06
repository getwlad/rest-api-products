import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";
import ProductValidator from "./middlewares/ProductValidator";
import ProductController from "./app/controllers/product/ProductController";
import UploadController from "./app/controllers/uploads/UploadController";
const routes = new Router();
const upload = multer(multerConfig);

routes.get("/products", ProductController.index);
routes.post(
  "/products",
  ProductValidator.validateSchema,
  ProductController.create
);
routes.get(
  "/products/:id",
  ProductValidator.validateId,
  ProductController.show
);
routes.put(
  "/products/:id",
  ProductValidator.validateSchema,
  ProductController.update
);
routes.delete(
  "/products/:id",
  ProductValidator.validateId,
  ProductController.delete
);

routes.post("/upload", upload.single("file"), UploadController.create);
routes.delete("/upload/:img", UploadController.delete);

export default routes;
