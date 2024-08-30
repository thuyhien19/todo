const inputBox = document.querySelector('#input-box');
const taskList = document.querySelector('.task-list');

function AddTask() {
    if(inputBox.value === ''){
        alert("Hay Nhap 1 Cong Viec ");
    }
    else { 
        let li = document.createElement('li');
        li.innerHTML = inputBox.value; 
        taskList.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = 'X';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData()
}

taskList.addEventListener('click', function(e) { 
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
},false
);

function saveData() { 
    localStorage.setItem("data", taskList.innerHTML);
};
function sTask() {
    taskList.innerHTML = localStorage.getItem("data") || '';
}
sTask();