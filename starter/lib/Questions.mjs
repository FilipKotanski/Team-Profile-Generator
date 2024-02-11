// Import the 'employees' array from the "../index.js" file

import {employees} from "../index.js";

// Import all functions from the "Validation.mjs" module as an object named "Validation"

import * as Validation from "./Validation.mjs";

// Define questions for gathering information about a manager

const managerQuestions = [

    {

        type: "input",

        name: "name",

        message: "Enter manager's name:",

        // Validate if the input is not empty

        validate: Validation.isNotEmpty

    },
    {

        type: "input",

        name: "id",

        message: "Enter manager's id:",

        // Validate if the ID is non-negative integer and is it unique

        validate: input =>  Validation.isIDValid(input, employees) 

    },
    {

        type: "input",

        name: "email",

        message: "Enter manager's email address:",

        // Validate if the email address is valid

        validate: Validation.validateEmail

    },
    {

        type: "input",

        name: "officeNumber",

        message: "Enter manager's office number:",

        // Validate if the office number is valid

        validate: Validation.isOfficeNumber

    },
    
]

// Define questions for gathering information about an engineer

const engineerQuestions = [

    {

        type: "input",

        name: "name",

        message: "Enter engineer's name:",

        // Validate if the input is not empty

        validate: Validation.isNotEmpty

    },
    {

        type: "input",

        name: "id",

        message: "Enter engineer's id:",

        // Validate if the ID is non-negative integer and is it unique

        validate: input =>  Validation.isIDValid(input, employees) 

    },
    {

        type: "input",

        name: "email",

        message: "Enter engineer's email address:",

        // Validate if the email address is valid

        validate: Validation.validateEmail

    }
    
]

//question about GitHub username - separation of questions necessary 

//to avoid race condition when making api request

const GitHubQuestion = [

    {

        type: "input",

        name: "github",

        message: "Enter engineer's GitHub username:",

    }                      


]

// Define questions for gathering information about an intern

const internQuestions = [

    {

        type: "input",

        name: "name",

        message: "Enter intern's name:",

        // Validate if the input is not empty

        validate: Validation.isNotEmpty

    },
    {

        type: "input",

        name: "id",

        message: "Enter intern's id:",

        // Validate if the ID is non-negative integer and is it unique

        validate: input =>  Validation.isIDValid(input, employees) 

    },
    {

        type: "input",

        name: "email",

        message: "Enter intern's email address:",

        // Validate if the email address is valid

        validate: Validation.validateEmail

    },
    {

        type: "input",

        name: "school",

        message: "Enter intern's school:",

        // Validate if the input is not empty

        validate: Validation.isNotEmpty

    }
   
]

// Define a question for the menu selection

const menuQuestion = [
    
    {

    type: "list",

    name: "menu",

    message: "Choose one of the options:",

    choices: ["Add an engineer", "Add an intern", "Finish building the team"]

    }

]

// Export all question arrays for use in other files

export {managerQuestions, engineerQuestions, GitHubQuestion, internQuestions, menuQuestion};