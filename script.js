// 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
alert("un mensaje");

//2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
document.write("Hello World");

//3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
document.write("El resultado es " + (3 + 5));

//4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
let nombreUsuario = prompt("hola nombre de usuario ");
console.log("hola coder ")

//5.-Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
let numero1 = 6;
let numero2 = 10;
let suma;

suma = numero1 + numero2
console.log(suma)
console.log("El resultado de la suma es" + suma);

//6.-Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
var num1 = prompt ("Ingresa el primer número");
var num2 = prompt ("Ingresa el segundo número");

if ((num1 > num2)) {

    console.log(num1 + " es el número más grande");
} else {
    console.log(num2+ "es el número más grande");
}

//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
var num1,num2,num3,mayor,t;
num1 = parseInt(prompt("primer número"));
num2 = parseInt(prompt("segundo número"));
num3 = parseInt(prompt("tercer número"));

if (num1 > num2) {
    t = num1;

} else{
    t = num2;
}

if (t>num3){
    mayor=t;

} else{
   mayor=num3;
}

document.write("El " + mayor + " es el número más grande");

//8.-Escribe un programa que pida un número y diga si es divisible por 2
var numero3 = prompt("Ingresa un número");

if (numero3 % 2 === 0) {
    document.write("El " + numero + " es divisible por 2.");
} else {
    document.write("El " + numero + " no es divisible por 2.");
}

//9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
let str = "buenas tardes gente!";

for (let i = 0; i < str.length; i++) {
    let vocal = str.charAt(i);

    if (vocal === "a" || vocal === "e" || vocal === "i" || vocal === "o" || vocal === "u") {
        console.log(vocal);
    }
}
//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
var num1 = prompt("Escribe un número");

if (n1 % 2 === 0 || n1 % 3 === 0 || n1 % 5 === 0 || n1 % 7 === 0) {
    document.write("Es divisible por 2, 3, 5 o 7");
} else {
    document.write("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}

//Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
var num1 = prompt("Escribe un número");
var num2 = prompt("Escribe otro número");

if (numero1 % 2 === 0 || numero1 % 3 === 0 || numero1 % 5 === 0 || numero1 % 7 === 0) {
    if (numero1 % 2 === 0) {
        document.write("El " + numero1 + " es divisible por 2. ");
    }
    if (numero1 % 3 === 0) {
        document.write("El " + numero1 + " es divisible por 3. ");
    }
    if (numero1 % 5 === 0) {
        document.write("El " + numero1 + " es divisible por 5. ");
    }
    if (numero1 % 7 === 0) {
        document.write("El " + numero1 + " es divisible por 7. ");
    }
} else {
    document.write("El " + numero1 + " no es divisible ni por 2, ni por 3, ni por 5, ni por 7. ");
}
