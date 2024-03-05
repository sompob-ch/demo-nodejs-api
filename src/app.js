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

app.get("/tanos/cpu", (req, res) => {
  // การคำนวณที่ใช้ CPU อย่างหนัก
  const fibonacci = (n) => {
    if (n < 2) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  };
  const startUsage = process.cpuUsage();
  result = fibonacci(50); // ค่านี้สามารถปรับเพื่อเพิ่มหรือลดการใช้ CPU
  const endUsage = process.cpuUsage(startUsage);
  console.log(`CPU Usage: User ${endUsage.user / 1000} ms, System ${endUsage.system / 1000} ms`);
  res.status(200).send();
});

app.get("/tanos/mem", (req, res) => {
  const memoryHog = [];
  // while (true) {
    // สร้าง object ขนาดใหญ่และเพิ่มเข้าไปใน array
    const hog = new Array(1000000).fill("Kubernetes testing");
    memoryHog.push(hog);
    console.log(
      `Allocated memory size: ${
        process.memoryUsage().heapUsed / 1024 / 1024
      } MB`
    );
  // }
  res.status(200).send();
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
