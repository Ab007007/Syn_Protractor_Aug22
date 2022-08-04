const grade = new Set()

grade.add("A")
grade.add("B")
grade.add("C")
grade.add("A")
grade.add("B")
grade.add("C")
console.log(grade.size)
console.log(grade.has("A"));
grade.delete("A")
console.log(grade.has("A"));
console.log(grade.size)

for(ele of grade)
{
    console.log("Element " + ele);
}

grade.forEach(function(e){
    console.log("Foreach " + e);
})