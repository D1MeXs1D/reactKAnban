export default function addTaskFunc () {
    const buttons = document.querySelectorAll('.body_button__f4bZH');
    const addTaskWindow = document.querySelector('.body_addTask__y3WSR');


    buttons.forEach(elem => {
        if(elem.id === "0") {
            addTaskWindow.style.scale = 1;
            addTaskWindow.style.height = '150px';
            addTaskWindow.style.maxHeight = '500px';
            addTaskWindow.style.marginBottom = '40px';
        }
    })
}