// Import the 'email-validator' package for validating email addresses

import emailValidator from "email-validator";

// Import the 'axios' package for making HTTP requests - checking validity of GitHub username

import axios from "axios";

// Function to validate if input is not empty

function isNotEmpty(input){

    return input.trim() !== "" ? true : "Cannot accept an empty string!";

}

// Function to validate if input ID is a non-negative integer

function isID(input){

    const number = parseInt(input);

    if(!Number.isInteger(number) || number < 0){

        return false;

    }

    return true;

}

// Function to validate if input ID is unique among employees

function isIDUnique(input, employees){

    if(employees.some(employee => employee.id === input)){

        return false;

    }

    return true;

}

// Function to validate if input ID is non-negative integer and unique

function isIDValid(input, employees){
 

   if(!isID(input)){

        return "ID has to be a non-negative integer!"         

   } 
   
   if(!isIDUnique(input,employees)){

        return "ID has to be unique!"

   }

   return true;

}

// Function to validate if input is a non-negative integer (for office number)

function isOfficeNumber(input){

    const number = parseInt(input);

    if(number < 0 || !Number.isInteger(number)){

        return "Office number has to be a non-negative integer!"

    }

    return true;

}

// Function to validate if input is a valid email address

 function validateEmail(input){

    return emailValidator.validate(input) ? true : `Email: ${input} is not valid.`

}

// Async function to validate if input is a valid GitHub username

async function validateGitHubUsername(username) {

    try {

        // Make a GET request to the GitHub API

        const response = await axios.get(`https://api.github.com/users/${username}`);

        // Check the response status code to determine if the user exists

        if (response?.status === 200) {

            // User exists

            return true;

        } 
        
        else {

            // User does not exist

            return false;

        }

    } 
    
    catch (error) {

        // An error occurred (e.g., user not found or network error)

        return false;

    }

}

// Export all validation functions for use in other files

export {isNotEmpty, isIDValid, isOfficeNumber, validateEmail, validateGitHubUsername};