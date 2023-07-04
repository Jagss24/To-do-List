const input = document.querySelector('input')
const task = document.querySelector('ul')

function add() {
    if (input.value == '') {
        alert('Please enter some taks')
    }
    else {
        const li = document.createElement('li')
        li.classList.add('list')
        li.textContent = input.value
        input.value = ""
        const cross = document.createElement('span')
        cross.innerHTML = "\u00d7"
        task.appendChild(li)
        li.appendChild(cross)
        saveTasks()
    }
}

task.addEventListener('click', function (e) {
    if (e.target.tagName == 'LI') {
        e.target.classList.toggle('checked')
        saveTasks()
    }
    else if (e.target.tagName == 'SPAN') {
        e.target.parentElement.remove();
        saveTasks()
    }
}, false)

function saveTasks() {
    localStorage.setItem('data', task.innerHTML)
}

function showTasks() {
    task.innerHTML = localStorage.getItem('data')
}
showTasks();