const inputText = document.getElementById('inputText');
const encodeButton = document.getElementById('encodeButton');
const decodeButton = document.getElementById('decodeButton');
const outputText = document.getElementById('outputText');
const message = document.querySelector('.message');

encodeButton.addEventListener('click', () => {
    const input = inputText.value;
    const encodedText = encode(input);
    outputText.value = encodedText;
    message.style.display = 'none';
});

decodeButton.addEventListener('click', () => {
    const input = inputText.value;
    const decodedText = decode(input);
    outputText.value = decodedText;
    message.style.display = 'none';
});

function encode(text) {
        return text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function decode(text) {
       return text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}
