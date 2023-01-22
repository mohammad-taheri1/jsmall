import fs from "fs";

// const jsFolders = [
//     "assets",
//     "assets/images",
//     "assets/fonts",
//     "auth",
//     "components",
//     "components/general",
//     "components/home",
//     "context",
//     "core",
//     "pages",
//     "redux",
//     "router",
//     "services",
//     "utils",
//     "utils/config",
//     "utils/hooks",
// ];

const jsFolders = [
    "assets",
    "auth",
    "components",
    "context",
    "core",
    "pages",
    "redux",
    "router",
    "services",
    "utils",
];

const jsFiles = [
    "App.css",
    "App.js",
    "index.css",
    "index.js",
]

const tsFolders = ["types"];

export const generateReactContents = (projectName, template, cwd) => {
    // General folders
    jsFolders.forEach((path) => {
        // fs.mkdirSync(`${projectName}/src/${path}`, {recursive: true});
        const source = `${cwd}/templates/react-js/src/${path}`;
        const destination = `${projectName}/src/${path}`;

        fs.cp(source, destination, {recursive: true}, err => {
            if (err) {
                console.log(err)
            }
        })
    });

    // TS folders
    if (
        template === "typescript" ||
        template === "redux-typescript-router" ||
        template === "particles-typescript"
    ) {
        tsFolders.forEach((path) => {
            fs.mkdirSync(`${projectName}/src/${path}`, {recursive: true});
        });
    }
    // test folder
    fs.cp(`${cwd}/templates/react-js/test`, `${projectName}/test`, {recursive: true}, err => {
        if (err) {
            console.log(err)
        }
    })
    // doc folder
    fs.cp(`${cwd}/templates/react-js/doc`, `${projectName}/doc`, {recursive: true}, err => {
        if (err) {
            console.log(err)
        }
    })
    // General files
    jsFiles.forEach((path) => {
        // fs.mkdirSync(`${projectName}/src/${path}`, {recursive: true});
        const source = `${cwd}/templates/react-js/src/${path}`;
        const destination = `${projectName}/src/${path}`;

        fs.cp(source, destination, {recursive: true}, err => {
            if (err) {
                console.log(err)
            }
        })
    });

}