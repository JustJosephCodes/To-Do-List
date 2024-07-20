const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

document.querySelector('.add-btn').addEventListener("click", () =>{
    const item = document.querySelector(".input-js");
    createItem(item);
})

document.querySelector(".input-js").addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        const item = document.querySelector(".input-js");
        createItem(item)
    }
})

function displayItems(){
    let items = ""
    for(let i = 0; i < itemsArray.length; i++){
        items += `
            <div class="taskname">
                <div class="task-wrapper">
                    <p>${itemsArray[i]}</p>
                    <button class="delete">
                    <img src="./images/trash-can.svg" alt="">
                    </button>
                </div>        
            </div>
        `;
    }
    document.querySelector(".card-wrapper").innerHTML = items
    activateDeleteListeners();
}

function activateDeleteListeners(){
    let deleteBtn = document.querySelectorAll(".delete");
    deleteBtn.forEach((dB, i) =>{
        dB.addEventListener("click", () =>{ deleteItem(i)})
    })
}

function createItem(item){
    itemsArray.push(item.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    location.reload();
}

function deleteItem(i){
    itemsArray.splice(i,1);
    localStorage.setItem('items', JSON.stringify(itemsArray))
    location.reload()
}

function updateItem(text, i){
    itemsArray[i] = text;
    localStorage.setItem('items', JSON.stringify(itemsArray));
    location.reload()
}

window.onload = function () {
    displayItems();
};