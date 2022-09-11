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

let hot = false

hot ? console.log(`it's hot`) : console.log(`it's cold`)

let suscrito = true
let logeado = false

let statusperson = suscrito && logeado ? 'mostrar video' : 'esconder video'
console.log(statusperson)

/**
 * 
 * ejercicio if else
 * 
 * 
 */

let plata = 45
let presio = 40
let tiendaAbierta = true

// 'Dar recibo' : 'No dar recibo'

plata >= presio && tiendaAbierta ? console.log('Dar recibo') : console.log('No dar recibo')

//Para no repetir doble console.log, se puede asignar todo lo de arriba a una variable y eso entregar
let estado = plata >= presio && tiendaAbierta ? 'Dar recibo2' : 'No dar recibo2'
console.log(estado)


/**
 * 
 * WORST WAY TO CODE IS BY REPEATING LINES OF CODE
 * 
 */

let count = 1;
console.log(count)
count = count + 1;
console.log(count)
count = count + 1;
console.log(count)
count = count + 1;
console.log(count)

// DRY = DON'T REPEAT YOURSELF.

/**
 * 
 * LOOPS (Nadie usa WHILE todos usan FOR)
 * 
 */

//  let contador = 1;

//  while (contador <= 100) {
//     console.log(contador)
//     contador = contador + 1
//  }  

for (let i = 0; i < 3; i = i + 1) {
    console.log(i+1);
}                                           


console.log(`<-------------------EJERCICIO DE LOOP-------------------->`)


/** EJERCICIO DE LOOP FOR, que haga loop de 1 a 20
 * Si el numero se puede dividir entre 3, que imprima "Frontend"
 * Si el numero es divisible entre 5, que imprima "Simplified"
 * Si el numero es divisible entre 3 y 5, que imprima "Frontend Simplified"
 * Si el numero no es divisible entre ninguno, que imprima el número
 * 
 * @example
 * 1 -> 1
 * 2 -> 2
 * 3 -> Frontend
 * 4 -> 4
 * 5 -> Simplified
 * ...
 * 15 -> "Frontend Simplified"
 * ...
 * 20 -> "Simplified"
  */

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} -> Frontend Simplified`)
    } 
    else if (i % 3 == 0) {
        console.log(`${i} -> Frontend`)
    }
    else if (i % 5 == 0) {
        console.log(`${i} -> Simplified`)
    }
    else {
        console.log(`${i} -> ${i}`)
    }
}



console.log('<------------------------Ejercicio LOOP 2------------------------>')
/**
 * 
 * Ejercicio 2 FOR
 * 
 * Imprime cada letra del siguiente string:
 * "Frontend Simplified"
 * 
 * @example
 * 'F'
 * 'r'
 * 'o'
 * 'n'
 * 't'
 * ...
 * 'e'
 * 'd'
 * 
 */

const string1 = 'Frontend Simplified'

for (let i = 0; i < string1.length; ++i) {
    console.log(string1[i])
}



console.log('<------------FUNCIONES-------------->')

// FUNCTIONS
//DRY -> Don't Repeat Yourself
console.log('Welcome to FES, David')
console.log('Welcome to FES, Zen')
console.log('Welcome to FES, Mitri')

//Function syntax definition
function welcomePersonToFES(primerNombre, segundoNombre) {
    console.log(`Welcome to Frontend Simplified, ${primerNombre} ${segundoNombre}`)
}

//Calling the function
welcomePersonToFES('Miauri', 'Rebirth');
welcomePersonToFES('Thomas', 'Casapia');
welcomePersonToFES('Combo', 'Breaker');



console.log('<-----RETURN---->')
// RETURN

function fn() {
    return 'my return'
    console.log('mi función')
}

console.log(fn())


function sumaDosNumeros (num1, num2) { // p = parameter
    return num1 / num2
}

console.log(sumaDosNumeros(20, 8)); // a = argumento


console.log('<------------------EJERCICIO 1 FUNCIONES------------------->')

// EJERCICIO CON FUNCIONES

/** Crea una función que convierta Celsius a Fahrenheit
 * 
 * Celsius a fahrenheit formula
 * F = C * 1.8 + 32
 * 
 * @example
 * convertCelsiusToFahrenheit (0) -> 32
 * convertCelsiusToFahrenheit (10) -> 50
 * convertCelsiusToFahrenheit (30) -> 86
 */

function convertirCaF(celsius) {
    return celsius * 1.8 + 32
}

console.log(`El valor en fahrenheit es ${convertirCaF(0)}`)
console.log(`El valor en fahrenheit es ${convertirCaF(10)}`)
console.log(`El valor en fahrenheit es ${convertirCaF(30)}`)

console.log('<---------------arrow function------------------->')

// OTRA FORMA DE DEFINIR UNA FUNCION ES CON ARROW

const dividirDosNums = (num1, num2) => {
    return num1 / num2
}

console.log(dividirDosNums(10, 2))
console.log(dividirDosNums(30, 4))
console.log(dividirDosNums(50, 7))