const toDoList = [];
const addButton = document.querySelector(".add-btn");

renderToDoList();

addButton.addEventListener("click", addToDo)

document.addEventListener("keypress", function (event){
    if (event.key === `Enter`){
        addToDo()
    }
})

function renderToDoList() {
    let toDoListHTML = ``;
        for (let i = 0; i < toDoList.length; i++) {
        const toDo = toDoList[i];
        const html = `
            <div class="taskname">
                <div class="task-wrapper">
                    <p>${toDo}</p>
                    <div class="delete-wrapper">
                        <button class="delete" onclick="
                            toDoList.splice(${i}, 1);
                            renderToDoList();
                        ">
                        <img src="./images/trash-can.svg" alt="">
                        </button>
                    </div>
            </div>        
        </div>`;
    toDoListHTML = html;
    }
        document.querySelector(`.card-wrapper`).innerHTML = toDoListHTML;
}

function addToDo() {
    const inputElement = document.querySelector(`.input-js`);
    let name = inputElement.value;
    toDoList.push(name);
    inputElement.value = "";
    renderToDoList();
}
