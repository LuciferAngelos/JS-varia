let textInput = document.querySelector('#text-input');
const key = {
    'a': '1',
    'b': '2',
    ' ': 'y',
    'h': 't',
    'e': 'u',
    'l': 'i',
    'o': 'p'
};

document.querySelector('button').onclick = () => {
    let str = textInput.value;
    let str2 = '';

    // console.log(textInput.value[0])     //получаем первый введённый символ
    for (let i = 0; i < str.length; i++) {
        if (key[str[i]]) {
            str2 += key[str[i]];
        } else {
            str2 += str[i];
        }
    }

    document.querySelector('#out').textContent = str2;
}