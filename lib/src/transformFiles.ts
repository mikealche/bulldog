import FastGlob from "fast-glob";
import mkdirp from "mkdirp";
import { join } from "path";
import { transform, transformAsync } from "@babel/core";
import { readFileSync, writeFileSync } from "fs";

const transformFiles = async () => {
  const dir = join(process.cwd(), ".bulldog");
  mkdirp.sync(dir);

  const sourceDirectory = join(process.cwd(), "routes", "**");
  const outDirectory = join(process.cwd(), ".bulldog");
  const files = await FastGlob(sourceDirectory);

  for (const file of files) {
    console.log(readFileSync(file, { encoding: "utf-8" }));
    const result = await transformAsync(
      readFileSync(file, { encoding: "utf-8" }),
      {}
    );
    writeFileSync(outDirectory, result?.code!);
    console.log({ result });
  }
  console.log(files);
};

export default transformFiles;
