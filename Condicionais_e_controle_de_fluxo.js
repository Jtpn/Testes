// control flow

// se estiver sujo
console.log('lavar o copo')



console.log('guardar o copo')


// if...

let temperature = 34

/*
if(temperature >= 37) {
   console.log('febre')
} else {
   console.log('saudável')
}
*/

if(temperature >= 37) {
    console.log('febre alta')
} else if(temperature < 37.5 && temperature >= 37){
    console.log('febre moderada')
}else{
    console.log('Saudável')
}

/* 
 let temperature = 35
 let highTemperature = temperature >= 37.5
 let mediumTemperature = temperature < 37.5 && temperature >= 37

 if(highTemperature) {
    console.log('febre alta')
 } else if(mediumTemperature){
    console.log('febre moderada')
 } else {
    console.log('sauldavel')
 }
*/

// switch
/*
switch (expression) {
   case 'a':
      //codigo (o break é opcional mas é recomendado)
      console.log ('a')
      break
   case 'b':
      // codigo para expression b
      console.log('b')
      break
   default:
      console.log('default')
      break
}
*/

function calculate(number1, operator, number2) {
   let result

   switch (operator) {
      case '+':
         result = number1 + number2
         break
      case '-':
         result = number1 - number2
         break
      case '*':
         result = number1 * number2
         break
      case '/':
         result = number1 / number2
         break
      default:
         console.log('não implementado')
         break
   }

   return result
}

//throw

function SayMyName(name = '') {
   if (name === '') {
      throw 'Nome é obrigatório'
   }

   console.log('depois do erro')
}

//try...catch
try {
   SayMyName()
} catch(e) {
   console.log(e)
}

// Estrutura de repetição
// For
// break - para a execução do loop
// continue - pula a execução do momento

for(let i = 1; i <= 10; i++) {
    console.log(i)
}
// vai contar de 1 até 10 enquanto o i for menor que 10 se estiver sem o = então vai ser de 1 até 9

for(let y = 100; y > 0; y--) {
   if(i === 50) {
      break;
   }

   console.log(y)
}
// vai contar de 100 até 0 com o if(i === 50) {break;} so vai contar do 100 até o 50
// se colocar continue; no lugar do break o java vai pular o número 50


// Estrutura de repetição
// while

let x = 0;
while(i < 10) {
    console.log(x)

    i++;
}
let z = 8000;
while(z > 10) {
    console.log(z)

    z /= 20
}


// for...of
/*
let name = 'Snake'
let names = ['Iruma', 'Steve', 'Tim']

for(let char of name) {    //s
    console.log(char)      //n
}                          //a
                           //k
                           //e

for(let name of names) {   //Iruma
    console.log(name)      //Steve
}                          //Tim
                          
                           // O resultado de cada um
*/
// for...in
let person = {
    name: 'donald',
    age: 50,
    weight: 50.0  
}
for(let property in person) {
    console.log(property)
//    console.log(person["name"] / person.name / [property])
// maneiras diferente de acessar a propriedade de person
}


/* ### Transformar notas escolares

Crie um algoritimo que transforme as notas do sistema numérico
para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89   - B
* entre 70 - 79   - C
* entre 60 - 69   - D
* menor que 60    - F

*/
function getScore(score) {
let scoreA = score >= 90 && score <=100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreF = score < 60 && score >= 0

let scoreFinal;

if (scoreA) {
   scoreFinal = 'A'
} else if (scoreB) {
   scoreFinal = 'B'
} else if (scoreC) {
   scoreFinal = 'C'
} else if (scoreD) {
   scoreFinal = 'D'
} else if (scoreF) {
   scoreFinal = 'F'
} else {
   scoreFinal = 'Nota inválida'
}

return scoreFinal
}
// aperte e segure alt e clique em outra linha para digitar em mais de uma linha
console.log(getScore)(50)
console.log(getScore)(87)
console.log(getScore)(171)
console.log(getScore)(-10)
console.log(getScore)(100)
console.log(getScore)(18)
console.log(getScore)(74)
console.log(getScore)(69)
console.log(getScore)(28)
console.log(getScore)(47)


/* ### Sistema de gastos familiar


Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
* receitas: []
* despesas: []

Agora, crie uma função que irá calcular o total de receitas
e despesas e irá mostrar uma mensagem se a família está com
saldo positivo ou negativo, seguido do valor do saldo
*/

let family = {
    income: [2500, 3200, 250.43, 360,45],
    expenses: [320.34, 128.45, 176.87, 1450.00]
}

function sum(array) {
   let total = 0;

   for(let value of array) {
       total += value
   }
   return total
   
}

function calculateBalance() {
   const calculateIncomes = sum (family.income)
   const calculateExpenses = sum (family.expenses)

   const total = calculateIncomes - calculateExpenses

   const itsOK = total >= 0
   
   let balanceText = " Negativo "

   if (itsOK) {
      balanceText = "Positivo"
   }

   console.log(`seu saldo é ${balanceText}: ${total}`)
}

/* ### Celcius em fahrenheit

   Crie uma função que receba uma string em celsius ou
   fahenheit e faça a transformação de uma unidade para
   outra

   C = (F - 32) * 5/9

   F = C * 9/5 + 32
*/

// transformDegree('50F')
function transformDegree(degree) {
   const celsiusExists = degree.toUpperCase().includes('C')
   const fahrenheitExist = degree.toUpperCase().includes('F')
   
   if (!celsiusExists && fahrenheitExist) {
        throw new Error('Grau não indentificado')
   }

   // fluxo ideal, F -> C
   let updateDegree = Number(degree.toUpperCase().replace("F", ""));
   let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
   let degreeSign = 'C'
 
   return formula(updateDegree) + degreeSign
}
try{
   transformDegree('50F')
   transformDegree('50Z')
} catch (error) {
   console.log(error.message)
}
// queira xingar esse exemplo



const booksByCategory = [
   {
      category: "Riqueza",
      books: [
         {
            title: "Os segredos da mente milionária",
            author: "T. Harv Eker"
         },
         {
            title: "O homem mais rico da Babilônia",
            author: "Geroge S. Clason"
         },
         {
            title: "Pai rico, pai pobre",
            author: "Robert T. Kiyosaki e Sharon L. Lechter",
         },
      ],
   },
   {
      category: "Inteligência Emocional",
      books: [
         {
            title: "Você é Insubstituível",
            author: "Augusto Cury",
         },
         {
            title: "Ansiedade - Como enfrentar o mal do século",
            author: "Augusto Cury",
         },
         {
            title: "Os 7 hábitos das pessoas altamente eficazes",
            author: "Stephen R. covey"
         }
      ],
   },
];

const totalCategories = booksByCategory.length

for(let category of booksByCategory) {
   console.log("Total de livros da categoria", category.category)
   console.log(category.books.length)
}

function counteAuthors(){
   let author = [];

   for(let category of booksByCategory) {
      for(let book of category.books) {
         if(author.indexOf(book.author) == -1) {
            author.push(book.title)
         }
      }
   }

   console.log("Total de autores:", author.length)
}
 
counteAuthors();