import prompts from "prompts";
import chalk from "chalk";
import { createVueTemplate } from "./template/vue";
import { createReactTemplate } from "./template/react";
import { createNuxtTemplate } from "./template/nuxt";
import { createNextTemplate } from "./template/next";

const command = chalk.cyan;
const commandStrong = chalk.cyan.bold;
const gray = chalk.gray;
const error = chalk.red;

module.exports = async () => {
  console.log("");
  const response = await prompts({
    type: "select",
    name: "value",
    message: "Please pick a preset:",
    choices: [
      { title: "Vue.js", value: "vue" },
      { title: "React", value: "react" },
      { title: "Nuxt.js", value: "nuxt" },
      { title: "Next.js", value: "next" },
    ],
    initial: 0,
  });
  console.log("");

  switch (response.value) {
    case "vue":
      createVueTemplate();
      break;
    case "react":
      createReactTemplate();
      break;
    case "nuxt":
      createNuxtTemplate();
      break;
    case "next":
      createNextTemplate();
      break;
    default:
      console.log(error("The preset does not exist."));
      return;
  }

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

  switch (response.value) {
    case "vue":
    case "react":
      console.log(gray(" $ ") + command("yarn webpack serve\n"));
      console.log(
        "Then app will run at " +
          command("http://localhost:") +
          commandStrong("8080") +
          "\n"
      );
      break;
    case "nuxt":
      console.log(gray(" $ ") + command("yarn nuxt\n"));
      console.log(
        "Then app will run at " +
          command("http://localhost:") +
          commandStrong("3000") +
          "\n"
      );
      break;
    case "next":
      console.log(gray(" $ ") + command("yarn next dev\n"));
      console.log(
        "Then app will run at " +
          command("http://localhost:") +
          commandStrong("3000") +
          "\n"
      );
      break;
  }
};
