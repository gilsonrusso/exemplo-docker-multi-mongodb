const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api", (request, response) => {
  return response.status(200).json({ message: "MICROSERVIÇO TWO OK!" });
});

app.listen(3333, () => {
  console.log("🚀 Microservico started at port: 3333");
});
