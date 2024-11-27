document.addEventListener('DOMContentLoaded', function() {
    const colorPicker = document.getElementById('colorPicker');
    const changeColorButton = document.getElementById('changeColorButton');

    changeColorButton.addEventListener('click', function() {
        document.body.style.backgroundColor = colorPicker.value;
    });
});