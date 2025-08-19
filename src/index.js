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

const ukraine = new Country('Ukraine', 'Kyiv', 37900000, 603628);
const canada = new Country('Canada', 'Ottawa', 41500000, 9985000);

function printObjProp(country) {
    for (const key in country) {
        if (typeof country[key] !== 'function') {
            console.log(`${key}: ${country[key]}`);
        }
    }
}

console.log(ukraine.showCountry());
console.log('==================================');
console.log(canada.showCountry());

console.log('==================================');

printObjProp(ukraine);
console.log('==================================');
printObjProp(canada);
