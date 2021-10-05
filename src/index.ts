import fs from "fs-extra";
import path from "path";
import chalk from "chalk";

const success = chalk.green;
const command = chalk.cyan;
const commandStrong = chalk.cyan.bold;
const gray = chalk.gray;

module.exports = () => {
  console.log("");
  console.log(success("  created ") + "lasca-app/package.json");
  console.log(success("  created ") + "lasca-app/webpack.config.js");
  console.log(success("  created ") + "lasca-app/public/index.html");
  console.log(success("  created ") + "lasca-app/src/app.vue");
  console.log(success("  created ") + "lasca-app/src/index.js");
  console.log(success("  created ") + "lasca-app/.envrc");

  fs.copySync(path.resolve(__dirname, "template/lasca-app"), "lasca-app");

  console.log("\n🎉  Successfully created");
  console.log("👉  Get started with the following commands");
  console.log(gray("\n $ ") + command("cd lasca-app"));
  console.log(gray(" $ ") + command("yarn install"));
  console.log(
    gray(" $ ") +
      command("export LASCA_API_TOKEN=<YOUR_API_TOKEN>") +
      "  ( Get your API token from https://lasca.app/signup )"
  );
  console.log(gray(" $ ") + command("yarn lasca pull"));
  console.log(gray(" $ ") + command("yarn webpack serve"));
  console.log("");
  console.log(
    "Then app will run at " +
      command("http://localhost:") +
      commandStrong("8080")
  );
  console.log("");
};
