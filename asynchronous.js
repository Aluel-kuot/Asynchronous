// quiz1
// Write an asynchronous function that accepts a message string and a delay 
// time in milliseconds. The function should log the message to the console after 
// the specified delay time.

let words=(word)=>{
    console.log(word)
}
words("Life moves on regardless");
setTimeout(words,4000)


// quiz2
// You have an array of user IDs and a function getUserData(id) that returns a
//  Promise with user data when given a user ID. Write an asynchronous function that
//   fetches and logs the data for each user ID one by one, in sequence.

// let userIds=['MAK453','AT236','RM768'];
// let promise=Promise(function(resolve,reject){
// for (id in userIds){
//      if (userIds){
//          resolve()
//      }let userIds=['MAK453','AT236','RM768'];
// let promise=Promise(function(resolve,reject){
// for (id in userIds){
//      if (userIds){
//          resolve()
//      }
//      else{
         
//      }

// }

// });
// getUserData(id)=()=>function(){

// };
// console.log(userIds)

//      else{
         
//      }

// }

// });
// getUserData(id)=()=>function(){

// };
// console.log(userIds)




// quiz3
// You have an asynchronous function performTask() that returns a Promise. The 
// Promise resolves if the task is successful and rejects if there's an error. Write a 
// function that calls performTask() and logs a custom success message if the task is successful, 
// and a custom error message if there's an error.
let task=true;
let tasks= new Promise(function(revolve,reject){
if (task){
    revolve('task successful')
}
else{
    reject('error')
}

});
performTask=()=>function(){
};
console.log(tasks)



