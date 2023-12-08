const express = require("express");
const app = express();

app.get("/demo/config", (req, res) => {
  const key = process.env.CONFIGMAP_KEY || "key";
  const value = process.env.CONFIGMAP_VALUE || "value";
  const secretKey = process.env.SECRET_KEY || "secret-key";
  const credential = require(`${__dirname}/../config/credential.json`);
  const result = { key, value, secretKey, credential };
  res.status(200).send(result);
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
