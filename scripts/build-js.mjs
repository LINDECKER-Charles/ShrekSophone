import { mkdir, readFile, writeFile } from "node:fs/promises";

const sharedModules = ["src/lib/video.js", "src/lib/dom.js"];
const entryPoints = [
  { input: "src/shrek.js", output: ".generated/dist/shrek.min.js" },
  { input: "src/shrek-all.js", output: ".generated/dist/shrek-all.min.js" }
];

function stripModuleSyntax(source) {
  return source
    .replace(/^\s*\/\*.*?\*\/\s*$/gm, "")
    .replace(/^\s*import\s+.*?;\s*$/gm, "")
    .replace(/\bexport\s+/g, "")
    .trim();
}

function compact(source) {
  return source
    .replace(/\r?\n+/g, "\n")
    .replace(/[ \t]+\n/g, "\n")
    .trim();
}

await mkdir(".generated/dist", { recursive: true });

const sharedSourceParts = [];
for (const modulePath of sharedModules) {
  const source = await readFile(modulePath, "utf8");
  sharedSourceParts.push(stripModuleSyntax(source));
}

for (const entryPoint of entryPoints) {
  const entrySource = await readFile(entryPoint.input, "utf8");
  const bundle = compact(
    `(function () {
${sharedSourceParts.join("\n\n")}

${stripModuleSyntax(entrySource)}
})();`
  );

  await writeFile(entryPoint.output, `${bundle}\n`);
}
