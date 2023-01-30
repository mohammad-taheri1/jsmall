import fs from "fs";
import { fileURLToPath } from "url";
import * as path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathCreator = (route) => {
   return path.join(__dirname, route);
};

const jsFolders = ["assets", "components", "context", "core", "features", "redux", "router", "services", "utils"];

const jsFiles = ["App.css", "App.js", "index.css", "index.js"];

const tsFolders = ["types"];

export const generateReactContents = (projectName, template, cwd) => {
   // General folders
   jsFolders.forEach((path) => {
      const source = pathCreator(`templates/react-js/src/${path}`);
      const destination = `${projectName}/src/${path}`;

      fs.cp(source, destination, { recursive: true }, (err) => {});
   });

   // TS folders
   if (template === "typescript" || template === "redux-typescript-router" || template === "particles-typescript") {
      tsFolders.forEach((path) => {
         fs.mkdirSync(`${projectName}/src/${path}`, { recursive: true });
      });
   }
   // test folder
   fs.cp(pathCreator(`templates/react-js/test`), `${projectName}/test`, { recursive: true }, (err) => {});
   // doc folder
   fs.cp(pathCreator(`templates/react-js/doc`), `${projectName}/doc`, { recursive: true }, (err) => {
      if (err) {
         console.log(err);
      }
   });
   // General files
   jsFiles.forEach((path) => {
      const source = pathCreator(`templates/react-js/src/${path}`);
      const destination = `${projectName}/src/${path}`;

      fs.cp(source, destination, { recursive: true }, (err) => {
         if (err) {
            console.log(err);
         }
      });
   });
};
