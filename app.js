console.log("Hello World"[10]);
console.log("queeeeeeeee".length);

let str = "Holiwis";
console.log(str.length);
console.log(str[str.length - 1]);

let a = "raa";

console.log(typeof a);

console.log(11 % 2);
console.log(5 < 10);

let name = "Pratt";
let fullName = "Pratt Paredes";

let isRaining = true;
let temperature = 30;
let planet = "Tierra";

temperature = temperature + 5;

console.log(temperature);

const años = 23;

let añosluz = años + 5;
console.log(añosluz);

/**
 * Convirtiendo temperatura
 *
 * Formula de celsius a fahrenheit:
 *
 * F= C x 1.8 + 32
 */

let celsius = 24;
let fahrenheit = celsius * 1.8 + 32; /* Convierte celsius a fahrenheit */

console.log(fahrenheit);
console.log(
  celsius + " celsius convertido a fahrenheit es " + fahrenheit
); /*print out result */

/* EQUALITY */

let bool = "1" == 1;
let bool2 = "1" === 1;
let bool3 = "5" === 5;
let bool4 = true == 5 > 20;

console.log(bool);
console.log(bool2);
console.log(bool3);
console.log(bool4);

let bool5 = "22" !== 22;
let bool6 = "6" != 6;
let bool7 = "6" !== 6;

console.log(bool5);
console.log(bool6);
console.log(bool7);

/**
 *
 * Conditionals
 *
 */

let subscribed = true;
let loggedIn = true;

if (subscribed === true) {
  console.log("show the video");
} else if (loggedIn === true) {
  console.log("tell user to upgrade to PRO");
} else {
  console.log("tell user to log into account");
}

/**
 *
 * Ejercicio 2
 *
 *
 */

let cash = 32;
let price = 40;
let difference = cash - price;

if (cash > price) {
  console.log(`Pagaste de más, tu vuelto es ${difference}`);
} else if (cash === price) {
  console.log("Pagaste con el monto exacto, tenga un buen día");
} else {
  console.log(
    `No tienes dinero suficiente te hace falta ${difference * -1} dólares`
  );
}

/**
 *
 * LOGICAL OPERATORS
 *
 */

let dinero = 50;
let precio = 40;
let isStoreOpen = true;

if (dinero >= precio && isStoreOpen === true) {
  console.log("Imprime el recibo");
}

/**
 *
 * truthy and false values
 *
 */

let val = "";
let val2 = NaN;
let val3 = [];
let val4 = "a";
let val5 = 0;
let val6 = {};

if (val) {
  console.log("truthy value");
} else {
  console.log("falsy value");
}

if (val2) {
  console.log("truthy value");
} else {
  console.log("falsy value");
}

if (val3) {
  console.log("truthy value");
} else {
  console.log("falsy value");
}

if (val4) {
  console.log("truthy value");
} else {
  console.log("falsy value");
}

if (val5) {
  console.log("truthy value");
} else {
  console.log("falsy value");
}

if (val6) {
  console.log("truthy value");
} else {
  console.log("falsy value");
}

/**
 *
 * terniary operators
 *
 */

let hot = false;

hot ? console.log(`it's hot`) : console.log(`it's cold`);

let suscrito = true;
let logeado = false;

let statusperson = suscrito && logeado ? "mostrar video" : "esconder video";
console.log(statusperson);

/**
 *
 * ejercicio if else
 *
 *
 */

let plata = 45;
let presio = 40;
let tiendaAbierta = true;

// 'Dar recibo' : 'No dar recibo'

plata >= presio && tiendaAbierta
  ? console.log("Dar recibo")
  : console.log("No dar recibo");

//Para no repetir doble console.log, se puede asignar todo lo de arriba a una variable y eso entregar
let estado =
  plata >= presio && tiendaAbierta ? "Dar recibo2" : "No dar recibo2";
console.log(estado);

/**
 *
 * WORST WAY TO CODE IS BY REPEATING LINES OF CODE
 *
 */

let count = 1;
console.log(count);
count = count + 1;
console.log(count);
count = count + 1;
console.log(count);
count = count + 1;
console.log(count);

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
  console.log(i + 1);
}

