/* Esxpressões e Operadores

-Expressions
-Operators
  Binary
  Unary
  Ternary
*/

let number = 1; // sem o ; da errado

(function() {
    console.log('alo')
})()

/*
  new
  * left-hand-side expression
  * criar um novo objeto
*/
let name = new String('João')
name.surName="Torres" // o surName é para colocar sobrenome
let age = new number (21)
console.log(name, age)
let date = new Date('2001-03-16')

/*
  Operadores Unários
  Typeof
  Delete
*/
const person = {
  name: 'fulano',
  age: 40,
}
delete person. age //deletar informação da idade se tiver o name vai deletar o nome

console.log(person)

// Operadores aritiméticos

// mutiplicação *
console.log(10 * 5) 

// divisão /
console.log(10 / 2)

// soma + 
console.log(51 + 69)

// subtração -
console.log(80 - 11)

// resto da divisão %
let remainder; //remainder significa o resto
remainder = 11 % 11
console.log(remainder)

// incremento ++
let increment = 0
increment++ // vai adicionar 1 ponto se tiver mais 1 increment++ vai adicionar mais 1
console.log(increment)
// decremento --
let decrement = 0
decrement-- // é a mesma coisa o increment++ com a diferença que subtrai
console.log(decrement)

// exponencial **
console.log(3 ** 3)

//grouping operator ( )

let total = 2 + 3 * 5// (2 + 3) * 5 dessa maneira o java vai primeiro somar para depois elevar
console.log(total)

// Operadores de comparação

//Irá comprar valores e retornar um Boolean como resposta à comparação

let one = 1
let two = 2

// ==      igual a
//console.log(two == 1)
//console.log(one == "1")

// !=      diferente de
//console.log(one !=two)
//console.log(one !=1)
//console.log(one != "1")

// ===     estritamente igual a
//console.log(one === "1")
//console.log(one === 1)

// !==     estritamente diferente de
// console.log(two !== "2")
// console.log(two !== 2)

// >       maior que
// console.log(one > two)

// >=      maior igual a
// console.log(one >= 1)
// console.log(two >= 1)

// <       menor que
// console.log(one < two)

// <=      menor igual a
// console.log( one <= two)
// console.log( one <= 1)
// console.log( one <= 0)

// Operadores de atribuição (Assignment)
let x // x = indefinido/undifined

console.log(x)

// assignment
// x = 1

// addition assignment
// x = x + 2
// x += 2

// subtraction assigment
// x = x - 1
// x -= 1

// multiplication assigment
// x = x * 2
// x *= 2

//division assigment
// x = x / 2
// x /= 2

//remainder, exponetiation
// x %= 2
// x **=2

// Operadores lógicos (logical operators)

// - 2 valores booleanos, quando verificados,
// resultará em verdadeiro ou falso

let pao = true
let queijo = true

// AND &&
//console.log(pao && queijo)
//precisa ter o pao e o queijo
// OR ||
//console.log(pao || queijo)
//precisa ter ou o pao ou o queijo
// NOT !
//console.log(!pao)
//esse é do contra se o pao ou o queijo for verdadei vai dar falso e vice e versa



//Operador Condicional (ternário)

//Denpendendo da condição, nós recebemos valores diferentes

//Condição então valor 1 se não valor 2
//condição ? value1 : value2

//Exemplos
//Café da manhã top
let sanduiche = true
let suco = true

const niceBreakfast = sanduiche && suco ? 'Café bom' : 'Café ruim'
// é para usar o &&, || e !
console.log(niceBreakfast)

//Maior de 18
// let age = 16
// const canDrive = age >= 18 ? 'can drive' : 'cannot drive'
//console.log(canDrive)




//Operador de String ( string operator)

// comparison (comparação)
// console.log('a' == 'b') FALSE
// console.log('a' == 'a') TRUE

// concatenation (concatenação)
// Retorna a união de duas string
let alpha = 'alpha'
console.log( alpha + 'bet' + 's')



/*
  typer conversion (typecasting) vs type coersion
*/

//console.log('9' + 5)


/*
   FALSY
   quando um valor é considerado false em contextos onde
   um booleano é obrigatório (condicionais e loops)

   false
   0
   -0
   ""
   null
   nudefined
   NaN
*/ 

console.log( 0 ? 'verdadeiro' : 'falso' )

/* 
  TRUTHY
  Quando um valor é considerado true em contextos onde um
  booleano é obrigatório (condicionais e loops)

  true
  {}
  []
  1
  3.23
  "0"
  "false"
  -1
  Infinity
  -Infinity
*/

console.log( Infinity ? 'verdadeiro' : 'falso' )



/* Operator precedence 
    Predência de operadores

* grouping                  ( )
* negação e incremento      ! ++ --
* multiplicação e divisão   * /
* adição e subtração        < <= > >=c
*igualdade                  == != === !==
*AND                        &&
*OR                         ||
*condicional                ?:
*assignment (atribuição)    = += -= *=


*/
console.log(3 > 2 > 1)//da False porque o java não vai comparar os 3 somente o 3 > 2 então o 2 vai ser igual a 1
console.log(3 > 2 && 2 > 1)//da True seria como perguntar 3 é maior que 2? e 2 é maior que 1?