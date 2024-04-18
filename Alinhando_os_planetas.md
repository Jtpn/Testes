# Layout e evolução 

Layout tem a ver com a maneira que os elementos estão distribuidos na tela

## Normal flow

Ou Flow Layout é a maneira que os elementos `block` e `ìnline` ficam na página

```html
<p> Texto block com <strong>inline</strong> dentro </p>
```

## Tables

É a maneira de tabelas onde a tag `table` recebe um display `table` fazendo com que os elementos como `td` e `tr` possam ser usados para montar uma tabela

```html	
<table>
    <tr>
        <td> Hora </td>
        <td> 12:44</td>
    </tr>
    <tr>
        <td> Hora </td>
        <td> 14:17</td>
    </tr>
    <tr>
        <td> Hora </td>
        <td> 18:47</td>
    </tr>
</table>   
```

## tabeless

Uso das propriedades `float`, `clear` para que os elementos possam mudar de posição na tela.

```html	
<div style="float: left"> vai ser jogado para esquerda </div>
<div style="float: right"> vai ser jogado para direita </div>
<div style="clear: both"> vai voltar ao normal </div>
```

## Flexbox

A caixa se torna flex, fazendo com que os elementos internos possam receber melhor:

- Alinhamento
- Ordenação
- Tamanhos flexíveis

.flexbox{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
}

.item:nth-child(1) {
    order: 1;
}



# Terminologia

- Flex Container
    - Flex item
- Nesting
- Axis
    - Main
        - Start, end
    - Cross
        - Start, end
- Flex sizing
    - Flexível
    - Altera width/height dos itens para preenchimento dos espaços do flex container

    .container {
        display: flex;
        flex-direction: column;
        justify-content: flex-end; <-- a coluna com os itens vai aparecer do lado direito
        height: 100vh; <-- com esse aqui a coluna com os itens vai aparecer no final da pagina do lado esquerdo
    }



.Container {
    display: flex;
    border: 1px solid red;
    height: 200px
}

.item {
    background-color: brown;
    border: 1px solid
    flex: 1; <-- vai preencher todos os espaços do flex
}


# Propriedades dp Flex Container

* Direção dos itens
* Multi linhas
* Alinhamento
    * Principal
    * Cruzado
* Espaços entre itens

# Direção dos itens

- Flex é uma dimensão (horizontal ou vertical)
- Podemos mudar a direção com `flex-direction`
- Valores: (row | row-reverse | column | column-reverse)

# Flex-wrap

- Podemos usar multi linhas.
- Cada nova linha, um novo flex-wrap container

# Flex-flow

- Shorthand
- Flex-direction || flex-wrap

# Justify-content

- Alinhamento dos elementos dentro do container
- Distribuição dos elementos

## valores

- flex-start
- flex-end
- center
- space-around
- space-between
- space-evenly

# align-itens

- Alinhamento dos elementos no eixo cruzado

## valores

- stretch
- flex-start
- flex-end
- center

# gap

- Espaços entre os elementos

## valores

Unidades de medidas
fixas: px, pt
flexíveis: %, em, rem



# Propriedades para os itens

- flex-basis
- flex-grow
- flex-shrink
- flex
- order


# flex-grow

- O crescimento do item dentro do container em relação aos espaços vazios.

# flex-shrink

- O encolher do item dentro do container.

# flex

- shorthand
- flex-grow flex-shrink flex-basis
- Podem ter 1, 2 ou 3 valores

# order 

- Decidi a ordem do que aparece 