console.log(`<-------------------EJERCICIO DE LOOP-------------------->`);

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
    console.log(`${i} -> Frontend Simplified`);
  } else if (i % 3 == 0) {
    console.log(`${i} -> Frontend`);
  } else if (i % 5 == 0) {
    console.log(`${i} -> Simplified`);
  } else {
    console.log(`${i} -> ${i}`);
  }
}

console.log(
  "<------------------------Ejercicio LOOP 2------------------------>"
);
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

const string1 = "Frontend Simplified";

for (let i = 0; i < string1.length; ++i) {
  console.log(string1[i]);
}

console.log("<------------FUNCIONES-------------->");

// FUNCTIONS
//DRY -> Don't Repeat Yourself
console.log("Welcome to FES, David");
console.log("Welcome to FES, Zen");
console.log("Welcome to FES, Mitri");

//Function syntax definition
function welcomePersonToFES(primerNombre, segundoNombre) {
  console.log(
    `Welcome to Frontend Simplified, ${primerNombre} ${segundoNombre}`
  );
}

//Calling the function
welcomePersonToFES("Miauri", "Rebirth");
welcomePersonToFES("Thomas", "Casapia");
welcomePersonToFES("Combo", "Breaker");

console.log("<-----RETURN---->");
// RETURN

function fn() {
  return "my return";
  console.log("mi función");
}

console.log(fn());

function sumaDosNumeros(num1, num2) {
  // p = parameter
  return num1 / num2;
}

console.log(sumaDosNumeros(20, 8)); // a = argumento

console.log("<------------------EJERCICIO 1 FUNCIONES------------------->");

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
  return celsius * 1.8 + 32;
}

console.log(`El valor en fahrenheit es ${convertirCaF(0)}`);
console.log(`El valor en fahrenheit es ${convertirCaF(10)}`);
console.log(`El valor en fahrenheit es ${convertirCaF(30)}`);

console.log("<---------------arrow function------------------->");

// OTRA FORMA DE DEFINIR UNA FUNCION ES CON ARROW

const dividirDosNums = (num1, num2) => {
  return num1 / num2;
};

console.log(dividirDosNums(10, 2));
console.log(dividirDosNums(30, 4));
console.log(dividirDosNums(50, 7));

console.log("<---------------------ARRAYS------------------>");
// ARRAYS

let item1 = 20;
let item2 = 30;
let item3 = 40;
let item4 = 50;
let item5 = 100;

// con array se puede conseguir lo mismo pero en una sola variable

let arr = [20, 30, 40, 50, 100];

// Primer elemento de un array
console.log(arr[0]);

//ultimo elemento de un array
console.log(arr[arr.length - 1]);

//How to add elements to a array
arr.push(200);

console.log(arr[arr.length - 1]);

console.log(arr);

console.log("<--------------------------FILTERS-------------------------->");
//FILTER and CALLBACK

let arr2 = [5, 10, 15, 20, 25, 30];

let newArr = arr2.filter((element) => {
  console.log(element);
  if (element < 20) {
    return true;
  }
});

console.log(newArr);

//SE PUEDE HACER TODO LO DE ARRIBA EN UNA SOLA LINEA

console.log(
  "<------------------------------FILTERS IN 1 LINE------------------------------>"
);

let arr3 = [5, 10, 15, 20, 25, 30];

let newArr2 = arr3.filter((element) => element < 20);

console.log(newArr2);

/**
 *
 * EJERCICIO ARRAYS
 *
 * Filtrar todos los elementos 'FAIL' en un array
 *
 * @example
 * ['A+', 'A', 'FAIL'] => ['A+', 'A']
 * ['FAIL', 'FAIL', 'B'] => ['B']
 * ['FAIL'] => []
 */

let grades1 = ["A+", "A", "FAIL"];
let grades2 = ["FAIL", "FAIL", "B"];
let grades3 = ["FAIL"];

let filteredGrades1 = grades1.filter((element) => element !== "FAIL");
console.log(filteredGrades1);

let filteredGrades2 = grades2.filter((element) => element !== "FAIL");
console.log(filteredGrades2);

let filteredGrades3 = grades3.filter((element) => element !== "FAIL");
console.log(filteredGrades3);

// FORMA LARGA

let notasfiltradas1 = grades1.filter((element) => {
  if (element !== "FAIL") {
    return true;
  }
});

