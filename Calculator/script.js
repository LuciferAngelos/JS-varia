let nums = document.querySelectorAll('.button');
let textField = document.querySelector('.textview');

for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener('click', () => {
        if (nums[i].value == 'C') {
            clear(textField);
        } else if (nums[i].value == '=') {
            calculate(textField)
        } else if (nums[i].value == '<') {
            backspace(textField)
        } else {
            textField.value += nums[i].value;
        }

    })
}

function calculate(exp) {
    if (replace(exp)) {
        replace(exp);

    } else {
        exp.value += '=' + eval(exp.value);
    }

}

function clear(exp) {
    exp.value = '';
}

function backspace(exp) {
    exp.value = exp.value.substring(0, exp.value.length - 1)
}

function replace(exp) {
    if (exp.value.indexOf('x') + 1) {
        exp.value = exp.value.replace('x', '*');
        exp.value += '=' + eval(exp.value);
        exp.value = exp.value.replace('*', 'x')

    }
}