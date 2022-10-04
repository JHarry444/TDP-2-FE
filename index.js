'use strict';

// document.getElementById("reqForm").addEventListener("submit", (e) => {
//     axios.post("https://reqres.in/api/users", {
//         name: e.target.reqName.value,
//         job: e.target.reqJob.value
//     }).then(res => console.log(res));
// });


// const output = document.getElementById("output");

// const newP = document.createElement("p");

// newP.innerText = "HELLO! I'M A P TAG!";

// output.appendChild(newP);


axios.get("http://localhost:8080/duck/readAll")
    .then(res => console.log(res))
    .catch(err => console.error(err));




document.getElementById("duckForm").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("EVENT:", event);
    const form = event.target;
    console.log("Form:", form);
    const reqBody = {
        name: form.duckName.value,
        habitat: form.duckHabitat.value
    }

    axios.post("http://localhost:8080/duck/create", reqBody)
        .then(res => console.log(res))
        .catch(err => console.error(err));
});

