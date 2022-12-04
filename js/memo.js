const memoForm = document.getElementById("memo-form");
const memoList = document.getElementById("memo");
const memoInput = memoForm.querySelector("#memo-form input");

const MEMOS_KEY = "memos";

let memos = [];
//기본적으로 localstorage는 array를 저장하지 않음!
//따라서 넣고, 그걸 string으로 바꿔서...넣어야 함

function saveMemo(){
    localStorage.setItem(MEMOS_KEY, JSON.stringify(memos));
}

//Delete Button

function deleteMemos(event){
    //클릭된게 어떤 버튼인가? 그걸 위해서는 event에 대한 정보도 같이 전달해야한다 
    //click이벤트가 발생한 버튼 정보를 보내야 한다... 
    //버튼의 parent를 찾아서 삭제해야 함
    const li = event.target.parentElement;

    li.remove();

    //toDos array != local Storage
    //따라서 삭제 버튼을 누르면 > item을 골라서 > local Storage에서도 지워야함 
    //text대신 id:text 형태의 Object로 바꿔야 함 
    //array에서 뭔갈 삭제하고 싶다면? filter 리액트랑 같다 연습하자...

    memos = memos.filter(memo => memo.id !== parseInt(li.id));
    saveMemo();

}

function paintMemo(newMemoObj){
    //newTodo is string
    //newTodoObj is id - text

    const li = document.createElement("li");
    li.id = newMemoObj.id;
    const span = document.createElement("span");
    li.appendChild(span);

    const button = document.createElement("button");
    button.innerText = "X";
    button.style.color = "black";
    button.style.fontWeight = "700";

    li.appendChild(button);
    button.addEventListener("click", deleteMemos);

    //li안에 span 넣기
    span.innerText = newMemoObj.text;
    memoList.appendChild(li);
}

function handleMemoSubmit(event) {
    event.preventDefault();
    const newMemo = memoInput.value;
    memoInput.value = "";
    
    const newMemoObj = {
        text:newMemo,
        id: Date.now(),
    };

    memos.push(newMemoObj);
    paintMemo(newMemoObj);
    saveMemo(newMemo);
}


memoForm.addEventListener("submit", handleMemoSubmit);
const savedMemos = localStorage.getItem(MEMOS_KEY);

if(savedMemos !== null){
    const parsedMemos = JSON.parse(savedMemos);
    memos = parsedMemos;
    parsedMemos.forEach(paintMemo);

    //item = element
    //arrow function을 쓰거나, function을 새로 선언해서 사용하는 것 둘 다 가능함
    //arrow function이 더 짧긴 함. 하지만 관성적으로 선언해서 쓰는 듯...? 
    
}

