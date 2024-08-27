const inputBox = document.querySelector('#input-box');
const taskList = document.querySelector('.task-list');

function AddTask() {
    if(inputBox.value === ''){
        alert("Hay Nhap 1 Cong Viec ");
    }else { 
        let li = document.createElement('li');
        li.innerHTML = inputBox.value; 
        taskList.appendChild(li);
    }
}