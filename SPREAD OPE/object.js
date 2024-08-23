let emp={id:101,name:"chakri",email:"chakri@123gmail.com"}
let details={email:"chakri@ibm.com",loc:"Hyderabad",age:23}
//duplicate values are not allowed in object
// by using the spread operator by merging the objects
let emp_Details={...emp,...details}
 console.log(emp_Details)

// object with out using the spread operator

// let emp_Details={}
// for(key in emp){
//     //console.log(key,emp[key])
//     emp_Details[key]=emp[key]
// }
// for(key in details){
//     emp_Details[key]=details[key]
// }
// console.log(emp_Details)
