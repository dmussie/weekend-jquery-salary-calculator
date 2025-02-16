let employeeArray = [];
let monthlyCost = 0;

$(document).ready(readyNow);

function readyNow() {
    console.log('DOM ready');
    //enable submit-button
    $('#submit-button').on('click', newEmployeeInputs);
    calculateMonthlyCost();
    $('#calc-table-body').on('click', '.delete-button', deleteEmployeeRow);
    deleteEmployeeRow();
};

function addNewEmployeeObject(firstNameInput, lastNameInput, 
    idInput, titleInput, annualSalaryInput) {
    console.log('in addNewEmployeeObject:', firstNameInput, 
    lastNameInput, idInput, titleInput, annualSalaryInput);
    console.log($(this));
    const newEmployeeObject = {
        firstName: firstNameInput,
        lastName: lastNameInput,
        id: idInput,
        title: titleInput,
        annualSalary: annualSalaryInput
    }
    employeeArray.push(newEmployeeObject);
    return true;
};
//console.log(employeeArray);
// console.log(newEmployee('Jen', 'Barber', 4521, 'Team Lead', 80000));
//console.log(employeeArray);

function newEmployeeInputs() {
    console.log('in newEmployeeInputs');
    console.log($(this));
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let id = $('#id').val();
    let title = $('#title').val();
    let annualSalary = $('#annual-salary').val();
    let salaryNumber = parseInt(annualSalary);
    
    addNewEmployeeObject(firstName, lastName, id, title, annualSalary);
    // empty inputs after click
    $('#first-name').val('');
    $('#last-name').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annual-salary').val('');
    displayEmployeeTable();
    calculateMonthlyCost();

    if (firstName === '' || lastName === '' || id === '' || 
    title === '' || annualSalary === '') {
        window.alert('Inputs empty! Please enter additonal info.');
    }
};

function displayEmployeeTable() {
    console.log('in displayEmployeeTable');
    console.log($(this));
    $('#calc-table-body').empty();
    for (employee of employeeArray) {
        console.table(employee);
        // append inputs to DOM
        $('#calc-table-body').append(`
            <tr class="employee-row">
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

function deleteEmployeeRow() {
    console.log('in deleteEmployeeRow');
    //console.log($(this));
    //console.log($(this).parent());
    //console.log($(this).parent().parent());
    //console.log($('.employee-row').remove());
    $(this).parent().parent().remove(); // THIS is still fuzzy to me, 
                                        // but I believe a have a decent understanding 
                                        // as to WHY this works
};

let annualSalaryNumber = 0;

function calculateMonthlyCost() {
    console.log('in calculateMonthlyCost');
    console.log($(this));
    console.log('monthly cost start:', monthlyCost);
    for (let i = 0; i < employeeArray.length; i++) {
        //loop through employeeArray and calculate monthly cost
        annualSalaryNumber = parseInt(employeeArray[i].annualSalary);
    }

    let monthlyCostNumber = annualSalaryNumber/12;
    monthlyCost += monthlyCostNumber;
    

    let convertCurrency = Intl.NumberFormat('en-US', { // had help to understand this conversion method
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    });

    let monthlyCostConverted = convertCurrency.format(monthlyCost)
    
    
    console.log('monthly cost after:', monthlyCostConverted);
    $('.content-footer').empty();
    // append monthly cost to DOM
    $('.content-footer').append(`
        <h3>Total Monthly: <span id="monthly-color"> ${monthlyCostConverted}</span></h3>
    `)
    if (monthlyCost > 20000) {
        $('#monthly-color').css({"background-color": "red"});
    }

};


