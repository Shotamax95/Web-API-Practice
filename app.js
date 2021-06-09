const lists = document.getElementById("lists");
const btn = document.getElementById("addBtn");

//retrieve data
async function getUsers(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return users;
}

// DOM
function addList(user) {
    const list = document.createElement("li");
    list.innerText = user.name;
    lists.appendChild(list);
}

async function listUsers() {
    const users = await getUsers();
    users.forEach(addList);
}

// events
btn.addEventListener("click", listUsers);
window.addEventListener("load", listUsers);