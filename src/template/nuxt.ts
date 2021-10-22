import fs from "fs-extra";
import path from "path";
import chalk from "chalk";

const success = chalk.green;

export function createNuxtTemplate(): void {
  console.log(success("  created ") + "lasca-app/package.json");
  console.log(success("  created ") + "lasca-app/nuxt.config.js");
  console.log(
    success("  created ") + "lasca-app/lasca/components/component_1.json"
  );
  console.log(success("  created ") + "lasca-app/pages/index.vue");

  fs.copySync(
    path.resolve(__dirname, "../template/lasca-app/nuxt"),
    "lasca-app"
  );
}
