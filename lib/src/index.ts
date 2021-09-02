#!/usr/bin/env ts-node-script

import express from "express";
import * as Yup from "yup";
import registerRoutesFromFileSystem from "./fileSystemRouting";
import transformFiles from "./transformFiles";
export { Yup };
export { default as pipe } from "./pipe";

const app = express();

app.use(express.json());

const init = async () => {
  await transformFiles();

  await registerRoutesFromFileSystem(app);

  const port = 3000;
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
};

init();
