#! zx
import { readFileSync, write, writeFileSync } from "fs";
// from flags in script arg
const version = process.argv.at(-1);

// in all subfolders, find package.json files
// exclude node_modules
// for all lines that say "version": "0.0.0",
// replace the text after "version" and before the comma with the version number
// save the file
// print the file name and the line that was changed
// print the total number of files changed
const files = await $`find . -name package.json -not -path "*/node_modules/*"`;
const filenames = files.stdout.split("\n");
let count = 0;
for (const file of filenames) {
  try {
    const text = readFileSync(file, "utf8");
    const json = JSON.parse(text);
    if (json.version !== version) {
      json.version = version;
      const newtext = JSON.stringify(json, null, 2);
      writeFileSync(file, newtext);
      console.log(`Changed ${file} to ${version}`);
      count++;
    }
  } catch (e) {
    // console.error(e);
  }
}
console.log(`Changed ${count} files`);
