const express = require("express");
const app = express();

app.get("/demo/configmap", (req, res) => {
  const key = process.env.CONFIGMAP_KEY || "key";
  const value = process.env.CONFIGMAP_VALUE || "value";
  const result = { key, value };
  res.status(200).send(result);
});

app.get("/demo/secret", (req, res) => {
    const secretKey = process.env.SECRET_KEY || "secret-key";
    const result = { secretKey };
    res.status(200).send(result);
});

app.listen(8080, () => {
  console.log("Server is running on port 3000");
});
