//Programação Imperativa vs Declarativa

//Função que eleva o número ao quadrado


//Imperativo:Faça da seguinte forma
let number = 2

function square() {
    return number * number
}

number = square()

//Declarativa:O que fazer e não como fazer.
const square = n => n * n

//Imutabilidade
//exemplo em JS
const cart = {
    quantity: 2,
    total: 200
}

//bad(ruim)
cart.quantity = 3
//good(bom)
const newCart = {...cart, quantity: 3}

//exemplo em ReactJS
const [amount, setAmount] = useState(0)

//bad(ruim)
amount = 2
//good(bom)
setAmount(2)


