localStorage.setItem('name', 'hai')
localStorage.setItem('age', 25)
localStorage.setItem('address', 'HN')
localStorage.setItem('phone', '0123456789')


let name = localStorage.getItem('name');
let age = localStorage.getItem('age');
let address = localStorage.getItem('address');
let phone = localStorage.getItem('phone');

console.log(name);
document.write(name + '<br>');
console.log(age);
document.write(age + '<br>');
console.log(address);
document.write(address + '<br>');
console.log(phone);
document.write(phone + '<br>');

console.log(localStorage.key(3  ));