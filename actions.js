


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

$('#myForm').on('submit', function (e, a, i) {
    e.preventDefault();
});


$('#button-save').on('click', function () {
    $('#myForm').find('input').each(function (e) {
        formValues[$(this).attr('name')] = $(this).val();

        console.log(formValues);
    });



    window.location.href = 'second.php';

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






function initCities() {
    const citiesSelectBox = $('#dor');
    citiesName.forEach(function (city) {
        citiesSelectBox.append(buildOption(city, city));
    });



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
}

function buildProfessions(value) {
    return `<option value=""${!value ? ' selected' : ''}></option>
            <option value="air traffic controller"${value === 'air traffic controller' ? ' selected' : ''}>air traffic controller</option>
            <option value="banker"${value === 'banker' ? ' selected' : ''}>banker</option>
            <option value="builder"${value === 'builder' ? ' selected' : ''}>builder</option>
            <option value="judge"${value === 'judge' ? ' selected' : ''}>judge</option>
            <option value="salesman"${value === 'salesman' ? ' selected' : ''}>salesman</option>
            <option value="nutritionist"${value === 'nutritionist' ? ' selected' : ''}>nutritionist</option>`;
}

function buildCities(value) {
    return `<option value=""${!value ? ' selected' : ''}></option>
            <option value="chisinau"${value === 'chisinau' ? ' selected' : ''}>Chisinau</option>
            <option value="balti"${value === 'balti' ? ' selected' : ''}>Balti</option>
            <option value="orhei"${value === 'orhei' ? ' selected' : ''}>Orhei</option>
            <option value="soroca"${value === 'soroca' ? ' selected' : ''}>Soroca</option>
            <option value="nisporeni"${value === 'nisporeni' ? ' selected' : ''}>Nisporeni</option>
            <option value="ungheni"${value === 'ungheni' ? ' selected' : ''}>Ungheni</option>`;
}

function buildEd(value) {
    return `<option value=""${!value ? ' selected' : ''}></option>
            <option value="Primary education"${value === 'Primary education' ? ' selected' : ''}>Primary education</option>
            <option value="Upper secondary education"${value === 'Upper secondary education' ? ' selected' : ''}>Upper secondary education</option>
            <option value="Short-cycle tertiary education"${value === 'Short-cycle tertiary education' ? ' selected' : ''}>Short-cycle tertiary education</option>
            <option value="Primary education"${value === 'Primary education' ? ' selected' : ''}>Primary education</option>
            <option value="Short-cycle tertiary education"${value === 'Short-cycle tertiary education' ? ' selected' : ''}>Short-cycle tertiary education</option>
            <option value="Bachelor's or equivalent"${value === 'Bachelors or equivalent' ? ' selected' : ''}>Bachelors or equivalent</option>`;
}

function buildJob(value) {
    return `<option value=""${!value ? ' selected' : ''}></option>
            <option value="postman"${value === 'postman' ? ' selected' : ''}>postman</option>
            <option value="veterinar"${value === 'veterinar' ? ' selected' : ''}>veterinar</option>
            <option value="actor"${value === 'actor' ? ' selected' : ''}>actor</option>
            <option value="programmer"${value === 'programmer' ? ' selected' : ''}>programmer</option>
            <option value="pilot"${value === 'pilot' ? ' selected' : ''}>pilot</option>
            <option value="sofer"${value === 'sofer' ? ' selected' : ''}>sofer</option>`;
}



