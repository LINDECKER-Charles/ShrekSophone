import { mkdir, readFile, writeFile } from "node:fs/promises";

await mkdir("src/style", { recursive: true });

const source = await readFile("src/style/input.css", "utf8");
const minified = source
  .replace(/\/\*[\s\S]*?\*\//g, "")
  .replace(/\s+/g, " ")
  .replace(/\s*([{}:;,>])\s*/g, "$1")
  .replace(/;}/g, "}")
  .trim();

await writeFile("src/style/output.css", `${minified}\n`);
