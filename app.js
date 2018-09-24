function add() {
    let val = document.querySelector('#val');
    let list = document.querySelector('#list');
    let li = document.createElement('li');
    let btn = document.createElement('button');
    let btnText = document.createTextNode('');
    let btn2 = document.createElement('button');
    let btnText2 = document.createTextNode('');
    btn.appendChild(btnText);
    btn2.appendChild(btnText2);

    btn.className = "trashbutton";
    btn.className += " glyphicon glyphicon-trash butt";
    btn.onclick = function() {
        let li = this.parentNode;
        let ol = li.parentNode;
        ol.removeChild(li);
    }

    btn2.className = "editbutton";
    btn2.className += " glyphicon glyphicon-edit butt";
    btn2.onclick = function() {
        let li = this.parentNode;
        let text = prompt();
        li.innerHTML = text;
        li.appendChild(btn);
        li.appendChild(btn2);
    }

    let text = document.createTextNode(val.value);
    li.appendChild(text)
    li.appendChild(btn)
    li.appendChild(btn2)
    list.appendChild(li)
    val.value = "";
}

function delall() {
    alert("Sure to Delete All?");
    document.querySelector("#list").innerHTML = "";
}