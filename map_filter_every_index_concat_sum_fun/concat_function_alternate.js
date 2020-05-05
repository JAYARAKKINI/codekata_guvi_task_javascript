//using concat() function

const str1 = 'Hello';
const str2 = str1.concat(' ', 'World');
console.log(str2)


//without using concat() function

console.log(['Hello', ' ', 'World'].join('')); 

//another method without concat()

const str = 'Hello' + ' ' + 'World';
console.log(str)
