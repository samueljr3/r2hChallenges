class Pokemon{
    constructor(name, type, attack){
        this.name = name,
        this.type = type, 
        this.attack =attack
    }

    doAttack = () =>{
        console.log(`${this.name}, used ${this.attack}`)
    }
}

const Milotic = new Pokemon("Milotic", "Water", "Scald");
const Diance = new Pokemon("Diance", "Rock/Fairy", "Diamond Storm");

Milotic.doAttack();
Diance.doAttack();