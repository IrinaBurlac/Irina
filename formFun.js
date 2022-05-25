
const nameInput = $('#firstName');
const lastNameInput = $('#lastName');
const emailInput = $('#email');
const EdtypeInput = $('#dur');
const JobInput = $('#dl');
const CityInput = $('#dor');
const CompanyInput = $('#dc');




function errorInput(input, text, specialCondition = undefined) {
    let value = input.val();
    if (specialCondition !== undefined) {
        value = specialCondition(value);
    }

    if (!value) {
        const prepend = input.parent().find('.input-group-prepend');
        prepend.addClass('is-invalid');
        prepend.parent('.input-group').append(`<div class="invalid-feedback">${text}</div>`);
        input.addClass('is-invalid');
    }

    return !!value;
}

function clearError(input) {
    const prepend = input.parent().find('.input-group-prepend');
    prepend.removeClass('is-invalid');
    input.removeClass('is-invalid');
    prepend.parent().find('.invalid-feedback').remove();
}

function validateDelivery() {
    const count = $('.delivery-item').length;
    const range = [...Array(count)].map((_, index) => index);
    let valid = true;
    range.forEach(number => {

        const nameInput = $('#firstName');
        const lastNameInput = $('#lastName');
        const emailInput = $('#email');
        const EdtypeInput = $('#dur');
        const JobInput = $('#dl');
        const CityInput = $('#dor');
        const CompanyInput = $('#dc');


        clearError(nameInput);
        clearError(lastNameInput);
        clearError(emailInput);
        clearError(EdtypeInput);
        clearError(JobInput);
        clearError(CityInput);
        clearError(CompanyInput);

        const required = [nameInput, lastNameInput, emailInput, EdtypeInput, JobInput, CityInput, CompanyInput].some(item => item.val());

        if (required) {
            valid = errorInput(CityInput, 'City is required') && valid;
            valid = errorInput(lastNameInput, 'Last Name is required') && valid;
            valid = errorInput(nameInput, 'Name is required') && valid;
            valid = errorInput(EdtypeInput, 'Ed type is required') && valid;
            valid = errorInput(CompanyInput, 'Company is required') && valid;
            valid = errorInput(JobInput, 'Job is required') && valid;
            
        }
    });

    return valid;
}

// function removeEmptyDelivery() {
//     const count = $('.delivery-item').length;
//     const range = [...Array(count)].map((_, index) => index);
//     range.forEach(number => {
//         const cityInput = $(`#delivery-city-select${number}`);
//         const iconInput = $(`#delivery-icon-select${number}`);
//         const nameInput = $(`#delivery-name-input${number}`);
//         const required = [cityInput, iconInput, nameInput].some(item => item.val());

//         if (!required) {
//             cityInput.closest('.delivery-item').remove();
//         }
//     });
// }

$('#button-save').on('click', function () {
    let valid = true;
    function validatePrice(price) {
        let asNum = parseFloat(price);
        return !isNaN(asNum) && asNum > 0;
    }

    clearError(nameInput);
    clearError(lastNameInput);
    clearError(emailInput);
    clearError(EdtypeInput);
    clearError(JobInput);
    clearError(CityInput);
    clearError(CompanyInput);

    valid = errorInput(nameInput, 'Name is required') && valid;
    valid = errorInput(emailInput, 'Email is required', validatePrice) && valid;
    valid = errorInput(lastNameInput, 'Last Name is required') && valid;
    valid = errorInput(EdtypeInput, 'Ed type is required') && valid;
    valid = errorInput(CityInput, 'City is required and should be greater than 0',) && valid;
    valid = errorInput(CompanyInput, 'Company is required') && valid;
    valid = errorInput(JobInput, 'Job is required') && valid;

    valid = validateDelivery() && valid;

    if (valid) {
        removeEmptyDelivery();
        $('myForm').submit();
    }
});
