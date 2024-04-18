console.log("You Died")

// lista de argumentos

const firstname = process.argv[2];
const lastname = process.argv[3];

console.log(`Seu nome é ${firstname} ${lastname}`)

/* Crie 2 arquivos JavaScript
   O primeiro, irá exportar uma função chamada getFlag()
   Que receberá um argumante do tipo String.
   Essa função deverá buscar dentro do array process.argb a flag desejada, que é a string e retornar o valor da flag
   
   O segundo irá importar a função e passar a flag desejada.
   
   Iremos rodar no terminal o segundo arquivo passando as flags --name e --greeting
   Para que seja impresso no terminal a saudação e o nome da pessoa*/




