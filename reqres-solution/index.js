'use strict';

function writeOutput(newOutput) {
    document.getElementById("output").innerText = newOutput;
}

// JSON.stringify(data, null, 2) -> Converts an object to a JSON string with (2) spaces which
// makes formatting a lot nicer
function getUsers() {
    axios.get("https://reqres.in/api/users")
            .then(res => writeOutput(JSON.stringify(res.data.data, null, 2)))
            .catch(err => console.error(err));
}

function createUser(e) {
    e.preventDefault(); // stops the page from reloading
    const name = document.getElementById("userName").value; // get name from input
    const job = document.getElementById("userJob").value; // get job from input
    axios.post("https://reqres.in/api/users", {
        name,
        job
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