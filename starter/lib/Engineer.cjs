// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee.cjs");

// Define a class called Engineer

class Engineer extends Employee{

    // Constructor function that initializes the Engineer object with a name, id, email and GitHub username

    constructor(name, id, email, github){

        // calls constructor of the parent class ("Employee")

        super(name, id, email);

        this.github = github;

    }

    //Method to get the Github username

    getGithub(){

        return this.github;

    }

}

// Export the Engineer class to make it available for use in other files

module.exports = Engineer;