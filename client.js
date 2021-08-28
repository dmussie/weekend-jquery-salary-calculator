let employeeArray = [];
let monthly = 0;

$(document).ready(readyNow);

function readyNow() {
    console.log('DOM ready');
    //enable submit-button
    $('#submit-button').on('click', addNewEmployee);
};

function newEmployee(firstNameInput, lastNameInput, idInput, titleInput, annualSalaryInput) {
    console.log('in newEmployee:', firstNameInput, lastNameInput, idInput, titleInput, annualSalaryInput);
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
//console.log(newEmployee('Jen', 'Barber', 4521, 'Team Lead', 80000));
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
    // append inputs to DOM
    // let el = $('.calc-inputs');
    // el.append(`
    //     <tr>
    //         <th>${firstName}</th>
    //         <th>${lastName}</th>
    //         <th>${id}</th>
    //         <th>${title}</th>
    //         <th>${salaryNumber}</th>
    //     </tr>
    
    // `)
}

function displayEmployeeTable() {
    console.log('in displayEmployeeTable');
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


function calculateMonthlyCost() {
    // calculate monthly cost
monthlyCost += salaryNumber/12;
console.log('monthly cost:', monthlyCost);

// append monthly cost to DOM
$('.calc-content').append(`
    <div class="monthly-cost">
        <h3>Total Monthly: ${monthlyCost}</h2>
    </div>
`)
//$('.monthly-cost').empty();
if (monthlyCost > 20000) {
    $('.monthly-cost').css({"background-color": "red"});
}

}


//.html() writes over!! eliminates need for clearing rows