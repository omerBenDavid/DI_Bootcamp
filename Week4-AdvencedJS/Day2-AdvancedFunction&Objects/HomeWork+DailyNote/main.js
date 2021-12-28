// Homework of today
// The exercises on curring and composing are not mandatory because we havn't gone over those notions yet
// Do the XP gold as it used nested functions that we learned today

//ex1
const numberSums = ((a ,b) => a + b);
console.log(numberSums(10, 20));

//ex2
const addTo = x => y => x + y;
var addToTen = addTo(10);
console.log(addToTen(3));
// 13 as 10 equal to 10 and y 3

//ex3
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b;
// console.log(curriedSum(30)(1))
// a will be 30 and b will be 1

//ex4
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// console.log(add5(12))
//a equal 5 and b 12

//ex5
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
console.log(compose(add1, add5)(10));
//f = add1 = 1 as g = add5 = 5 as a = 10 sumAll you get 16

//dailyChallenge
let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
console.log(groceries);
groceries['totalPrice'] = '35$';
console.log(groceries['totalPrice']);
groceries['payed'] = false;
console.log(groceries['payed']);
console.log(groceries);
//as we can see - payed will be depend where we will execute it
