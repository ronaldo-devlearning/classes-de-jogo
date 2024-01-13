class Hero {

    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack(type) {
        
        let strike = ''

        if(type == 'mago') {
            type = 'mago'
            strike = 'magia!'
            console.log(`O ${type} atacou usando ${strike}`);
        }

        if(type == 'guerreiro') {
            type = 'guerreiro'
            strike = 'espada!'
            console.log(`O ${type} atacou usando ${strike}`);
        }

        if(type == 'monge') {
            type = 'monge'
            strike = 'artes maciais!'
            console.log(`O ${type} atacou usando ${strike}`);
        }

        if(type == 'ninja') {
            type = 'ninja'
            strike = 'shuriken!'
            console.log(`O ${type} atacou usando ${strike}`);
        }
    }
  
}

const player1 = new Hero('Ronaldo', 33, 'ninja');

player1.attack(player1.type);