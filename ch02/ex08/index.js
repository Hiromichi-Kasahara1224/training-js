import fs from "fs";
import * as acorn from "acorn";

const inputFile1 = "ch02/ex08/file1.js";
const inputFile2 = "ch02/ex08/file2.js";

const code1 = fs.readFileSync(inputFile1, "utf-8");
const ast1 = acorn.parse(code1, { ecmaVersion: "latest" });

const code2 = fs.readFileSync(inputFile2, "utf-8");
const ast2 = acorn.parse(code2, { ecmaVersion: "latest" });

fs.writeFileSync(`ch02/ex08/file1.ast.json`, JSON.stringify(ast1, null, 2));
fs.writeFileSync(`ch02/ex08/file2.ast.json`, JSON.stringify(ast2, null, 2));