console.log(notasfiltradas1);

console.log("<----ACCEDER A TODOS LOS ELEMENTOS EN UN ARRAY CON UN FOR--->");
// FOR in an array

arraynueva = ["A+", "B", 0, "FAIL", 15, "C-"];

for (i = 0; i < arraynueva.length; ++i) {
  console.log(arraynueva[i]);
}

console.log("<---------------EJERCICIO ARRAY 2---------------->");
/**
 *
 * EJERCICIO ARRAY PERO SIN USAR EL FILTER
 *
 * *
 */

let notas1 = ["A+", "A", "FAIL"];
let notas2 = ["FAIL", "FAIL", "B"];
let notas3 = ["FAIL"];

let nuevoNotas1 = [];

for (i = 0; i < notas1.length; ++i) {
  if (notas1[i] !== "FAIL") nuevoNotas1.push(notas1[i]);
}

console.log(nuevoNotas1);

let nuevoNotas2 = [];

for (i = 0; i < notas2.length; ++i) {
  if (notas2[i] !== "FAIL") nuevoNotas2.push(notas2[i]);
}

console.log(nuevoNotas2);

let nuevoNotas3 = [];

for (i = 0; i < notas3.length; ++i) {
  if (notas3[i] !== "FAIL") nuevoNotas3.push(notas3[i]);
}

console.log(nuevoNotas3);

console.log(
  "<--------------------------------------NUEVO ARRAY METHOD--------------------------------->"
);
//NUEVO METODO DE ARRAY

let arrayX = [1, 4, 9, 16];

let nuevoarrayX = arrayX.map((element) => {
  console.log(element);
  return undefined;
});

console.log(nuevoarrayX);

//MANERA CORTA

let newarrayX = arrayX.map((element) => "dog"); //Transforma todos los elementos del array antiguo a dog

console.log(newarrayX);

console.log("<---------------------EJERCICIO----------------------->");
/**
 * EJERCICIO
 * Transformar cada elemento de un array de dolares a centavos
 *
 * @examples
 * [1, 5, 10, 3] => [100, 500, 1000, 300]
 * [0, 10, 20] => [0, 1000, 2000]
 */

let dolares1 = [1, 5, 10, 3];
let dolares2 = [0, 10, 20];

let centavos1 = dolares1.map((element) => {
  return element * 100;
});

console.log(centavos1);

let centavos2 = dolares2.map((element) => {
  return element * 100;
});

console.log(centavos2);

//Manera corta

let cents1 = dolares1.map((element) => element * 100);

console.log(cents1);

let cents2 = dolares2.map((element) => element * 100);

console.log(cents2);

//Ahora sin usar el MAP method
centimos1 = [];
centimos2 = [];

for (i = 0; i < dolares1.length; ++i) {
  centimos1.push(dolares1[i] * 100);
}

console.log(centimos1);

for (i = 0; i < dolares2.length; ++i) {
  centimos2.push(dolares2[i] * 100);
}

console.log(centimos2);

console.log(
  "<--------------------------------OBJECTS----------------------------------->"
);

//OBJETOS PERMITEN GUARDAN VARIAS PROPIEDADES EN UNA VARIABLE

let userFirstName = "Pratt";
let userLastName = "Paredes";
let userDiscordID = "Pratt Paredes#0001";
let userSubscriptionStatus = "VIP";

//En vez de todo lo de arriba se puede hacer lo de abajo como "let object = {}"
let users = [
  {
    username: "Pratt",
    email: "pratt.paredes@gmail.com",
    password: "pratt123",
    subscription: "VIP",
    discordID: "Pratt Paredes#0001",
    lessonsCompleted: [0, 1],
  },
  {
    username: "Mitri",
    email: "mitri@gmail.com",
    password: "mitri123",
    subscription: "VIP",
    discordID: "Mitri#0001",
    lessonsCompleted: [0, 1, 2, 3],
  },
  {
    username: "Zed",
    email: "zed@gmail.com",
    password: "zed123",
    subscription: "VIP",
    discordID: "Zed#0001",
    lessonsCompleted: [0, 1, 2, 3, 4, 5],
  },
];

//para acceder a eso dentro del objeto usamos

console.log(users[0]);

