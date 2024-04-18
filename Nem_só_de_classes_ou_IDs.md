# Seletores

conecta um elemento HTML com o CSS a fim de alterar o elemento.

## Tipos

* Element selector
    - Todos os elementos HTML
* ID Selector 
    - Um elemento que tenha um atributo `id`.
    - Cada id deverá ser único.
* Class Selector
    - Os elementos que contenha um atributo `class`.
    - Podemos ter uma ou mais classes.
* Attribute Selector
    - Um elemento que tenha um atributo específico.
* Pseudo-class selector
    - Elementos em um estado específico.

## Mútiplos

Você poderá selecionar múltiplos elementos e aplicar alguma regra css para  todos eles.

Usamos uma separação por vírgulas para isso.

```css
h1, p, a { 
    color: red;
}
```

# combinators

Combinadores, pois eles trabalham para buscar e combinar seletores a fim de aplicar uma estilização

## Descendant combinator

* Identificado por um espaço entre os seletores.
* Busca um elemento dentro de outro

```css
body article h2
```

## Child combinator

* Identificado pelo sinal ` > `entre dois seletores
* Seleciona somente o elemento é filho direto do pai
* Elementos depois do filho direto serão desconsiderados

```css
body > ul > li
```

## Adjancent sibling combinator

* Identificado pelo sinal ` + `entre dois seletores
* Seleciona somente o elemento do lado direto que é irmão direto da hierarquia

```css
h1 + p
```

## General sibling combinator

* Identificado pelo sinal ` ~ `entre dois seletores
* Seleciona todos os elementos irmãos

```css
h1 ~ p
```

## Utilizando combinadores

```css
ul > li[class="red"]
```

## Dica

* Seletores muito específico tendem a causar dificuldades no reuso das regras de estilização dos elementos
* Muitas vezes, um simples uso de classes, torna o trabalho muito mais eficiente.




# Pseudo-classes

É um tipo de seletor que irá selecionar um elemento que estiver em um estado especifico.

Exemplo: É o primeiro elemento dentro de uma caixa, ou, o elemento está com o ponteiro do mouse em cima dele.

Pseudo-classes começam com 2 pontos seguidos do nome da pseudo class
`:pseudo-class-name`

## Selecionando elementos com pseudo-class

* :first-child
* :nth-of-type()
* :nth-child()

## Ações do Usuário 

* :hover
* :focus

## Atributos

* :disabled
* :required



# Pseudo-elements

Com pseudo-elements nós podemos adicionar elementos HTML pelo próprio CSS

`::pseudo-element-name`

## Exemplo

* ::before
* ::after
* ::first-line