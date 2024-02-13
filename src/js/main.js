let buttonSave = document.querySelector('#buttonSave');
let buttonLoad = document.querySelector('#buttonLoad');
let message = document.querySelector('#message');

buttonSave.addEventListener('click', function(_e) {
    localStorage.setItem('message', message.value);
});

buttonLoad.addEventListener('click', function(_e) {
    message.value = localStorage.getItem('message');
});
