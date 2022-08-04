class Car {
    startEngine() {
        console.log("start the car");
    }
    stopEngine() {
        console.log("stop the engine");
    }


}


class KIA extends Car {
    varient() {
        console.log("Topend");
    }
    color() {
        console.log("White");
    }
}


let kia = new KIA();
kia.startEngine()
kia.stopEngine()
kia.color()
kia.varient()