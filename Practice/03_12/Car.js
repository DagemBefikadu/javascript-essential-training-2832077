class Car {
    constructor(
        name,
        type,
        color,
        brand,
        wheelL,
        wheelR,
        hybird
    ){    
    this.name = name,
    this.type = type,
    this.color = color,
    this.brand = brand,
    this.wheel = {
        wheelL = wheelL,
        wheelR = wheelR
        }
    this.hybird = hybird
    }
    isHybird(hybirdStatus) {
        this.hybird = hybirdStatus
    }
}