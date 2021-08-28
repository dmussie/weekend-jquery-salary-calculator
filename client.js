$(document).ready(readyNow);

function readyNow() {
    console.log('DOM ready');
    //enable submit-button
    $('#submit-button').on('click', addNewEmployee) 
};

function addNewEmployee() {
    console.log('in addNewEmployee');
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let id = $('#id').val();
    let title = $('#title').val();
    let annualSalary = $('#annual-salary').val();
    let salaryNumber = parseInt(annualSalary);
    console.log(firstName, lastName, id, title, salaryNumber);

    $('#calc-table-body').append(`
        <tr>
            <th>${firstName}</th>
            <th>${lastName}</th>
            <th>${id}</th>
            <th>${title}</th>
            <th>${salaryNumber}</th>
        </tr>
    
    `)
}