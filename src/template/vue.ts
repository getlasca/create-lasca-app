import fs from "fs-extra";
import path from "path";
import chalk from "chalk";

const success = chalk.green;

export function createVueTemplate(): void {
  console.log(success("  created ") + "lasca-app/package.json");
  console.log(success("  created ") + "lasca-app/webpack.config.js");
  console.log(
    success("  created ") + "lasca-app/lasca/components/component_1.json"
  );
  console.log(success("  created ") + "lasca-app/public/index.html");
  console.log(success("  created ") + "lasca-app/src/app.vue");
  console.log(success("  created ") + "lasca-app/src/index.js");

  fs.copySync(
    path.resolve(__dirname, "../template/lasca-app/vue"),
    "lasca-app"
  );
}
