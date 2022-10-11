// This is just a list of things to log and see how they respond

p.parentNode;
p.parentNode.parentNode;

// Assign html object to html variable
const html = document.documentElement;

console.log(html.parentNode); // > #document
console.log(html.parentElement); // > null

ul.childNodes;

// this will break
ul.firstChild.style.background = 'yellow';
// this will work
ul.firstElementChild.style.background = 'yellow';

for (let element of ul.children) {
    element.style.background = 'yellow';
};

for (let element of p.childNodes) {
    console.log(element);
};

document.body.children[3].lastElementChild.style.background = 'fuchsia';

const tiger = ul.children[1];
tiger.nextElementSibling.style.background = 'coral';
tiger.previousElementSibling.style.background = 'aquamarine';


class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }
    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8;
    }
    static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8);
    }
}