const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']

// a indexação (index) começa pelo número 0
console.log(pilotos[0])
console.log(pilotos[3])

// acessar o tamanho do array
console.log(pilotos.length)

// iterável
for (let piloto of pilotos) {
    console.log(piloto)
}

// adicionar elemento
pilotos.push('Alonso')
console.log(pilotos)

// encontrar um elemento
const senna = pilotos.find(piloto => piloto === 'Senna')
console.log(senna)

// Deletar elemento
pilotos.splice(1, 1)

console.log(pilotos)





// Matrix Array dentro de outro Array
const students = [['joseph', 23, 'MG'], ['Briana', 22, 'SP'], ['Priscila', 23, 'PR']]

console.log(students[0][1])


// Stack no codigo
// passo 1: modelando
class Stack {
    constructor() {
        this.data = []
        this.top = -1
}

push(value){
    this.top++
    this.data[this.tod] = value
    return this.data
}

pop() {
    if(this.top < 0) return undefined
    const poppedTop = this.data[this.top]
    delete this.data[this.top]
    this.top--
    return poppedTop
}

peek(){
  return this.top >= 0 ? this.data[this.top] : undefined
}
}

// Passo 2: Utilizando
const Stack = new Stack()

// adicionar dados
Stack.push('learning')
Stack.push('data')
console.log(stack.push('structures'))

console.log(stack.peek())

//remover
stack.pop()
console.log(stack.pop())

console.log(stack.peek())


//Queue
//Passo 1: Modelando
class Queue {
    constructor() {
        this.data = []
    }
    enqueue(item){
        this.data.push(item)
        console.log(`${item} chegou na fila`)
    }
    dequeue() {
        const item = this.data.shift()
        console.log(`${item} saiu da fila`)
    }
}

//passo 2> Utilizando
const fila = new Queue()

fila.enqueue('Maria')
fila.enqueue('Jose')
fila.enqueue('Asriel')
fila.dequeue()
fila.dequeue()
fila.dequeue()