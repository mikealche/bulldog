#!/usr/bin/env node

import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import { resolve } from "path/posix";

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Worsld!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const routesPath = join(process.cwd(), "routes");
const files = readdirSync(routesPath);
console.log({ routesPath, files });

for (const file of files) {
  const filePath = join(process.cwd(), "routes", file);
  console.log("receiving", `/${file}`, require(filePath));
  app.get(`/${file}`, require(filePath));
}
