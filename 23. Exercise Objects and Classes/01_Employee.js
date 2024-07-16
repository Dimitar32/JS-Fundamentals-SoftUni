class Employee {
    constructor(nme) {
        this.nme = nme;
        this.personalNumber = nme.length;   
    }

    outputEmployee() {
        console.log(`Name: ${this.nme} -- Personal Number: ${this.personalNumber}`);
    }
}

function result(input) {
    for (let i = 0; i < input.length; i++) {
        let e = new Employee(input[i]);
        e.outputEmployee();
    }
}

result(["Ivan Ivanov", "Petko Ivanov"]);