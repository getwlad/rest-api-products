import app from "./app";
require("dotenv/config");

app.listen(process.env.PORT || 3001, "0.0.0.0");
