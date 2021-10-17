import fs from "fs-extra";
import path from "path";
import chalk from "chalk";

const success = chalk.green;

export function createVuePreset(): void {
  console.log(success("  created ") + "lasca-app/package.json");
  console.log(success("  created ") + "lasca-app/webpack.config.js");
  console.log(success("  created ") + "lasca-app/public/index.html");
  console.log(success("  created ") + "lasca-app/src/app.vue");
  console.log(success("  created ") + "lasca-app/src/index.js");
  console.log(success("  created ") + "lasca-app/.envrc");

  fs.copySync(path.resolve(__dirname, "template/lasca-app/vue"), "lasca-app");
}
