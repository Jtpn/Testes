// function expression
// fuction anonymus

// parâmetros (parameters)
const sum = function(number1, number2){
    console.log(number1 + number2);
}

 let number11 = 11
 let number90 = 60

sum(2, 3) // arguments - argumentos

console.log(`o número 1 é ${number11}`)
console.log(`o número 2 é ${number90}`)
console.log(`a soma é ${sum(number11, number90)}`) // não vai somar vai dar erro

//para que a soma desse certo precisa do return
//const sum = function(number1, number2){
//    total = (number1 + number2);
//    return total 
//} console.log(`a soma é ${sum(number11, number90)}`)  assim com o retunr total ele vai somar
// se colocar um operador especial como var posso colocar um console.log(total) assim terei resultado
// é so não colocar antes do calculo

// function scope
let subject = 'create video'

function createthink(subject){
    subject = 'study'
    return subject
}

console.log(createthink(subject)) // o resultado vai ser o study
console.log(subject) // o resultado vai ser create video

// function hoisting

SayMyname()

function SayMyname() {
    console.log('Fulano')
}
// const SayMyname = function() não da certo porque SayMyname não é uma função

// arrow function

const Saymyname = (name) => {
    console.log(name)
}

SayMyname('Beltrano')

//callback function
function SayMyname(name) {
    console.log(name)
}

SayMyname()

//callback function (é uma função que esta passando como parametro para outra função)

function SayMyname(name){
    console.log('Antes do callback')

    name()

    console.log('Depois do callback')
}

SayMyname(
    () => {
        console.log('Estou em uma callback')
    }
)

/*
  Function() constructor

  * expressão new
  * criar um novo objeto
  * this keyword
*/  

function person(name) {
    this.name = name
}
const mayk = new person("Mayk")
const joao = new person("Joao")
console.log(mayk)
console.log(joao)

/*
   Prototype
(tenho que ver esse trem depois para ver se entendo mellhor)
   * Prototype-based language
   * Prototype chain
   * __Proto__
*/

/*
  Type conversion (typecasting) vs type coersion

  * Alteração de um tipo de dado para outro tipo
*/

console.log('9' + 5) // vai dar 95
console.log(number('9') + 5) // vai dar 14

//manipulação de string e números

//transforma string em número e número em string
/*let string = "123"
console.log(number(string))
let number = 321
console.log(string(number))
*/
//manipulando string e números

//contar quantos caracteres tem uma palavra e quantos digitos tem um número

/*let word ="Qualquercoisa"
console.log(word.length)
let number = 1234
console.log(string(number).length)
*/

// manipulando string e números

//Transforma um número quebrado com 2 casas decimais e trocar ponto por vírgula
let number = 751.39715975
console.log(number.toFixed(2).replace(".", ","))//("," fazer assim da errado)

//Manipulando string e números

// transforme letras minúsculas em maiúsculas. faça o contrário disso também
/*let word = "Programação da dinheiro"
console.log(word.toLowerCase().toUpperCase())
*/
//Manipulando string e arrays

//Separa um texto que contem espaços, em um novo array onde cada texto é uma posição do array
//Depois disso, transforme o array em um texto e onde eram espaços,coloque_
/*
let phrase = "Eu quero viver"
let myArray = phrase.split(" ")// se colocar uma letra ela não aparecera no site
let phrasewithUnderscore = myArray.join("_")//coloque alguma coisa nesse e ela vai aparecer entre os espaços
console.log(myArray)
console.log(phrasewithUnderscore)
*/
//manipulando strings

//verificar se o texto contém a palavra amor

let phrase = "Eu quero viver o Amor!"
console.log(phrase.includes("Amor"))

//manipulando arrays

//criar array com construtor
let myArray = new Array('a','b','c') //pode criar array com posições vazias colocando números
console.log(myArray)

//contar elementos de um array
console.log([
    "a",{type: "array"},
    function() {return "alo"}
][1].type)

//transformar uma cadeia de caracteres em elementos de um array
let word = "manipulação"
console.log (Array.from(word))

// manipulando arrays

let techs = ["html","css","js"]

//adicionar um item no fim
techs.push("nodejs")
//adiconar no começo
techs.unshift("sql")
//remover do fim
techs.pop()
//remover do começo
techs.shift()
//pegar somente alguns elementos do array
console.log(techs.slice(1, 3))
//remover 1 ou mais items em qualquer poisição do array
techs.splice()
//encontrar a posição de um elemento array
let index = techs.indexOf('css')
techs.splice(index, 1)

console.log(techs)