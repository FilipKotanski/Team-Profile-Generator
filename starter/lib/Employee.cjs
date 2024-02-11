// TODO: Write code to define and export the Employee class

// Define a class called Employee

class Employee{

    // Constructor function that initializes the Employee object with a name, id, and email

    constructor(name, id, email){

        this.name = name;

        this.id = id;

        this.email = email;

    }

    // Method to get the name of the Employee

    getName(){

        return this.name;

    }

    // Method to get the id of the Employee

    getId(){

        return this.id;

    }

    // Method to get the email of the Employee

    getEmail(){

        return this.email;

    }

    // Method to get the role of the Employee

    getRole(){

        // Return the name of the class ("Employee")

        return this.constructor.name;

    }

}

// Export the Employee class to make it available for use in other files

module.exports = Employee;