let data = JSON.parse(localStorage.getItem("crudData")) || [];
let users = JSON.parse(localStorage.getItem("users")) || [];
let loggedInUser = localStorage.getItem("loggedInUser");

function showRegister() {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("registerPage").style.display = "block";
}
function showLogin() {
    document.getElementById("registerPage").style.display = "none";
    document.getElementById("loginPage").style.display = "block";
}

function register() {
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;
    if (username && password) {
        users.push({ username, password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registration successful! Please login.");
        showLogin();
    }
}

function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        localStorage.setItem("loggedInUser", username);
        showCrudPage();
    } else {
        alert("Invalid credentials!");
    }
}

function showCrudPage() {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("crudPage").style.display = "block";
    renderTable();
}

function logout() {
    localStorage.removeItem("loggedInUser");
    location.reload();
}

function renderTable() {
    const table = document.getElementById("crudTable");
    table.innerHTML = "";
    data.forEach((item, index) => {
        table.innerHTML += `<tr>
                    <td>${item}</td>
                    <td>
                        <button class='btn btn-success' onclick='editData(${index})'>
                            <i class="fas fa-edit"></i> Edit
                        </button>
                        <button class='btn btn-danger' onclick='deleteData(${index})'>
                            <i class="fas fa-trash-alt"></i> Delete
                        </button>
                    </td>
                </tr>`;
    });
    localStorage.setItem("crudData", JSON.stringify(data));
}

function addData() {
    const name = document.getElementById("name").value.trim();
    if (!name) {
        alert("Please enter a name!");
        return;
    }

    else if (data.includes(name)) {
        alert("This name already exists! Please enter a different name.");
        return;
    }

    data.push(name);
    document.getElementById("name").value = "";
    renderTable();
}

function editData(index) {
    const newName = prompt("Edit Name:", data[index]);
    if (newName) {
        data[index] = newName;
        renderTable();
    }
}

function deleteData(index) {
    data.splice(index, 1);
    renderTable();
}

if (loggedInUser) {
    showCrudPage();
}