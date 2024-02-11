// Import the required classes from their respective files

import Manager from "./lib/Manager.cjs";

import Engineer from "./lib/Engineer.cjs";

import Intern from "./lib/Intern.cjs";

// Import path module for handling file paths

import path from "path";

// Import fs module for file system operation

import fs from "fs";

// Import render function from page-template.cjs for rendering HTML

import render from "./src/page-template.cjs";

// Import inquirer for collecting user input

import inquirer from "inquirer";

// Import fileURLToPath function from 'url' module to define __dirname

import { fileURLToPath } from "url";

// Import question arrays from Questions.mjs module

import * as Questions from "./lib/Questions.mjs";

const { managerQuestions, engineerQuestions, GitHubQuestion, internQuestions, menuQuestion } = Questions;

//import validation function for GitHub username

import {validateGitHubUsername} from "./lib/Validation.mjs";

// Define constants for file paths and directory

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const OUTPUT_DIR = path.resolve(__dirname, "output");

const outputPath = path.join(OUTPUT_DIR, "team.html");

// Initialize an array to store employees

const employees = [];

// Initialize variable to store the selected menu option

let selectedOption;


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Function to add a manager to the employees array

async function addManager(){

    try{

        const {name, id, email, officeNumber} = await inquirer.prompt(managerQuestions);

        employees.push(new Manager(name, id, email, officeNumber));

    }

    catch(error){

        console.log("An error has occured: ", error.message);

    }

}

// Function to add an engineer to the employees array

//had to split questions about engineer to avoid race condition 

//when making http request to github api - not calling an asynchronous function

//from within inquirer.prompt

async function addEngineer(){

    try{

        const {name, id, email} = await inquirer.prompt(engineerQuestions);

        let isValid, github;
    
        do{

            const answer = await inquirer.prompt(GitHubQuestion);

            github = answer.github;

            isValid = await validateGitHubUsername(github);
            
            if(!isValid){

                console.log(`${github} is not a valid GitHub username.`);

            }

        }while(!isValid)

        employees.push(new Engineer(name, id, email, github));
    
    }

    catch(error){

        console.error("An error has occurred: ", error.message);

    }
   
}


// Function to add an intern to the employees array

async function addIntern(){

    try{

        const internAnswers = Object.values(await inquirer.prompt(internQuestions));
                        
        employees.push(new Intern(...internAnswers));

    }

    catch{

        console.error("An error has occurred: ", error.message);

    }

}

// Function to check if the program should continue running based on user input

async function shouldRun(){

    try{

        selectedOption = (await inquirer.prompt(menuQuestion)).menu;

        return selectedOption !== "Finish building the team";

    }

    catch(error){

        console.error("An error has occurred: ", error.message);

    }

}

// Function to gather information about the team members

async function gatherTeamInformation() {

    try {

        await addManager();
        
        while (await shouldRun()) {
            
            switch (selectedOption) {

                case "Add an engineer":

                                        await addEngineer();
                                        
                                        break;

                case "Add an intern":

                                        await addIntern();
                    
                                        break;

                default : console.log("Invalid selection!")

            }

        }

    }
    
    catch (error) {

        console.error("An error occurred: ", error.message);

    }

}

// Function to save the team information to a file asynchoronously (promises)

async function saveToFile() {

    try {

        await fs.promises.mkdir(OUTPUT_DIR, { recursive: true });

        await fs.promises.writeFile(outputPath, render(employees));

        const fileName = path.basename(outputPath);

        const directoryPath = path.dirname(outputPath);

        console.log(`File ${fileName} saved successfully to:\n${directoryPath}`);

    } 
    
    catch (error) {

        console.error("Error occurred while saving file:", error.message);

    }

}

//entry point of the app

async function main(){

    // Call functions to gather team information and save it to a file

    await gatherTeamInformation();

    await saveToFile();

}

main();

// Export the 'employees' array for use in other files

export {employees};
    