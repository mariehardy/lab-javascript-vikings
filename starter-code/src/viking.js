// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack(){
        return this.strength
    }
    
    receiveDamage(damage){
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)  // super needs to be specified first, like here
        this.name = name
    }

    receiveDamage(damage){
        this.health -= damage
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        } else  {
            return `${this.name} has received ${damage} points of damage`
        } 
    
    }

    battleCry(){
        return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier {
    
receiveDamage(damage) {
    this.health -= damage
    if (this.health <= 0) {
        return `A Saxon has died in combat`
    } else  {
        return `A Saxon has received ${damage} points of damage`
    } 
}

}

// War
class War {
    
// TO PASS THE TESTS::

    vikingArmy = []
    saxonArmy = []

    // setter method  (i.e. add new shoe to Zalando's inventory)
    addViking(Viking){
        this.vikingArmy.push(Viking)
    }

    // setter method  (i.e. add new shoe to Zalando's inventory)
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }

 

/*    // HENDRIK'S WAY

    constructor(saxonArray, vikingArray){
        this.saxonArmy = saxonArray
        this.vikingArmy = vikingArray
    }

    let battlefield = new War([new Viking(), new Saxon(), new Saxon()])
*/

    vikingAttack(){

        let randomIndexOfSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        let randomIndexOfViking = Math.floor(Math.random() * this.vikingArmy.length)
        let randomSaxon = this.saxonArmy[randomIndexOfSaxon]
        let randomViking = this.vikingArmy[randomIndexOfViking]

        let result = randomSaxon.receiveDamage(randomViking.strength) 
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomIndexOfSaxon, 1)
        }
            return result
        
    }

    saxonAttack(){
        let randomIndexOfSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        let randomIndexOfViking = Math.floor(Math.random() * this.vikingArmy.length)
        let randomSaxon = this.saxonArmy[randomIndexOfSaxon]
        let randomViking = this.vikingArmy[randomIndexOfViking]

        let result = randomViking.receiveDamage(randomSaxon.strength)
        if (randomViking.health <= 0){
            this.vikingArmy.splice(randomViking, 1)
        } else {
            return result
        }
    }

// PARAMETER = vikingArmy OR saxonArmy
    generic(attackantArmy, attackedArmy) {

        let randomIndexOfAttakant = Math.floor(Math.random() * attackantArmy.length)
        let randomIndexOfAttacked = Math.floor(Math.random() * attackedArmy.length)
        let randomAttackant = attackantArmy[randomIndexOfAttakant]
        let randomAttacked = attackedArmy[randomIndexOfAttacked]


        let result = randomAttacked.receiveDamage(randomAttackant.strength)
        if (randomAttacked.health <= 0){
            attackedArmy.splice(randomAttacked, 1)
            return result
        } else {
            return result
        }

    }

    showStatus(){}

}


let soldier1 = new Soldier (100, 5)
let soldier2 = new Soldier (400, 9)
let soldier3 = new Soldier (100, 15)

soldier3.receiveDamage(damage)