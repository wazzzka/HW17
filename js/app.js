'use strict';

const textInput = document.getElementById('textInput');
const sideDiv = document.getElementById('sideDiv');

textInput.addEventListener('focus', function () {
    sideDiv.style.display = 'block';
});

textInput.addEventListener('blur', function () {
    sideDiv.style.display = 'none';
});