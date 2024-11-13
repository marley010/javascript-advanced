fetch('https://dragonball-api.com/api/characters')
.then((response) => response.json())
.then((data) => {
    console.log(data);
    let out = '';
    for (let character of data.items) {
        out += `
        <section>
            <h2>${character.name}</h2>
            <p>Ki: ${character.ki}</p>
            <p>Max Ki: ${character.maxKi}</p>
            <p>Race: ${character.race}</p>
              <img src= ${character.image} alt="">
        </section>
        `;
    }
    document.getElementById('output').innerHTML = out;
});