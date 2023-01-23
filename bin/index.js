#!/usr/bin/env node

"use strict";
import program from "commander";
import {exec} from "child_process";
import inquirer from "inquirer";
import figlet from "figlet";
import ora from "ora";
import {choices} from "./choices.js";
import {generateReactContents} from "./generator.react.js";

const spin = ora("Initializing started. please wait...");
spin.spinner = "shark";

console.clear();
console.log(figlet.textSync("J s m a ll"));

program.version("1.2.1").description("A CLI for creating both JavaScript and TypeScript projects").parse(process.argv);

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
                {type: "input", name: "inputName", message: "Select your project name (lower-case) : "},
            ])
            .then(({template, inputName}) => {
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
                    spin.text = "Project initializad successfully";
                    spin.succeed();
                    console.log(" ");
                    console.log("Adding files and folders started. please wait...");
                    console.log(" ");

                    // generate folders and files for react projects
                    generateReactContents(name, template);

                    console.log("scaffolding finished. Now you can use it. Good luck...");
                });
            });
    });

program.parse(process.argv);
