/* 
 Dark Pulse Theme
*/

class ShadowEntity {
    constructor({ name, power, origin }) {
        this.name = name;
        this.power = power;
        this.origin = origin;
    }

    revealPower() {
        return `${this.name} wields ${this.power}, emerging from the depths of ${this.origin}.`;
    }
}

const entity = new ShadowEntity({
    name: "Nyx",
    power: "Void Manipulation",
    origin: "Nether Realm"
});

console.log(entity.revealPower());
