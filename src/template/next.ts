import fs from "fs-extra";
import path from "path";
import chalk from "chalk";

const success = chalk.green;

export function createNextTemplate(): void {
  console.log(success("  created ") + "lasca-app/package.json");
  console.log(success("  created ") + "lasca-app/next.config.js");
  console.log(
    success("  created ") + "lasca-app/lasca/components/component_1.json"
  );
  console.log(success("  created ") + "lasca-app/pages/index.jsx");

  fs.copySync(
    path.resolve(__dirname, "../template/lasca-app/next"),
    "lasca-app"
  );
}
