let employeeArray = [];
let monthlyCost = 0;

$(document).ready(readyNow);

function readyNow() {
    console.log('DOM ready');
    //enable submit-button
    $('#submit-button').on('click', addNewEmployee);
    calculateMonthlyCost();
};

function newEmployee(firstNameInput, lastNameInput, 
    idInput, titleInput, annualSalaryInput) {
    console.log('in newEmployee:', firstNameInput, 
    lastNameInput, idInput, titleInput, annualSalaryInput);
    const newEmployeeObject = {
        firstName: firstNameInput,
        lastName: lastNameInput,
        id: idInput,
        title: titleInput,
        annualSalary: annualSalaryInput
    }
    employeeArray.push(newEmployeeObject);
    return true;
}
//console.log(employeeArray);
// console.log(newEmployee('Jen', 'Barber', 4521, 'Team Lead', 80000));
//console.log(employeeArray);

function addNewEmployee() {
    console.log('in addNewEmployee');
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let id = $('#id').val();
    let title = $('#title').val();
    let annualSalary = $('#annual-salary').val();
    let salaryNumber = parseInt(annualSalary);
    
    newEmployee(firstName, lastName, id, title, annualSalary);
    // empty inputs after click
    $('#first-name').val('');
    $('#last-name').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annual-salary').val('');
    displayEmployeeTable();
    calculateMonthlyCost();
}

function displayEmployeeTable() {
    console.log('in displayEmployeeTable');
    $('#calc-table-body').empty();
    for (employee of employeeArray) {
        console.table(employee);
        // append inputs to DOM
        $('#calc-table-body').append(`
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td> 
                <td>${employee.id}</td> 
                <td>${employee.title}</td> 
                <td>${employee.annualSalary}</td> 
                <td><button class="delete-button">Delete</button></td>
            </tr>
        `)
    }
};

let annualSalaryNumber = 0;

function calculateMonthlyCost() {
    console.log('in calculateMonthlyCost');
    console.log('monthly cost start:', monthlyCost);
    for (let i = 0; i < employeeArray.length; i++) {
        //loop through employeeArray and calculate monthly cost
        annualSalaryNumber = parseInt(employeeArray[i].annualSalary);
    }
    let monthlyCostNumber = annualSalaryNumber/12;
    monthlyCost += monthlyCostNumber;
    console.log('monthly cost after:', monthlyCost);
    $('#calc-table-footer').empty();
    // append monthly cost to DOM
    $('#calc-table-footer').append(`
        <h3>Total Monthly: ${monthlyCost}</h2>
    `)
    //$('.monthly-cost').empty();
    if (monthlyCost > 20000) {
    $('.monthly-cost').css({"background-color": "red"});
    }

}


//.html() writes over!! eliminates need for clearing rows