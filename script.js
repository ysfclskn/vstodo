//UI vars

const form= document.querySelector('form');
const input= document.querySelector('#txtTask');
const btnDelete = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
const deleteButton = document.querySelector(".delete-item");
const taskListName = document.querySelector("#taskListName");
const changeName = document.querySelector("#changeName");
const date = document.querySelector("#date");
let items;
evenetListeners();

//load items
loadItems();

//setDay
setDate();

//loadListName
loadListName();

function evenetListeners(){

    form.addEventListener('submit',addNewItem);
    taskList.addEventListener('click',deleteItem);
    btnDelete.addEventListener('click',deleteAll);
    changeName.addEventListener('click',getNameFromUser);
    

}
//load items
function loadItems(){
    items = getItemsFromLS();

    items.forEach(function(item){
        createItem(item);
    });

}

//Get items from LS
function getItemsFromLS(){
    if(localStorage.getItem('items')===null){
        items = [];
    }
    else {
        items = JSON.parse(localStorage.getItem('items'));
    }

    return items;
} 

//Set items to LS

function setItemToLS(text){
    items = getItemsFromLS();

    items.push(text);
    localStorage.setItem('items',JSON.stringify(items));
}

// delete an item from LS

function deleteItemFromLS(text){
    items = getItemsFromLS();

    items.forEach(function(item,index){
        if(item=== text){
        items.splice(index,1);
    }

    });

    localStorage.setItem('items',JSON.stringify(items));
}


//create item
function createItem(text){
      //Create li
      const li = document.createElement('li');
      li.className="list-group-item list-group-item-secondary";
      //add input value to li
      li.appendChild(document.createTextNode((text)));
      
      //Create a
      const a = document.createElement('a');
      a.classList="delete-item float-end";
      a.setAttribute('href','#');
      a.innerHTML='<i class="fas fa-times"></i>';
  
      //add a to li
      li.appendChild(a);
     
      //add li to ul
      taskList.appendChild(li);
}

//add new item
function addNewItem(e){
    if(input.value === ''){
        alert("Please add new item!");
    }
  
    //createItem
    createItem(input.value);

    //save to LS
    setItemToLS(input.value);

    input.value='';
    e.preventDefault();
    
}


function deleteItem(e){
    if(confirm('Are you sure delete this item?')){
  if(e.target.className==="fas fa-times"){
      e.target.parentElement.parentElement.remove();
      e.preventDefault();
  }
}
   
  //delete item from LS
  deleteItemFromLS(e.target.parentElement.parentElement.textContent);

}



function deleteAll(e){
    if(confirm('Are you sure delete all items?')){
     
   
       while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild);
       
       }
    

   };
  
   //deleteAll LS

   localStorage.clear();

}



//Get Date
function setDate(){
   const d = new Date();
   date.innerHTML =d.toLocaleString("tr-TR", {dateStyle:"short"});
}

//GetNameFromeUser
function getNameFromUser(){
    let name = prompt('Plase type a name...');
    taskListName.innerHTML = name;
    localStorage.setItem('listName',name);

    if(name===""){
        taskListName.innerHTML= "Very Simple To-Do List";
    }
}

//LoadName
function loadListName(){

    if(localStorage.getItem('listName')===null||localStorage.getItem('listName')===""){
        taskListName.innerHTML= "Very Simple To-Do List";
    }
    else{
    taskListName.innerHTML = localStorage.getItem('listName');
}
}
