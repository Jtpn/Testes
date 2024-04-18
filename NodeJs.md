# NPM

Node Package Manager

__Glossary: Dependencies, packages, Modules__

- [ ] Verificar se temos o npm instalado
- [ ] Criar nosso próprio pacote
- [ ] O que é o arquivo package.json
- [ ] Utilizar módulos de terceiros
- [ ] O que é o diretório node_modules
- [ ] O que é o arquivo package-lock.json
- [ ] Criar scripts para roda com o npm

# Timers

Uma maneira de trabablharmos com o tempo dentro do NodeJS

## o que vamos aprender

[] setTimeout
[] clearTimeout
[] setInterval
[] clearInterval

## Iremos praticar um pouco mais de 
[] Assicronismo
[] Callback


.setTimeout

const timeout = 3000 <-- são milisegundos que dão 3 segundos
const finished = () -> console.log('done!')

setTimeout(finished, timeout)
console.log('mostrar')


.clearTimeout

Ctrl c  Ctrl v

let timer = setTimeout(finished, timeout) agora ele esta guardado no timer 

clearTimeout(timer) com isso sera cancelado o setTimeout


.setInterval

const timeOut = 1000
const checking = () => console.log('checking!')

setInterval(checking, Timeout)


.clearInterval

Ctrl c  Ctrl v

let interval = setInterval(checking, Timeout)

setTimeout( () => clearInterval(interval), 3000)



# Event Module

É um mecanismo para
*[] Disparar eventos
*[] Ouvir eventos
*[] Fazer alguma ação quando ouvir o evento.
*[] É a base para muito outros módulos como: http, stram, file system, etc...

## O que vamos aprender?

*[] Utilizar os eventos
*[] Disparar eventos
*[] Outvir eventos
*[] Excecutar ações para determinado eventos
*[] Enterder como ele é a base para os outros módulos


.Event Emitter

const {EventEmitter} = require ('events')

const ev = new EventEmitter()

console.log(ev)


.Emitindo eventos

ev.emit('saySomething')
ev.emit('saySomething')


.Ouvindo e executando ações para eventos
const{EventEmitter} = require('events')
const ev = new EventEmitter()

ev.on('saySomething', (message) =>{
    console.log('Eu ouvi você: ', message)
})

ev.emit('saySomething', "João")
ev.emit('saySomething', "Richarson")


.Ouvindo eventos uma única vez

ev.once(siginifica que so vai disparar 1 vez)
(ou seja so vai ler o 1 o João e o Richardson não)


.Herdando do EventEmitter

const {inherits} = require('util')
const {EventEmitter} = require('events')

function Character(name) {
    this.name = name
}

inherits(Characet, EventEmitter)

const chapolin = new Character('chapolin');
chapolin.on('help',() => console.log(`Eu! o ${chapolin.name} colocado!`))

console.log('Oh! E agora, quem poderá me defender?')
chapolin.emit('help')