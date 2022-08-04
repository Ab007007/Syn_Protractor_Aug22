const person = function(name, birtYear) {
    this.name = name;
    this.birtYear = birtYear;
}

person.prototype.calAge = function() {
    console.log(2022 - this.birtYear);
}

let p1 = new person("ahb", 1983)
let p2 = new person("klh", 1982)


console.log(p1);
p1.calAge()