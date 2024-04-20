let button = document.querySelector(".button");
button.addEventListener('click', addNewTask);
function addNewTask(event) {
    let nameBtn = String(prompt("Введи имя"));
    alert('Привет' + ' ' + nameBtn)
};
