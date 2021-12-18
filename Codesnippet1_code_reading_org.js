
// four ways to match four slashes
const input = '////';

const first = /[/][/][/][/]/;
const second = /\/\/\/\//;
const third = /[/]{4}/;
const fourth = /\/{4}/;

const result = [first, second, third, fourth].map(regex => regex.test(input));
console.log(result);