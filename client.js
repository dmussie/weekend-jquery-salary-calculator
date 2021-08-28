$(document).ready(readyNow);

function readyNow() {
    console.log('DOM ready');
    //enable submit-button
    $('#submit-button').on('click', addNewEmployee) 
};

let monthlyCost = 0;

function addNewEmployee() {
    console.log('in addNewEmployee');
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let id = $('#id').val();
    let title = $('#title').val();
    let annualSalary = $('#annual-salary').val();
    let salaryNumber = parseInt(annualSalary);
    console.log(firstName, lastName, id, title, salaryNumber);

    // empty inputs after click
    $('#first-name').val('');
    $('#last-name').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annual-salary').val('');

    // append inputs to DOM
    $('#calc-table-body').append(`
        <tr>
            <th>${firstName}</th>
            <th>${lastName}</th>
            <th>${id}</th>
            <th>${title}</th>
            <th>${salaryNumber}</th>
        </tr>
    
    `)

    // calculate monthly cost
    monthlyCost += salaryNumber/12
    console.log('monthly cost:', monthlyCost);

    // append monthly cost to DOM
    $('.calc-content').append(`
        <div class="monthly-cost">
            <h3>Total Monthly: ${monthlyCost}</h2>
        </div>
    `)
    
}



