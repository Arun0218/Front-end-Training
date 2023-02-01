function time() {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentDate = new Date();

    document.getElementById('date').innerHTML = weekday[currentDate.getDay()] + ', ' + month[currentDate.getMonth()] + ' ' + currentDate.getDate();

    var text = 'AM';
    var hours = currentDate.getHours();
    if (hours < 10) hours = '0' + hours;
    var minutes = currentDate.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    var seconds = currentDate.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;
    if (hours > 12) {
        hours = hours - 12;
        text = "PM";
    }
    document.getElementById('time').innerHTML = hours + ' : ' + minutes + ' : ' + seconds + ' ' + text;
    setTimeout("time()", 1000);
}

function addtodolist() {
    const list = document.createElement("li");
    list.innerText = document.getElementById("input").value;
    let task = list.innerText;
    const checkBox = document.createElement("input");
    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('id', 'checkBox');
    checkBox.setAttribute('value', task)
    checkBox.setAttribute('onchange', 'complete(value,checked,this)');
    list.appendChild(checkBox);
    const deleteIcon = document.createElement('i');
    deleteIcon.setAttribute('class', 'fa fa-trash delIcon');
    deleteIcon.setAttribute('onClick', 'deleteList(this)');
    list.appendChild(deleteIcon);
    document.getElementById("todoList").appendChild(list);
    document.getElementById("input").value = '';
}

function deleteList(element) {
    if (confirm("Want to delete task permently ???")) {
        element.parentElement.remove();
    }
}

function complete(value, checked, element) {
    if (checked) {
        element.parentElement.remove();
        const list = document.createElement('li');
        list.innerText = value;
        let completed = list.innerText;
        const checkBox = document.createElement("input");
        checkBox.setAttribute('type', 'checkbox');
        checkBox.setAttribute('id', 'checkBox');
        checkBox.setAttribute('value', completed)
        checkBox.checked = true;
        checkBox.setAttribute('onchange', 'toDO(value,checked,this)');
        list.appendChild(checkBox);
        const deleteIcon = document.createElement('i');
        deleteIcon.setAttribute('class', 'fa fa-trash delIcon');
        deleteIcon.setAttribute('onClick', 'deleteList(this)');
        list.appendChild(deleteIcon);
        document.getElementById("completedList").appendChild(list);
        document.getElementById('todocount').innerHTML() = childElementcount;
    }

}
function toDO(value, checked, element) {
    if (!checked) {
        element.parentElement.remove();
        const list = document.createElement("li");
        list.innerText = value;
        let task = list.innerText;
        const checkBox = document.createElement("input");
        checkBox.setAttribute('type', 'checkbox');
        checkBox.setAttribute('id', 'checkBox');
        checkBox.setAttribute('value', task)
        // checkBox.checked = true;
        checkBox.setAttribute('onchange', 'complete(value,checked,this)');
        list.appendChild(checkBox);
        const deleteIcon = document.createElement('i');
        deleteIcon.setAttribute('class', 'fa fa-trash delIcon');
        deleteIcon.setAttribute('onClick', 'deleteList(this)');
        list.appendChild(deleteIcon);
        document.getElementById("todoList").appendChild(list);
    }
}

function textdisplay() {
    document.getElementById('searchText').setAttribute('placeholder', 'Seach');
    document.getElementById('cancelSearch').innerHTML = 'x';
}
function textEmpty() {
    document.getElementById('searchText').setAttribute('placeholder', '');
    document.getElementById('cancelSearch').innerHTML = '';
}
function cancel() {
    document.getElementById('searchText').value = '';
    document.getElementById('searchText').setAttribute('placeholder', '');
    document.getElementById('cancelSearch').innerHTML = '';
}