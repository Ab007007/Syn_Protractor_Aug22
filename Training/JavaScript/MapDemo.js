const resto = new Map()

resto.set("name", "Nandana")
resto.set("address", "Bangalore")

resto
.set("categories", ["italian","chinees"])
.set("open",11)
.set("close",23)

console.log(resto.get("name"));

console.log(...resto);