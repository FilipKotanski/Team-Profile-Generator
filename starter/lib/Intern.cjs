// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// Import the Employee class from the "./Employee.cjs" file

const Employee = require("./Employee.cjs");

// Define a class called Intern that extends the Employee class

class Intern extends Employee{

    // Constructor function that initializes the Intern object with a name, id, email, and school

    constructor(name, id, email, school){

        // Call the constructor of the Employee class with the provided name, id, and email

        super(name, id, email);

        // Assign the school property to the newly created Intern object

        this.school = school;

    }

    // Method to get the school of the Intern

    getSchool(){

        return this.school;

    }

}

// Export the Intern class to make it available for use in other files

module.exports = Intern;