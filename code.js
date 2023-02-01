var todoInput=document.querySelector('.todo-input');
var todoInput1=document.querySelector('.todo-input');
var todoButton=document.querySelector('.button1');
var todoButton1=document.querySelector('.button2');
var todoButton2=document.querySelector('.button3');
var todoButton3=document.querySelector('.button4');
var todoList=document.querySelector('.todo-list');
var todoList1=document.querySelector('.todo-list');

//event listener
todoButton.addEventListener('click',addTodo);
todoButton1.addEventListener('click',addTodo1);
 todoButton2.addEventListener('click',addTodo2);
 todoButton3.addEventListener('click',addTodo3);
todoList.addEventListener('click',deleteEmark);
todoList.addEventListener('click',deleteEmark1);
todoList.addEventListener('click',deleteEmark2);
todoList.addEventListener('click',deleteEmark3);
function addTodo(event){
    //prevent from submitting
    event.preventDefault();
    

    //Todo Div
    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");
    //create li
    const newTodo=document.createElement("li");
    newTodo.innerText=todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
   
    //CHECK Emark BUTTON
    const trashButton=document.createElement("button");
    trashButton.innerHTML='<i class="fa-sharp fa-solid fa-xmark"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv);
    //clear todo input
    todoInput.value="";
}

function addTodo1(event){
    //prevent from submitting
    event.preventDefault();
   

    //Todo Div
    const todoDiv1=document.createElement("div");
    todoDiv1.classList.add("todo1");
    //create li
    const newTodo1=document.createElement("li");
    newTodo1.innerText=todoInput1.value;
    newTodo1.classList.add("todo-item1");
    todoDiv1.appendChild(newTodo1);
   
    //CHECK Emark BUTTON
    
    const trashButton=document.createElement("button");
    trashButton.innerHTML='<i class="fa-sharp fa-solid fa-xmark"></i>';
    trashButton.classList.add("trash-btn1");
    todoDiv1.appendChild(trashButton);
    //append to list
    todoList1.appendChild(todoDiv1);
    //clear todo input
    todoInput1.value="";
}

//Green
function addTodo2(event){
    //prevent from submitting
    event.preventDefault();
    //Todo Div
    const todoDiv2=document.createElement("div");
    todoDiv2.classList.add("todo2");
    //create li
    const newTodo2=document.createElement("li");
    newTodo2.innerText=todoInput1.value;
    newTodo2.classList.add("todo-item2");
    todoDiv2.appendChild(newTodo2);
   
    //CHECK Emark BUTTON
    
    const trashButton=document.createElement("button");
    trashButton.innerHTML='<i class="fa-sharp fa-solid fa-xmark"></i>';
    trashButton.classList.add("trash-btn2");
    todoDiv2.appendChild(trashButton);
    //append to list
    todoList1.appendChild(todoDiv2);
    //clear todo input
    todoInput1.value="";
}

//Grey
function addTodo3(event){
    //prevent from submitting
    event.preventDefault();
    //Todo Div
    const todoDiv3=document.createElement("div");
    todoDiv3.classList.add("todo3");
    //create li
    const newTodo3=document.createElement("li");
    newTodo3.innerText=todoInput1.value;
    newTodo3.classList.add("todo-item3");
    todoDiv3.appendChild(newTodo3);
   
    //CHECK Emark BUTTON
    
    const trashButton=document.createElement("button");
    trashButton.innerHTML='<i class="fa-sharp fa-solid fa-xmark"></i>';
    trashButton.classList.add("trash-btn3");
    todoDiv3.appendChild(trashButton);
    //append to list
    todoList1.appendChild(todoDiv3);
    //clear todo input
    todoInput1.value="";
}


function deleteEmark(e){
    const item=e.target;
//delete div
if(item.classList[0]==="trash-btn"){
    const todo=item.parentElement;
    todo.remove();
}
}
function deleteEmark1(e){
    const item=e.target;
//delete div
if(item.classList[0]==="trash-btn1"){
    const todo=item.parentElement;
    todo.remove();
}
}
function deleteEmark2(e){
    const item=e.target;
//delete div
if(item.classList[0]==="trash-btn2"){
    const todo=item.parentElement;
    todo.remove();
}
}
function deleteEmark3(e){
    const item=e.target;
//delete div
if(item.classList[0]==="trash-btn3"){
    const todo=item.parentElement;
    todo.remove();
}
}