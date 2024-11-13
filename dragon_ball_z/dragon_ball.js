fetch('https://dragonball-api.com/api/characters')
.then((response) => response.json())
.then((country) => {
    console.log(country);
    let out = '';
    for (let country of country) {
        out += `
        <section>
            <h2>${country.name}</h2>
            <p>Ki: ${country.flag}</p>
        </section>
        `;
    }
    document.getElementById('output').innerHTML = out;
});