console.log(users[1].lessonsCompleted.map((element) => element * 2));

console.log(
  "<------------------------EJERCICIO LOGIN--------------------------->"
);

//Creando una funcion de log in

function login(email, password) {
  for (let i = 0; i < users.length; ++i) {
    if (users[i].email === email) {
      console.log(users[i]);
      if (users[i].password === password) {
        console.log("Iniciaste sesión");
      } else {
        console.log("Contraseña incorrecta");
      }
      return;
    }
  }
  console.log("Correo electrónico no registrado");
}

login("pratt.paredes@gmail.com", "pratt123");

console.log(
  "<------------------------EJERCICIO OBJECTS--------------------------->"
);
/**
 * Crea una función de registro que acepte:
 * username
 * email
 * password
 * subscriptionStatus
 * discordID
 * lessonscompleted
 *
 * Dentro de la función de registro:
 * 1. Crea un user object
 * 2. Push this user object onto the 'users' array
 */

usuarios = [];

console.log(usuarios);

function Registro(
  username,
  email,
  password,
  subscriptionStatus,
  discordID,
  lessonscompleted
) {
  let user = {
    nombreUsuario: username,
    correo: email,
    contraseña: password,
    estadoSuscripción: subscriptionStatus,
    IDdiscord: discordID,
    leccionesCompletas: lessonscompleted,
  };
  usuarios.push(user);
  return;
}

Registro(
  "prattcito123",
  "prattcito@hotmail.com",
  "pratt123",
  "VIP",
  "Pratt#0001",
  [0, 1, 2, 3]
);

console.log(usuarios);

Registro(
  "brayan123",
  "brayan@hotmail.com",
  "brayan123",
  "VIP",
  "Brayan#0001",
  [0, 1]
);

console.log(usuarios[0]);
console.log(usuarios[1]);

Registro(
  "zed99",
  "zed99n@hotmail.com",
  "zed12399",
  "VIP",
  "Zed#0001",
  [0, 1, 2, 3, 5, 8]
);

console.log(usuarios);
console.log(usuarios[2].nombreUsuario);

// EL CODIGO DE ARRIBA NO ESTA BIEN SE VE MAL, EN VEZ DE PASAR VALORES POR VALORES VAMOS
// A PASARLO TODO LOS ARGUMENTOS (a la hora de callear la funcion) A UN SOLO OBJETO TRANSFORMANDOLO ASI


function Registro2 (user) {
    usuarios.push(user)
}


Registro2({
    nombreUsuario: "Warrior",
    correo: "warrior@hotmail.com",
    contraseña: "war666",
    estadoSuscripción: "VIP",
    IDdiscord: "Warrior#0001",
    leccionesCompletas: [0, 1, 4, 7]
});

console.log(usuarios)

Registro2({
    nombreUsuario: "Miauri",
    correo: "miauri@hotmail.com",
    contraseña: "miauri123",
    estadoSuscripción: "FREE",
    IDdiscord: "Miauri#0001",
    leccionesCompletas: [0, 1, 4, 8, 10, 12]
})

console.log(usuarios[usuarios.length - 1].correo)

console.log('<-------------------------------DOM-------------------------------->')
// DOM
/**La primera forma de acceder a un elemento */
console.log(document.querySelector('#title'))
console.log(document.querySelector('.texto1'))


// Segunda forma de acceder a un elemento
console.log(document.getElementById('title'))

// Cambiar HTML
document.querySelector('.texto1').innerHTML += ' Texto agregado'

// CAmbiar CSS
document.querySelector('#title').style.color = 'black'
document.querySelector('.texto1').style.fontSize = '16px'

//Función para el botón
function cambiarTituloARojo() {
    document.querySelector('#title').style.color = 'red'
}

//Funcionar para alternar entre rojo y negro

function cambiarColor() {
    if (document.querySelector('#title').style.color === 'red') {
        document.querySelector('#title').style.color = 'black'
    }
    else if (document.querySelector('#title').style.color === 'black') {
        document.querySelector('#title').style.color = 'red'
    }
}

function cambiarfondo() {
    document.querySelector('body').style.backgroundColor = 'yellow'
}


function ModoOscuro() {
    document.querySelector('body').classList.toggle('dark-theme')
}