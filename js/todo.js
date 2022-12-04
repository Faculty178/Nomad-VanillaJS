const toDoForm = document.getElementById("toDo-form");
const toDoList = document.getElementById("pending");
const movedList = document.getElementById("finished");
const toDoInput = toDoForm.querySelector("#toDo-form input");

const toDoS_KEY = "toDos";
const dones_KEY = "dones";

let toDos = [];
let dones = [];

function savetoDo(){
    localStorage.setItem(toDoS_KEY, JSON.stringify(toDos));
}

function savedones(){
    localStorage.setItem(dones_KEY, JSON.stringify(dones));
}

function deleteMoved(event){
    const li = event.target.parentElement;
    li.remove();

    dones = dones.filter(done => done.id !== parseInt(li.id));
    savedones();
}

function paintMoved(newMovedObj){
    const li = document.createElement("li");
    li.id = newMovedObj.id;
    const span = document.createElement("span");
    li.appendChild(span);

    const button = document.createElement("button");
    button.innerText = "X";
    button.style.color = "black";
    button.style.fontWeight = "700";
    li.appendChild(button);
    button.addEventListener("click", deleteMoved);

    span.innerText = newMovedObj.text;
    movedList.appendChild(li);

    dones.push(newMovedObj);
    savedones();
}


function deletetoDos(event){
    const li = event.target.parentElement;
    const text = event.target.previousSibling;
    console.log(text);
    const moved = text.innerText;
    console.log(moved);
    li.remove();
    
    const moved_time = Date.now();

    const newMovedObj = {
        text:moved,
        id: moved_time,
    };

    paintMoved(newMovedObj);

    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    savetoDo();

}

function painttoDo(newtoDoObj){

    const li = document.createElement("li");
    li.id = newtoDoObj.id;
    const span = document.createElement("span");
    li.appendChild(span);

    const button = document.createElement("button");
    button.innerText = "X";
    button.style.color = "black";
    button.style.fontWeight = "700";
    li.appendChild(button);
    button.addEventListener("click", deletetoDos);

    span.innerText = newtoDoObj.text;
    toDoList.appendChild(li);
}

function handletoDoSubmit(event) {
    event.preventDefault();
    const newtoDo = toDoInput.value;
    toDoInput.value = "";
    
    const newtoDoObj = {
        text:newtoDo,
        id: Date.now(),
    };

    toDos.push(newtoDoObj);
    painttoDo(newtoDoObj);
    savetoDo(newtoDo);
}


toDoForm.addEventListener("submit", handletoDoSubmit);
const savedtoDos = localStorage.getItem(toDoS_KEY);
const donetoDos = localStorage.getItem(dones_KEY);

if(savedtoDos !== null){
    const parsedtoDos = JSON.parse(savedtoDos);
    toDos = parsedtoDos;
    parsedtoDos.forEach(painttoDo);

    //item = element
    //arrow function을 쓰거나, function을 새로 선언해서 사용하는 것 둘 다 가능함
    //arrow function이 더 짧긴 함. 하지만 관성적으로 선언해서 쓰는 듯...? 
}


