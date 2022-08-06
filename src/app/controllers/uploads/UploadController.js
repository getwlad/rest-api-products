const fs = require("fs");
class UploadController {
  async create(req, res) {
    const path = req.file.path;
    return res.status(200).json(path);
  }
  async delete(req, res) {
    const filepath = req.params.img;
    const url = `uploads/${filepath}`;
    if (!filepath) {
      return res.status(200).json({ error: "Sem arquvivo" });
    }
    if (!url.match(/uploads/g)) {
      return res.status(200).json({ error: "Confira o caminho" });
    }
    try {
      await fs.unlink(url, (err) => {
        if (err) {
          return res.status(200).json(err);
        }
        return res.status(200).json();
      });
    } catch (error) {
      return res.status(200).json({ error: "error" });
    }
  }
}

export default new UploadController();
