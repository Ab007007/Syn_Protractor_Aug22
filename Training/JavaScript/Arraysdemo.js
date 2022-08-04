let marks = [44,55,66,77,88,99]

for (const num of marks) {
    console.log(num);
}

console.log(marks);
console.log(`total elements in an array ${marks.length}`);
marks.push(100)
console.log(marks);
console.log(`total elements in an array ${marks.length}`);

console.log("Removing Element from the Array---------------------");
marks.pop()
console.log(marks);
console.log(`total elements in an array ${marks.length}`);

console.log("Inserting the element in the begining------------------->");
marks.unshift(100)
console.log(marks);
console.log(`total elements in an array ${marks.length}`);

console.log("Deleting the element from the begining of the Array ---->");
marks.shift()
console.log(marks);
console.log(`total elements in an array ${marks.length}`);


delete marks[1]
console.log(marks);
console.log(`total elements in an array ${marks.length}`);


console.log(marks.indexOf(424));
console.log(marks);
console.log(`total elements in an array ${marks.length}`);

console.log(marks.join(' , '));


//console.log(marks.splice(0,3));
marks.splice(1,0,22,33,22);
console.log(marks);
console.log("-----------------SLICE----------------");
console.log(marks.slice(1,0,222,323,222));
console.log(marks);
