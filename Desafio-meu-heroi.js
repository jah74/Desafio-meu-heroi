class heroeiDojogo{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }
    atacar(){
        console.log(`o ${this.tipo} atacou usando a ${this.ataque}`)
    }
}
let heroeiprincipal = new heroeiDojogo("kipper", "7 anos", "guerreiro", "espada")
heroeiprincipal.atacar()