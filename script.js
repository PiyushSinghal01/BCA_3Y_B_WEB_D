const name = "piyush"
name === "piyush" ? function hey(){
    console.log("Hey! this side Piyush")
} : "no";







// // IIF (immediately invoked function)
// (function sum(a, b){
//     console.log(a+b);
// }
// )(5, 7);


// // IIFE (immediately invoked function Expression)
// let sum = (function(a, b){
//     console.log(a+b);
// }
// )(5, 7);

// // IIFE (immediately invoked function Expression)
// // with return value
// let multiply = (function(a, b){
//     return (a * b);
// }
// )(5, 7);

// console.log(multiply);



// // generator function
// function *myGen(){
//     yield 5 + 1
//     yield 5 - 1
//     yield 5 * 5
//     yield 5 / 5
// }

// const g = myGen()
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());


// function *myGen(){
//     return 5 + 1
//     return 5 - 1
//     return 5 * 5
//     return 5 / 5
// }

// const h = myGen()
// console.log(h.next());
// console.log(h.next());
// console.log(h.next());
// console.log(h.next());



function *myGen(){
    for(let i = 0; i < 4; i++)
    {
        yield i;
    }
}

const x = myGen()
for(let i = 0; i < 5; i++)
{
    console.log(x.next());
}