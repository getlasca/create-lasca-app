import fs from "fs-extra";
import path from "path";
import chalk from "chalk";

const success = chalk.green;

module.exports = () => {
  console.log(success("created"));

  fs.copySync(path.resolve(__dirname, "template/lasca-app"), "lasca-app");

  console.log("✨ File Generate Done");
};
