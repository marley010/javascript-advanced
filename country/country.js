fetch('https://restcountries.com/v3.1/all/')
.then((response) => response.json())
.then((countries) => {
    console.log(countries);
    let out = '';
    for (let country of countries) {
        out += `
        <section>
            <h2>${country.name.common}</h2>
            <img src="${country.flags.svg}" alt="Flag of ${country.name.common}" width="100">
        </section>
        `;
    }
    document.getElementById('output').innerHTML = out;
});
