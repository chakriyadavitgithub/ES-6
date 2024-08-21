// for even numbers by sing the for if & push
// let numbers=[1,2,3,4,5,6,7,8,9,10]
// let even_Numbers=[]
// for(num of numbers){
//     if(num%2 ===0)
//         even_Numbers.push(num)
// }
// console.log(even_Numbers)


// 2.from here using the filter and return and we will get same output

let numbers=[1,2,3,4,5,6,7,8,9,10]
let even_Numbers=numbers.filter((num)=>{
    return num% 2 ===0;
})
console.log(even_Numbers)
