console.log('Hello World'[10])
console.log('queeeeeeeee'.length)

let str = 'Holiwis'
console.log(str.length)
console.log(str[str.length-1])

let a = 'raa'

console.log(typeof(a))


console.log(11%2)
console.log(5<10)

let name = 'Pratt'
let fullName = 'Pratt Paredes'

let isRaining = true
let temperature = 30
let planet = 'Tierra'

temperature = temperature + 5

console.log(temperature)

const años = 23

let añosluz = años + 5
console.log(añosluz)


/**
 * Convirtiendo temperatura
 * 
 * Formula de celsius a fahrenheit:
 * 
 * F= C x 1.8 + 32
 */

let celsius = 24;
let fahrenheit = celsius * 1.8 + 32;      /* Convierte celsius a fahrenheit */

console.log(fahrenheit)
console.log(celsius + ' celsius convertido a fahrenheit es ' + fahrenheit)  /*print out result */



/* EQUALITY */

let bool = '1' == 1
let bool2 = '1' === 1
let bool3 = '5' === 5
let bool4 = true == 5 > 20


console.log(bool)
console.log(bool2)
console.log(bool3)
console.log(bool4)

let bool5 = '22' !== 22
let bool6 = '6' != 6
let bool7 = '6' !== 6


console.log(bool5)
console.log(bool6)
console.log(bool7)

/**
 * 
 * Conditionals
 * 
 */

let subscribed = true
let loggedIn = true

if (subscribed === true) {
    console.log('show the video')
}
else if (loggedIn === true){
    console.log('tell user to upgrade to PRO')
}
else{
    console.log('tell user to log into account')
}

/**
 * 
 * Ejercicio 2
 * 
 * 
 */

let cash = 32
let price = 40
let difference = cash - price

if (cash > price) {
    console.log(`Pagaste de más, tu vuelto es ${difference}`)
}
else if (cash === price) {
    console.log('Pagaste con el monto exacto, tenga un buen día')
}
else {
    console.log(`No tienes dinero suficiente te hace falta ${difference * -1} dólares`)
}

/**
 * 
 * LOGICAL OPERATORS
 * 
 */

let dinero = 50
let precio = 40
let isStoreOpen = true

if (dinero >= precio && isStoreOpen === true) {
    console.log('Imprime el recibo')
}

/**
 * 
 * truthy and false values
 * 
 */

let val = ""
let val2 = NaN
let val3 = []
let val4 = "a"
let val5 = 0
let val6 = {}

if (val) {
    console.log("truthy value")
}
else {
    console.log ("falsy value")
}

if (val2) {
    console.log("truthy value")
}
else {
    console.log ("falsy value")
}

if (val3) {
    console.log("truthy value")
}
else {
    console.log ("falsy value")
}

if (val4) {
    console.log("truthy value")
}
else {
    console.log ("falsy value")
}

if (val5) {
    console.log("truthy value")
}
else {
    console.log ("falsy value")
}

if (val6) {
    console.log("truthy value")
}
else {
    console.log ("falsy value")
}


/**
 * 
 * terniary operators
 * 
 */

let hot = true