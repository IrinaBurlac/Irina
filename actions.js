



// unele functii se pare ca sunt deprisos, dar eu inca le mai modific sau ma joc cu ele, la fel modificarile le voi pune pe git 


var formValues = {};
var varianta = 4;
var citiesName = [
    'Chișinău',
    'Bălți',
    'Orhei',
    'Tiraspol',
    'Soroca',
    'Nisporeni',
    'Bender',
];



function addItem() {
    var a = document.getElementById("list");
    var candidate = document.getElementById("Rds");
    var li = document.createElement("li");
    li.setAttribute('id', candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    a.appendChild(li);
}
function removeItem() {
    var a = document.getElementById("list");
    var candidate = document.getElementById("Rds");
    var item = document.getElementById(candidate.value);
    a.removeChild(item);
}

function uniqueBy(array, by = null) {
    const nextArr = [];
    array.forEach(item => {
        let cond = false;
        if (typeof item !== 'object') {
            cond = !nextArr.includes(item);
        } else {
            if (!by) {
                by = Object.keys(item)[0] || 'id';
            }
            cond = item.hasOwnProperty(by) && nextArr.every(el => el[by] !== item[by]);
        }

        if (cond) {
            nextArr.push(item);
        }
    });

    return nextArr;
}

function buildOption(value, label) {
    return `<option value="${value}">${label}</option>`;
}

$('#form').on('submit', function (e, a, i) {
    e.preventDefault();
});


$('#submit').on('click', function () {
    $('#form').find('input').each(function (e) {
        formValues[$(this).attr('name')] = $(this).val();

        console.log(formValues);
    });



    window.location.href = 'second.html';

});

function addItem() {
    var a = document.getElementById("list");
    var candidate = document.getElementById("candidate");
    var li = document.createElement("li");
    li.setAttribute('id', candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    a.appendChild(li);
}

// Creating a function to remove item from list
function removeItem() {

    // Declaring a variable to get select element
    var a = document.getElementById("list");
    var candidate = document.getElementById("candidate");
    var item = document.getElementById(candidate.value);
    a.removeChild(item);
}

//validation functions

const button = document.getElementById('button-save');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const phonenumbInput = document.getElementById('phonenumb');
const socialInput = document.getElementById('social');
// const edtypeInput = document.getElementById('edtype');
// const emailInput = document.getElementById('email');



button.addEventListener('click', () => {
    console.log('1233S');
    let valid = validateField('firstName', 'First name is required');
    valid = validateField('lastName', 'Last name is required') && valid;
    valid = validateField('email', 'Email is required') &&
        validateEmail('Email must contain "@" and "."');
    valid = validateField('phonenumb', 'Phone Number is required') &&
        validatePhoneNumber('PhoneNumb is required');
    valid = validateField('social', 'Social link is required') &&
        validteSocial('validteSocial is required');
    // valid = validateField('edtype', 'Edtype is required') &&
    //     validateET('validateETtype is required');


    if (valid) {
        console.log(firstNameInput.value + "\n" + lastNameInput.value + "\n" + emailInput.value + "\n" + phonenumbInput.value + "\n" + socialInput.value);
    }
});


function validateField(fieldName, errorMessage) {
    const error = document.getElementById(`${fieldName}Error`);
    const field = document.getElementById(fieldName);
    const value = field.value;
    if (value === '' || value === null || value.trim() === '') {
        error.innerHTML = errorMessage;
        error.style.display = 'block';
        field.classList.add('error');
        return false;
    } else {
        error.innerHTML = '';
        error.style.display = 'none';
        field.classList.remove('error');
    }

    return true;
}

function validateEmail(errorMessage) {
    const error = document.getElementById('emailError');
    const field = document.getElementById('email');
    const value = field.value;
    if (value.includes('@') && value.includes('.')) {
        error.innerHTML = '';
        error.style.display = 'none';
        field.classList.remove('error');
        return true;
    } else {
        error.innerHTML = errorMessage;
        error.style.display = 'block';
        field.classList.add('error');
    }


    return true;

}


  function validatePhoneNumber(errorMessage)
{
    
    const error = document.getElementById('phonenumbError');
    const field = document.getElementById('phonenumb');
    const value = field.value;

    if (value.includes('+373') && value.length == 12 || (value.startsWith('0') && value.length === 10)) {
        error.innerHTML = '';
        error.style.display = 'none';
        field.classList.remove('error');
        return true;
    } else {
        error.innerHTML = errorMessage;
        error.style.display = 'block';
        field.classList.add('error');
    }


    return true;

 }


 function validteSocial(errorMessage)
 {
    const error = document.getElementById('socialError');
    const field = document.getElementById('social');
    const value = field.value;

    if (value.startsWith('https://')) {
        error.innerHTML = '';
        error.style.display = 'none';
        field.classList.remove('error');
        return true;
    } else {
        error.innerHTML = errorMessage;
        error.style.display = 'block';
        field.classList.add('error');
    }


    return true;

}


// function validteET(errorMessage)

// {
//     console.log('true');
//    const error = document.getElementById('edtype');
//    const field = document.getElementById('edtypeNameError');
//    const value = field.value;

//    if (value.startsWith('Studii')) {
//        error.innerHTML = '';
//        error.style.display = 'none';
//        field.classList.remove('error');
//        return true;
//    } else {
//        error.innerHTML = errorMessage;
//        error.style.display = 'block';
//        field.classList.add('error');
//    }


//    return true;
// }

const mainRow = $('#main-row');
var submitting = false;
var timer = null;

function capitalCase(str) {
    return str[0].toUpperCase() + str.substring(1);
}



function validateValue(value) {
    return value.length >= 3 && value.length <= 20;
}

function previousRowsAreValid() {
    let flag = true;
    $('input[myForm]').each(function () {
        if (!validateValue($(this).val())) {
            flag = false;
            $(this).addClass('errorMessage');
        } else {
            $(this).removeClass('errorMessage')
        }
    });

    return flag;
}

function buildRow() {
    return `
            <div class="input-box1">
                <div class="calendar">
                     <input type="text" id="edtype" name="edtype"">
                </div>
                <div class="container-fluid">
                     <select class="form-select select-element" name="title-icon"></select>
                </div>
            </div>`;
}

function addRow() {

    if (previousRowsAreValid()) {
        mainRow.append(buildRow());
        initIcons();
    }

 
}

function navigate() {
    timer = setTimeout(() => {
        window.location.href = 'second.html';
    }, 2500); 
}

function makeRequest() {
    const articles = [];

    // cautam dupa grupa, apoi selectam fiecare element din aceasta grupa
    $('.myForm').each(function () {
        console.log(($(this)));
        //find selector poate gasi si dupa clasa si dupa atribute (de ex 'input[name=title-name]')
        articles.push({
            label: $(this).find('input.input-element').val(),
            icon: $(this).find('.select-element').val(),
        });
    });

    if (submitting) {
        window.clearTimeout(timer);
        navigate();
        return;
    }

    console.log();
    $.ajax({
        url: 'http://localhost:3000/form-data',
        method: 'POST',
        datatype: 'json',
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(),
        success: function () {
            $('.button-save').append(`<h2 class="alert alert-success mt-4">Se trimite..</h2>`);
            submitting = true;
            navigate();
        },
    });
}

function finish() {
    if (previousRowsAreValid()) {
        makeRequest();
    }
}

$('#add-button').on('click', addRow);
$('#button-save').on('click', finish);

function loadEducationTypes() {
    console.log('load education types');
    $.ajax({
        url: 'http://localhost:3000/education-type/4',
        method: 'GET',
        datatype: 'json',
        headers: {
            'Content-Type': 'application/json',
        },
        success: function (response) {
            response = uniqueBy(response, 'education');
            response.forEach(educationType => {
                $("#dur").append(buildOption(educationType.education, educationType.education));
            });
            console.log(response);
        },
    });
}


function loadJobNames() {
    console.log('load job names');
    $.ajax({
        url: 'http://localhost:3000/job-name/4',
        method: 'GET',
        datatype: 'json',
        headers: {
            'Content-Type': 'application/json',
        },
        success: function (response) {
            response.forEach(job => {
                $("#dl").append(buildOption(job.name, job.name));
            });
            console.log(response);
        },
    });
}

function initCities() {
    const citiesSelectBox = $('#dor');
    citiesName.forEach(function (city) {
        citiesSelectBox.append(buildOption(city, city));
    });
}

function loadCompaniesForCity(box = $('#dc'), city) {
    console.log('load companies for city');
    $.ajax({
        url: ` http://localhost:3000/companies/4/city/Chișinău`,
        method: 'GET',
        datatype: 'json',
        headers: {
            'Content-Type': 'application/json',
        },
        success: function (response) {
            box.html(''); // curatam tot ce este acolo pana acum
            response.forEach(company => {
                box.append(buildOption(company.label, company.label)); // adaugam itemi noi
            });
            console.log(response);
        },
    });
}

function loadProfessions() {
    console.log('loading professions');
    $.ajax({
        url: 'http://localhost:3000/professions/4',
        method: 'GET',
        datatype: 'json',
        headers: {
            'Content-Type': 'application/json',
        },
        success: function (response) {
            response.forEach(profession => {
                $("#pr").append(buildOption(profession.label, profession.label));
            });
            console.log(response);
        },
    });
}



//SL

var survey_options = document.getElementById('survey_options');
var addmore_fields = document.getElementById('addmore_fields');
var remove_fields = document.getElementById('remove_fields');

addmore_fields.onclick = function () {
    var newField = document.createElement('input');
    newField.setAttribute('type', 'text');
    newField.setAttribute('name', 'survey_options[]');
    newField.setAttribute('class', 'survey_options');
    newField.setAttribute('siz', 50);
    newField.setAttribute('placeholder', 'https://-');
    survey_options.appendChild(newField);
}

remove_fields.onclick = function () {
    var input_tags = survey_options.getElementsByTagName('input');
    if (input_tags.length > 1) {
        survey_options.removeChild(input_tags[(input_tags.length) - 1]);
    }
}

//dinamicED

const add_more_fields = document.getElementById('add-button');
const remove_fields1 = document.getElementById('remove-button');
const list = document.getElementById('records-list')

const input = document.getElementById('edtype');
const select = document.getElementById('dur')
const educationStartInput = document.getElementById('edtype');
const graduationDateInput = document.getElementById('graduation');


add_more_fields.onclick = () => {
    const data = {
        name: input.value,
        duration: select.value,
        start: educationStartInput.value,
        end: graduationDateInput.value,
    }

    const listElement = document.createElement('li');
    listElement.classList.add('list-element');

    const inputRes = document.createElement('input');
    inputRes.classList.add('list-input');
    inputRes.disabled = true;
    inputRes.value = data.name;

    const selectRes = document.createElement('select');
    selectRes.classList.add('select-input');
    selectRes.disabled = true;
    selectRes.value = data.name;

    selectRes.innerHTML = `
    <option> ${data.duration} </option>
  `

    listElement.appendChild(inputRes);
    listElement.appendChild(selectRes);

    list.appendChild(listElement)

    input.value = null;
    select.value = null;
    graduationDateInput.value = null;
    educationStartInput.value = null;
}

remove_fields1.onclick = function () {
    const listLength = list.children.length
    const listItems = document.getElementsByClassName('list-element');

    if (listLength) {
        list.removeChild(listItems[listLength - 1]);
    }
}

//dinamicaJob

const add_more_fields1 = document.getElementById('add-buttonjn');
const remove_fields2 = document.getElementById('remove-buttonjn');
const listjn = document.getElementById('jobname-list')

const inputjn = document.getElementById('dl');
const selectjn = document.getElementById('dor')
const jnStartInput = document.getElementById('dl');
const jngraduationDateInput = document.getElementById('start-job');


add_more_fields1.onclick = () => {
    const data = {
        name: inputjn.value,
        duration: selectjn.value,
        start: jnStartInput.value,
        end: jngraduationDateInput.value,
    }

    const listjnElement = document.createElement('li');
    listjnElement.classList.add('list-element');

    const inputRes = document.createElement('input');
    inputRes.classList.add('list-input');
    inputRes.disabled = true;
    inputRes.value = data.name;

    // const dateRes1 = document.createElement('date');
    // dateRes1.classList.add('list-input');
    // dateRes1.disabled = true;
    // dateRes1.value = data.name;

    const selectRes = document.createElement('select');
    selectRes.classList.add('select-input');
    selectRes.disabled = true;
    selectRes.value = data.name;

    const selectRes1 = document.createElement('select');
    selectRes1.classList.add('select-input');
    selectRes1.disabled = true;
    selectRes1.value = data.name;

    selectRes.innerHTML = `
    <option> ${data.duration} </option>
  `

    listjnElement.appendChild(inputRes);
    // listjnElement.appendChild(inputRes1);
    listjnElement.appendChild(selectRes);
    listjnElement.appendChild(selectRes1);


    listjn.appendChild(listjnElement)

    inputjn.value = null;
    selectjn.value = null;
    jngraduationDateInput.value = null;
    jnStartInput.value = null;
}

remove_fields2.onclick = function () {
    const listLength = listjn.children.length
    const listItems = document.getElementsByClassName('list-element');

    if (listLength) {
        listjn.removeChild(listItems[listLength - 1]);
    }
}


$(document).ready(function () {
    initCities();
    loadEducationTypes();
    loadJobNames();
    loadProfessions();
    $('#dor').on('change', function() {
        const city = $(this).val();
        loadCompaniesForCity($('#dc'), city);
    });
});

function hideET() {

    var x = document.getElementById('container1');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }

  function hideJN() {

    var x = document.getElementById('container2');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }

  const container = $('#container');
  const container1 = $('#container1');
   var count = 0;

   function makeRequest(index) {
       // container.append(`<div>Sending request ${index}</div>`);

       $.ajax({
           url: 'http://localhost:3000/form-data',
           method: 'POST',
           datatype: 'json',
           headers: {
               'Content-Type': 'application/json',
           },
           data: JSON.stringify({
             nume: $('#firstName').val(),
               prenume: $('#lastName').val(),
               email: $('#email').val(),
               phonenumb: $('#phonenumb').val(),
               social: $('#social').val(),
               pr: $('#pr').val(),
               edtype: $('#edtype').val(),
               adress: $('#adress').val(),
               hobby: $('#hobby').val(),
               dur: $('#dur').val(),
               studies: $('#studies-start').val(),
               graduation: $('#graduation').val(),
               dl: $('#dl').val(),
               dor:$('#dor').val(),
               dc:$('#dc').val(),
               startJob:$('#start-job').val(),
               finishJob:$('#finish-job').val(),
           }),
           
           success: function(response) {
               console.log('ture');
               container.append(`<div>${JSON.stringify(response)}</div>`);
           },

       });
       
       for(var a = 0; a < 48; a++) {

var job     = dl[a];
var dl     = job.dl;
var name    = job.dl;
var location  = $.getJSON('http://localhost:3000/job-name/4');
}

for(var i = 0; i < 6; i++) {

    var city     = dc[i];
    var dc   = city.dc;
    var name   = city.dc;
    var location  = $.getJSON('http://localhost:3000/companies/4/city/Chișinău');
    }

   }

   for(var k = 0; k < 6; k++) {

           var obj     = dur[k];
           var dur     = obj.dur;
           var name    = obj.dur;
           var location  = $.getJSON('http://localhost:3000/education-type/4');
}






   $('#button-save').on('click', () => {
       makeRequest(++count);
   });

   $('#button-save').on('click', () => {
       $.ajax({
           url: 'http://localhost:3000/form-data',
           method: 'GET',
           dataType: 'json',
           success: function(response) {
               console.log('true');
               container.append(`<div>${JSON.stringify(response)}</div>`);
               
           },
       });
   });
