Tudo isso é no javascript
E esta alterando o que esta no HTML

# DOM (document object model)

* É o HTML convertido para um objeto JavaScript
* API que representa e interage com o HTML
* Estrutura de danos tipo árvore, criada pelo browser
* Propriedades e métodos

# Para que?

* JavaScript usa a DOM para se conectar ao HTML
* Manipular o HTML com o javascript
* Você só programa pra WEB porque existe a DOM



# getElement

* getElementById (element)
* getElementByClassName (HTMLcollection)
* getElementByTagName (HTMLCollection)

# querySelector

* querySelector
* querySelectorall


# Manipulando conteudo 

* textcontent

const element = document.querySelector('h1')
(O javascript vai pegar a mensagem que esta no h1 e vai mixar com o textContent)
element.textContent += " Eai cara"

console.log


* InnerText

const element = document.querySelector('h1')
(O javascript vai substituir a mensagem do h1 com a InnerText)
element.InnerText = " Eai cara"


* InnetHTML

const element = document.querySelector('h1')
(Permite usar o HTML na mensagem)
element.InnerHTML = " Eai cara <small>Bora jogar</small>"

* Value

const element = document.querySelector('input')

element.value = "Alguma coisa"
(serve para te dar valor e atribuir valor)
(manipula o conteudo mudando o que esta escrito no HTML)


# Manipulando estilos e classes


* Alterando estilos com style

const element = document.querySelector('body')

element.style.bakcgroundColor = "Green"

* ClassList

const element = document.querySelector('body')

element.classList.add('active', 'green')
(o active serio de alguma coisa que esta no HTML o green é novo)
console.log(element.classList)
element.classList.remove('active)
element.classList.toggle('active) <--Interruptor


# Navegando pelos elementos

* parentElement e parentNode

const element = document.querySelector('body')

console.log[body.parentNode](qual é o no pai do body)
console.log[body.parentElement](pode ser de h1,head,title, etc)


* Pegando elementos filhos 

const el = document.querySelector('body')

console.log(el.childNodes)
console.log(el.firstChild)


* Buscando irmãos

const el = document.querySelector('header')
console.log(el.nextElementSibling)


# Criando e adicionando elementos na página

const div = document.createElement('div');
div.innerText = "Greting infidel"

const body = document.querySelector('body')

body.append(div)


* insertBefore

const div = document.createElement('div');
div.innerText = "Greting infidel"

const body = document.querySelector('body')
const scrypt = body.querySelector('script')

body.insertBefore(div, script)


* insertBefore so que vem depois(séria um isertAfter)

const div = document.createElement('div');
div.innerText = "Greting infidel"

const body = document.querySelector('body')
const header = body.querySelector('header')

body.insertBefore(div, header.nextElementSibling)


# Eventos

* Adicionando eventos via HTML

<h1 onclick="">Blog</h1>

* Eventos de teclado

const input = document.querySelector('input')

input.(onkeydown = function() {
    console.log('rodei')
}

* Adicionando eventos via JS

const h1 = document.querySelector('h1')

h1.addEventListener('click', print)

(quando clicar com o mouse vai tirar um print do h1)

functions print() {
    console.log('print')
}

h1.onclick = print
(outra manei de fazer mas da ruim se colocar outra função h1.onclick)

* Argumento event

const input = document.querySelector('input')

input.anclick = function(event) {
    console.log(event.key)
}