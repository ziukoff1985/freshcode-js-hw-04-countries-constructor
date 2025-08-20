'use strict';

function Country(title, capital, population, area) {
    this.title = title;
    this.capital = capital;
    this.population = population;
    this.area = area;
    this.showCountry = function () {
        return `Country: ${this.title}, Capital: ${
            this.capital
        }, Population: ${this.population.toLocaleString()}, Area: ${this.area.toLocaleString()} km²`;
    };
}

const ukraine = new Country('Ukraine', 'Kyiv', 37_900_000, 603_628);
const canada = new Country('Canada', 'Ottawa', 41_500_000, 9_985_000);

function printCountryProps(country) {
    for (let key in country) {
        if (typeof country[key] !== 'function') {
            console.log(`${key}: ${country[key].toLocaleString()}`);
        }
    }
}

console.log(ukraine.showCountry());
console.log('==================================');
console.log(canada.showCountry());
console.log('==================================');
printCountryProps(ukraine);
console.log('==================================');
printCountryProps(canada);
