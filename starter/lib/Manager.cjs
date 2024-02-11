// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// Import the Employee class from the "./Employee.cjs" file

const Employee = require("./Employee.cjs");

// Define a class called Manager that extends the Employee class

class Manager extends Employee{

    // Constructor function that initializes the Manager object with a name, id, email, and officeNumber

    constructor(name, id, email, officeNumber){

        // Call the constructor of the Employee class with the provided name, id, and email

        super(name, id, email);

        // Assign the officeNumber property to the newly created Manager object

        this.officeNumber = officeNumber;

    }

    // Method to get the office number of the Manager

    getOfficeNumber(){

        return this.officeNumber;

    }

}

// Export the Manager class to make it available for use in other files

module.exports = Manager;