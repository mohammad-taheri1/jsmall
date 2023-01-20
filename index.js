import program from "commander";
import { exec } from "child_process";
import fs from "fs";
import inquirer from "inquirer";
import figlet from "figlet";
import ora from "ora";

const spin = ora("Initializing started. please wait...");
spin.spinner = "shark";

console.log(figlet.textSync("Jsart"));

const choices = [
   { name: "React (raw)", value: "react", lang: "js" },
   { name: "React + TypeScript", value: "typescript", lang: "ts" },
   { name: "React + Redux + TypeScript + Router", value: "redux-typescript-router", lang: "ts" },
   { name: "React + SCSS", value: "scss", lang: "js" },
   { name: "React + Cypress", value: "cypress", lang: "js" },
   { name: "React + Particles ", value: "particles", lang: "js" },
   { name: "React + Particles + TypeScript", value: "particles-typescript", lang: "ts" },
];

const jsFolders = [
   "assets",
   "assets/images",
   "assets/fonts",
   "components",
   "components/general",
   "components/home",
   "core",
   "pages",
   "redux",
   "router",
   "services",
   "utils",
];

const tsFolders = ["types"];

program
   .version("1.0.0")
   .description("This is a CLI for creating both JavaScript and TypeScript projects")
   .parse(process.argv);

program
   .command("init")
   .description("Initialize new project")
   .action((projectName) => {
      inquirer
         .prompt([
            {
               type: "rawlist",
               name: "template",
               message: "Select your template:",
               choices: choices,
            },
            { type: "input", name: "inputName", message: "Select your project name (lower-case) : " },
         ])
         .then(({ template, inputName, lang }) => {
            const name = inputName.toLowerCase();
            let command = "";
            if (template === "react") {
               command = `npx create-react-app ${name}`;
            } else {
               command = `npx create-react-app ${name} --template ${template}`;
            }
            spin.start();
            exec(command, (err, stdout, stderr) => {
               if (err) {
                  spin.fail();
                  spin.text = "An error occured. please send the error screenshot to email:mamad.taheri.68@gmail.com";
                  console.error(err);
                  return;
               }
               spin.succeed();
               spin.text = "Project inittializad successfully";
               console.log("***********************************************************");
               console.log("start adding folders and files...");

               // General folders
               jsFolders.forEach((path) => {
                  fs.mkdirSync(`${name}/src/${path}`, { recursive: true });
                  console.log(path);
               });

               // TS folders
               if (lang === "ts") {
                  tsFolders.forEach((path) => {
                     fs.mkdirSync(`${name}/src/${path}`, { recursive: true });
                     console.log(path);
                  });
               }

               // test folder
               fs.mkdirSync(`${name}/test`, { recursive: true });

               // doc folder
               fs.mkdirSync(`${name}/doc`, { recursive: true });

               console.log("we're done...");
            });
         });
   });

program.parse(process.argv);
