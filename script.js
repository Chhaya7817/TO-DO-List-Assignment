var todoInput = document.querySelector(".todo-input");
var btn = document.querySelector(".todo-button");
var todoList = document.querySelector(".todo-list");
let form = document.querySelector("form");
let storage = localStorage.getItem("todo");
let tasks = storage ? JSON.parse(storage) : [];

// Event Handlers
btn.onclick = create;
window.onload=function() {
  console.log(846);
  if ((localStorage.getItem("todo"))!= null) 
  {
    
    todo= JSON.parse (localStorage.getItem("todo")) ;

    for(let i=0 ; i<todo.length ; i++) {
      displayData(todo[i]);
    }
}
}


todoList.onclick = performAction;
var i = 0;
var data;
// Functions
function create(e) {
  e.preventDefault();
  data = todoInput.value;
  console.log(data);
  data = data.trim();

  if (data != "") {
    displayData(data);
  } else {
    alert("Box can not be blank");
  }
}

function displayData(data) {
  if(data!=""){
  var newDiv = document.createElement("div");
    newDiv.classList.add("todo");

    var newLi = document.createElement("li");
    newLi.classList.add("todo-item");
    newLi.innerText = data;
    newDiv.appendChild(newLi);
   

    let inpData = form[0].value;
     tasks.push(inpData);
     localStorage.setItem("todo", JSON.stringify(tasks));


    var cmpltBtn = document.createElement("button");
    cmpltBtn.classList.add("cmpltBtn");
    cmpltBtn.innerHTML = '<i class="fa fa-check " aria-hidden="true"></i>';
    newDiv.appendChild(cmpltBtn);

    var deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"  onclick></i>';
    newDiv.appendChild(deleteBtn);

    todoList.appendChild(newDiv);
    todoInput.value = "";
  }
}


function performAction(e) {
  var item = e.target;
  // console.log(item);

  if (item.classList[0] == "cmpltBtn") {
    // console.log("Cmplete Button pressed");
    var parent = item.parentElement;
    parent.classList.toggle("todo-done");
  }
  
  if (item.classList[0] == "deleteBtn") {
    var parent = item.parentElement;
    var value =parent.children[0].innerText;
    for(var i=0;i<tasks.length;i++)
    {
      if(value==tasks[i])
      {
        tasks.splice(i, 1);
        localStorage.setItem("todo", JSON.stringify(tasks));
      }
    }
    parent.remove();
  }

}