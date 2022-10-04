'use strict';

function writeOutput(newOutput) {
    document.getElementById("output").innerText = newOutput;
}

function getUsers() {
    axios.get("https://reqres.in/api/users")
            .then(res => writeOutput(JSON.stringify(res.data.data, null, 2)))
            .catch(err => console.error(err));
}
console.log("YO!");

function createUser() {
    const name = document.getElementById("userName").value;
    console.log("NAME:", name);
    axios.post("https://reqres.in/api/users", {
        name: "Jordan",
        "job": "trainer",
    }).then(res => writeOutput(JSON.stringify(res.data, null, 2)))
        .catch(err => console.error(err));
}

function registerUser() {
    axios.post("https://reqres.in/api/register", {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
    }).then(res => writeOutput(JSON.stringify(res.data, null, 2)))
        .catch(err => console.error(err));
}

function loginUser() {
    axios.post("https://reqres.in/api/login", {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
    }).then(res => writeOutput(JSON.stringify(res.data, null, 2)))
        .catch(err => console.error(err));
}