let output = document.querySelector('.birthdays');
let out = '';

fetch('./birthday.json')
.then((response) => response.json())
.then((birthdays) => {
    let out = '';
    for (let birthday of birthdays) {
        out += `
        <section>
            <h2>${birthday.name}</h2>
            <p>Age: ${birthday.age}</p>
            <img src="${birthday.image}">
        </section>
        `;
    }
    document.getElementById('output').innerHTML = out;
});


function clearAll() {
document.getElementById('output').innerHTML = '';
}