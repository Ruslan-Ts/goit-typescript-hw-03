// interface IKey {
//     signature: number;
//     getSignature(): void;

// }
class Key {
    private signature: number;
    constructor() {
        this.signature = Math.random()
    }
    getSignature(): number {
        return this.signature;
        
    }
}
class Person {
    private key: Key;
    constructor(key: Key) {
        this.key = key;
    }
    getKey(): Key {
        return this.key

    }
}

abstract class House {
    protected door: boolean;
    protected key: Key;
    protected tenants: Person[] = [];

    constructor(key: Key) {
        this.key = key;
        this.door = false;
    }
     comeIn(tenant: Person): void {
        if (this.door) {
            this.tenants.push(tenant);
            console.log('tenant added');
        } else {
            console.log('door is closed');
        }
}
}

class MyHouse extends House {
    constructor(key: Key) {
        super(key)
    }
    openDoor(key: Key) {
    if (key.getSignature() === this.key.getSignature()) {
        this.door = true;
        console.log('door is open');
    } else 
        console.log('door is closed');
}
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export { };