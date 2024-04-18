// era para ser um comentario aqui 
   em que somente o programador pode ver
/*

console.log('Bem vindos ao starer') <-- isso aqui pode ser visto no site

# Tipos de dados

* gramática
   * Elementos de linguagem e suas combinações
   * A arte de falar e escrever corretamente

* Vocabulário
   * Conjunto de termos e expressões
   * Agrupamento de palavras

* precisamos saber como escrever
* precisamos saber os significados
* precisamos continuar aprendendo, para crescer nosso vocabulário.

* Conceitos e escrita

> Vamos aprender os tipos de dados mais utilizados na linguagem
  * Você sabia que é possível aprender 80% de uma linguagem nova, com cerca de 20% do vocabulário? (até menos)

  /*
    String

    * Cadeia de caracteres
    "" // Aspas duplas   (não permite mutilinha)
    '' // Aspas simples  (não permite mutilinha)
    ´´ // template literais ou template string (permite mutilinha)   

    console.log(´
    
    Joker
    
    ´)


    console.log(´Joker ${1 + 1}´)
    console.log(1 + 1)


/*
 Number(Números)

 33 // inteiros
 12.5 // reais
 NaN // Not a Number
 Infinity // Infinito
 */

 /*
   Boolean
     * somente 2 valores

         true
         false

 /*
 *undefined
   *indefinido

*null
  *Nulo
  *Objeto que não possui nada dentro
  *diferente de indefinido

/*
*Object
   *Objeto
   *Propriedades / atributos
   *Funcionalidades / Metodos

   {Propriedade: "valor"}

   */
   console.log ({
      name: "morgana",
       age: 10000,
      walk: function() {
         console.log('andar')
      }
   })

/*
  *Array
    *Uma lista
    *Agrupamento de dados

    ["João". 21]

    console.log ([
      "Manteiga",
      "Ovos",
      5,
      3
    ])


   
# Variáveis

*Nomes simbolicos para receber algum valor
*Atalhos do código
*Indentificadores
*3 palavras reservadas para criar uma variável
   *var
   *let
   *const


O JS é uma linguagem fracamente tipada e dinâmica
- Variáveis não precisam ter um tipo previamente definido
- Podemos mudar o conteúdo da variável

# Scope

* Escopo determina a visibilidade de alguma variável no JS

# Block statement
```js
// Vamos iniciar um bloco
{
   // aqui dentro é um bloco e posso colocar qualquer código
}// aqui fechamos o bloco
```

O bloco, também criará um novo escopo, Chamamos de
`block-scoped`

## var
```js
// var é global e poderá funcionar foda de um escopo de bloco
console.log('> existe x antes do bloco? ', x)

{
   var x = 0
}

console.log('> existe x depois do bloco? ', x)
```