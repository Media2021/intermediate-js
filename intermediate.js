//1
let allNum = [];
for (var i = 200; i < 2700; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        allNum.push(i)
    } 
    
}
console.log(allNum);
//2
// const x = [2,1,6,4,-7];
// for(var i =0 ; i<x.length ; i++){
//     x[i]= [-7,4,6,1,2];
// }console.log(x);
//2
let x = [2,1,6,4,-7];
let reversex = x.reverse()
console.log(reversex)

//3
let result = [];
for (let i = 1; i <= 135; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        result.push("FizzBuzz");
    } else if (i % 3 == 0) {
        result.push("Fizz");
    } else if (i % 5 == 0) {
        result.push("Buzz");
    } else {
        result.push(i)
    }
    
}
console.log(result);
//4
//let a = 0, b = 1, next;
//for (let i = 1; i <= number; i++) {
  //  console.log(a);
  //  next = a + b;
  //  a = b;
  //  b = next;
//}
//4


//5
const array = [1, -2, 4, 1];

const index = array.indexOf(-2);
if (index > -1){
    array.splice(index,1);
}
console.log(array);
    
    
    

//6

let text = ['Man', 'I','Love','The','Matrix','Program'];
text[5] = (" ******* ");
console.log(text);
// to work with any word we just need to replace 
//number [5] with the right rank of that word
