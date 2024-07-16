class Vehicle{
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = Parts(parts);
        this.fuel = fuel;
    }

    drive(fuelLoss) {
        this.fuel -= fuelLoss;
    }
}

class Parts{
    constructor(engine, power) {
        this.engine = engine;
        this.power = power;
        this.quality = power * engine;
    }
}
