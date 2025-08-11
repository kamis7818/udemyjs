var myNumbers = [3, 7, 9, 15, 38, 94, 36, 85, 25, 24];
//console.log(myNumbers.fill("Hello world",2,6));

function  checkAge(age) {
    return age >= 18;
}
console.log(myNumbers.filter(checkAge));