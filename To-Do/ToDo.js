function time() {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentDate = new Date();

    document.getElementById('date').innerHTML = weekday[currentDate.getDay()] + ', ' + month[currentDate.getMonth()] + ' ' + currentDate.getDate();

    var text = 'AM';
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    var seconds = currentDate.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;
    if (hours > 12) {
        hours = hours - 12;
        text = 'PM';
    }
    if (hours < 10) hours = '0' + hours;
    document.getElementById('time').innerHTML = hours + ' : ' + minutes + ' : ' + seconds + ' ' + text;
    setTimeout("time()", 1000);
}

function addtodolist(value) {
    const list = document.createElement("li");
    let todotask = value;
    if (todotask != '') {
        const text = document.createElement('span');
        text.innerText = value;
        let task = text.innerText;
        task.className = 'text';
        list.appendChild(text);
        const checkBox = document.createElement("input");
        checkBox.setAttribute('type', 'checkbox');
        checkBox.setAttribute('id', 'checkBox');
        checkBox.setAttribute('value', task);
        checkBox.setAttribute('onchange', 'complete(value,checked,this)');
        list.appendChild(checkBox);
        const editIcon = document.createElement('i');
        editIcon.className = 'fa fa-edit editIcon'
        editIcon.setAttribute('onclick', 'edit(this)');
        list.appendChild(editIcon);
        const deleteIcon = document.createElement('i');
        deleteIcon.setAttribute('class', 'fa fa-trash delIcon');
        deleteIcon.setAttribute('onClick', 'customcreation(this)');
        list.appendChild(deleteIcon);
        const saveIcon = document.createElement('i');
        saveIcon.className = "fa fa-save saveIcon";
        list.appendChild(saveIcon);
        saveIcon.setAttribute("onClick", "save(this)");
        saveIcon.style.display = 'none';
        document.getElementById("todoList").appendChild(list);
        document.getElementById("input").value = '';
    } else {
        alert('please enter the text to add a to do task list');
    }
}
function edit(element) {
    console.log(element.parentElement.childNodes);
    element.parentElement.childNodes[0].contentEditable = true;
    element.parentElement.childNodes[0].focus();
    const editIcon = element.parentElement.childNodes[2];
    editIcon.style.display = 'none';
    const deleteIcon = element.parentElement.childNodes[3];
    deleteIcon.style.display = 'none';
    const saveIcon = element.parentElement.childNodes[4];
    saveIcon.style.display = 'block';
}
function save(element) {
    if (element.parentElement.childNodes[0].innerText != "") {
        element.parentElement.childNodes[0].contentEditable = false;
        const editIcon = element.parentElement.childNodes[2];
        editIcon.style.display = 'block';
        const deleteIcon = element.parentElement.childNodes[3];
        deleteIcon.style.display = 'block';
        const saveIcon = element.parentElement.childNodes[4];
        saveIcon.style.display = 'none';
    } else { alert("Don't Leave the do to list empty") }
}
function complete(value, checked, element) {
    if (checked) {
        element.parentElement.remove();
        const list = document.createElement('li');
        list.innerText = '';
        const strike = document.createElement('del');
        strike.innerHTML = value;
        list.appendChild(strike);
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
        deleteIcon.setAttribute('onClick', 'customcreation(this)');
        list.appendChild(deleteIcon);
        document.getElementById("completedList").appendChild(list);
        let count = document.getElementById('completedList').childElementCount - 1;
        document.getElementById('completedcount').innerText = "(" + count + ")";
        if (count >= 1) document.getElementById('completedList').style.display = "block";
    }
}
function toDO(value, checked, element) {
    if (!checked) {
        element.parentElement.remove();
        addtodolist(value);
        let count = document.getElementById('completedList').childElementCount - 1;
        document.getElementById('completedcount').innerText = "(" + count + ")";
        if (count == '') {
            document.getElementById('completedcount').innerText = '';
            document.getElementById('completedList').style.display = "none";
        }
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
function customcreation(element) {
    document.getElementById("menu-bar").style.opacity = "0.5";
    document.getElementById("todoList").style.opacity = "0.5";
    document.getElementById("completedList").style.opacity = "0.5";
    const container = document.createElement("div");
    container.id = "warning";
    const root = document.getElementById("add");
    root.appendChild(container);
    const top = document.createElement("div");
    top.className = "content";
    const header = document.createElement("header");
    header.innerText = "Delete task";
    top.appendChild(header);
    container.appendChild(top);
    const main = document.createElement("div");
    const contant = document.createElement("p");
    contant.innerText = "Want to delete task?";
    main.appendChild(contant);
    container.appendChild(main);
    const yes = document.createElement("button");
    const no = document.createElement("button");
    yes.innerText = "yes";
    no.innerText = "no";
    yes.addEventListener('click', function () {
        document.getElementById("warning").remove();
        element.parentElement.remove();
        document.getElementById("menu-bar").style.opacity = "1";
        document.getElementById("todoList").style.opacity = "1";
        document.getElementById("completedList").style.opacity = "1";
    });
    no.addEventListener('click', function () {
        document.getElementById("warning").remove();
        document.getElementById("menu-bar").style.opacity = "1";
        document.getElementById("todoList").style.opacity = "1";
        document.getElementById("completedList").style.opacity = "1";
    });
    const footer = document.createElement("footer");
    footer.appendChild(yes);
    footer.appendChild(no);
    container.appendChild(footer);
}