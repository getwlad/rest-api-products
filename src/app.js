import express from "express";
import routes from "./routes";
import "./database/index";
import "dotenv/config";
const cors = require("cors");
class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.server.use(express.json());
    this.server.use("/uploads", express.static("uploads"));
    this.server.use(cors());
  }
  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
