var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
var newName = 'Marian';

console.log (femaleNames);
console.log (maleNames);
console.log (allNames);

if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
}

console.log (allNames);