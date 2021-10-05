let text = 'Hello pdp world pdp ECMA';

//let textLength=text.length;

/*let textIndex=text.lastIndexOf('pdp');*/

let replaceText = text.replace(/PDP/i, 'Inflex');


console.log(replaceText);

function getDate() {
    let date = document.getElementById('date').value;
    document.getElementById('year').innerHTML = date.substr(0, 4);
    document.getElementById('month').innerHTML = date.substr(5, 2);
    document.getElementById('day').innerHTML = date.substring(8, 10);
    document.getElementById('time').innerHTML = date.substring(11);

    let myText = document.getElementById('text').value;
    if (myText.trim().length > 0) {
        document.getElementById('myText').innerHTML = myText
    } else {
        alert("Formani to'ldiring")
    }

}

let numbers = [4, 6, 6, 4];

let users = [
    {
        firstName: 'ali',
        lastName: 'vali',
        age: 23,
        company: 'PDP',
        salary: '$2000'
    }
];
let edited = -1;

function drawList() {
    document.getElementById('getUserList').innerHTML = '';
    for (let i = 0; i < users.length; i++) {
        document.getElementById('getUserList').innerHTML +=
            '<tr>' +
            '<td>' + (i + 1) + '</td>' +
            '<td>' + users[i].firstName + '</td>' +
            '<td>' + users[i].lastName + '</td>' +
            '<td>' + users[i].age + '</td>' +
            '<td>' + users[i].company + '</td>' +
            '<td>' + users[i].salary + '</td>' +
            '<td><button type="button" onclick="editUser(' + i + ')" class="btn btn-warning">E</button></td>' +
            '<td><button type="button" onclick="deleteUser(' + i + ')" class="btn btn-danger">D</button></td>' +
            '</tr>'
    }
}

drawList();

function addUser() {
    let firstName = document.forms['myForm']['firstName'].value;
    let lastName = document.forms['myForm']['lastName'].value;
    let age = document.forms['myForm']['age'].value;
    let company = document.forms['myForm']['company'].value;
    let salary = document.forms['myForm']['salary'].value;

    if (firstName.trim().length > 0 && lastName.trim().length > 0 && age.trim().length > 0
        && company.trim().length > 0 && salary.trim().length > 0) {

        let newUser = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            company: company,
            salary: salary,
        };
        if (edited >= 0) {
            users[edited] = newUser;
            edited = -1;
        } else {
            users.push(newUser);
        }


        drawList();
        document.forms['myForm'].reset();


    } else {
        alert("Formani toldiring")
    }
}

function deleteUser(deletingIndex) {
    users.splice(deletingIndex, 1);
    drawList();
}

function editUser(editIndex) {
    document.forms['myForm']['firstName'].value = users[editIndex].firstName;
    document.forms['myForm']['lastName'].value = users[editIndex].lastName;
    document.forms['myForm']['age'].value = users[editIndex].age;
    document.forms['myForm']['salary'].value = users[editIndex].salary;
    document.forms['myForm']['company'].value = users[editIndex].company;
    edited = editIndex;
}

