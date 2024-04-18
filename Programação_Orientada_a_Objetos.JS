//Clases em JavaScript

//Definir classe
class pessoa {
    constructor(nome) {
        this.id= ~~(Math.random()* 100000)
        this.nome = nome
    }
}

//Criar objeto
const pessoa = new pessoa('João');


//Encapsulamento no código JavaScript

//Estrutural
let altura = 50
let largura = 60

function calcularArea() {
    return altura * largura
}

let area = calcularArea()

// Orientando a Objetos

class Poligono {
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura
 }

 get area() {
    return this.#calcularArea()
 }

 #calcularArea() {
    return this.altura * this.largura
 }
}

//Criar objeto
let poligono = new Poligono(50, 60)
console.log(poligono.area)


//Programação Orientada a Objetos
//Estruturado
var valorHora = 50
var tempoEstimado = 20
var deconto = valorHora * tempoEstimado * (10 / 100)
var custoEstimado = valorHora * tempoEstimado - desconto
console.log(custoEstimado)

//POO
const job = new Job()
job.valorHora = 50
job.tempoEstimado = 20
job.desconto = 10
const custoEstimado = job.calcularEstimativa()
console.log(custoEstimado)

//Herança ex
class Veiculo{
    rodas = 4;

    mover(direção){}
    virar(direção){}
}

class Moto extends Veiculo{
    constructor() {
        super() // puxar atributos e métodos do pai
        this.rodas = 2
    }
}

//Polimorfismo JavaScript
class Atleta {
    peso;
    categoria;

    constructor() {
        this.peso = peso
    }

    definirCategoria() {
        if (this.peso <= 50){
            this.categoria = 'infantil'
        }
        else if (this.peso <= 65) {
            this.categoria = 'juvenil'
        }
        else {
            this.categoria = 'adulto'
        }
    }
}

class lutador extends Atleta {
    constructor(peso) {
        super(peso)
    }
    definirCategoria() {
        if (this.peso <= 54) {
            this.categoria = 'pluma'
        }
        else if (this.peso <= 60) {
            this.categoria = 'leve'
        }
        else if (this.peso <= 75) {
            this.categoria = 'Meio-leve'
        }
        else {
            this.categoria = 'Pesado'
        }
    }
}

//Abstração no JavaScript
//definir
class parafuso{ // Superclass - Abstrata
  Constructor() {
    if(this.Constructor === 'parafuso')
      throw new Error('Classe abstrata não pode ser instânciada')
  }
  get tipo() {
    throw new Error('Método "get tipo()" precisa ser implementado')
  }
}

class Fenda extends Parafuso {
    constructor() { super() }

    get tipo() {
        return 'fenda'
    }
}

class Philips extends Parafuso {
    constructor() { super() }
    get tipo() {
        return 'philips'
    }
}

class Allen extends Parafuso {}

// criar e usar
new Parafuso()// new parafuso() // 'classe abstrata não pode ser instânciada'
let fenda = new Fenda()
let philips = new Philips()
let allen = new Allen()

console.log(fenda.tipo, philips.tipo)
console.log(allen.tipo)