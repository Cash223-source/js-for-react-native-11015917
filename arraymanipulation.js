function processArray(numbers) {
   return numbers.map(x => (x % 2 === 0 ? x ** 2 : x * 3));
 }
 
 const inputArray = [1, 2, 3, 4, 5];
 const outputArray = processArray(inputArray);
 console.log(outputArray); 
 
 module.exports = processArray;
 


function processArray(numbers) {
 return numbers.map(x => (x % 2 === 0 ? x ** 2 : x * 3));
}

function formatArrayStrings(strings, numbers) {
 if (strings.length !== numbers.length) {
   throw new Error('Both arrays must have the same length');
 }

 return strings.map((str, index) => {
   const number = numbers[index];
   if (number % 2 === 0) {
     return str.toUpperCase(); 
   } else {
     return str.toLowerCase(); 
   }
 });
}
