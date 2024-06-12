import fs from "fs";
import path from "path";

export function getFilesInDirectory(directory: string) {
  try {
    return fs.readdirSync(directory).map((file) => path.join(directory, file));
  } catch (err) {
    console.error(`Error reading directory: ${err}`);
    return [];
  }
}
