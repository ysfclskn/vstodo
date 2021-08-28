//UI vars

const form= document.querySelector('form');
const input= document.querySelector('#txtTask');
const btnDelete = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
const deleteButton = document.querySelector(".delete-item");

evenetListeners();

function evenetListeners(){

    form.addEventListener('submit',addNewItem);
    deleteButton.addEventListener('click',deleteItem);
    

}

function addNewItem(e){
    if(input.value === ''){
        alert("Please add new item!");
    }
    //Create li
    const li = document.createElement('li');
    li.className="list-group-item list-group-item-secondary";
    //add input value to li
    li.appendChild(document.createTextNode((input.value)));
    
    //Create a
    const a = document.createElement('a');
    a.classList="delete-item float-end";
    a.setAttribute('href','#');
    a.innerHTML="X";

    //add a to li
    li.appendChild(a);
   
    //add li to ul
    taskList.appendChild(li);


    input.value='';
    e.preventDefault();
    
}

/*
function deleteItem(e){
    
    console.log("click");
   

}*/