let num = 5

for (let index = 1; index <= 10 ; index++)
{
   console.log(`${num} * ${index} = ${num * index}`);
    
}

let fruits = ['Apple', 'Orange' , 'Mango', 'Banana' , 'JackFruit']

// for in loop returns index for every iteration
for(let i in fruits ) {
    console.log(`Fruit at index ${i} is ${fruits[i]}`);
}
// for of loop returns element for every iteration
for(let fruit of fruits) {
    console.log(fruit);
}

//For each loop - TODO -> once we understand functions