import fs from "fs-extra";
import path from "path";

module.exports = () => {
  console.log(process.cwd());
  console.log(__dirname);

  fs.copySync(path.resolve(__dirname, "template/lasca-app"), "lasca-app");
};
