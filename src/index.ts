import chalk from "chalk";
import { createVuePreset } from "./preset/vue";

const command = chalk.cyan;
const commandStrong = chalk.cyan.bold;
const gray = chalk.gray;

module.exports = () => {
  console.log("");

  createVuePreset();

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
