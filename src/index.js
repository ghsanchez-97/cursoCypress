// Declaración de variables
let nombre = 'Guy'
let ap='Sánchez'
let edad = 24

console.log(`Hola, mi nombre es ${nombre} ${ap} y tengo ${edad} años`)

// Declaración de variables numéricos
let a = 10
let b = 20
let s = a + b
let r = a - b
let m = a * b
let d = a / b
console.log(`La suma de ${a} + ${b} es ${s}`)
console.log(`La resta de ${a} - ${b} es ${r}`)
console.log(`La multiplicación de ${a} * ${b} es ${m}`)
console.log(`La división de ${a} / ${b} es ${d}`)

// Verificación de tipo de dato
// let nomApe=`${nom} ${ape}`
// console.log(`El nombre completo es ${nomApe}`)
let nom='Guy'
typeof nom
let ape='Sánchez'
typeof ape
let ed=24
typeof ed

//  Declaración de objeto
let obj1 = { nombre: 'Guy', apellido: 'Sánchez', edad: 24 }
typeof obj1

// Mostrar el console de un objeto
let obj2 = { nombre: 'Guy', apellido: 'Sánchez', edad: 24 }
console.log(`Tu nombre es: ${obj2.nombre} ${obj2.apellido} y tienes ${obj2.edad} años`)
//  Mostrar suma con objetos
let datos ={a:10,b:20,c:30}
let suma=datos.a+datos.b+datos.c
console.log(`La suma de ${datos.a} + ${datos.b} + ${datos.c} es ${suma}`)

// Declaración de prompt
let a1 = prompt('Ingresa un numero')
let b1 = prompt('Ingresa otro numero')
let suma1 = parseInt(a1) + parseInt(b1)
alert(`La suma de ${a1} + ${b1} es ${suma1}`)

// Declaración de partseInt y parseFloat
let a2 = prompt('Ingresa un numero')
let b2 = prompt('Ingresa otro numero')
let suma2 = parseFloat(a2) + parseFloat(b2)
alert(`La suma de ${a2} + ${b2} es ${suma2}`)

//  Declaración de funciones basicas
function saludar(){
    alert('Bienvenido a ')
    alert('El mini curso de JavaScript')
}
saludar()
function pedirA(){
    let a = prompt('Ingresa un numero')
    let b = prompt('Ingresa otro numero')
    let suma = parseInt(a) + parseInt(b)
    alert(`La suma de ${a} + ${b} es ${suma}`)
}
pedirA()

// Declaración de funciones con parametros
function Suma(a,b){
    console.log('Entrando a la funcion de suma:')
    let suma = a + b
    console.log(`La suma de ${a} + ${b} es ${suma}`)
}
Suma(10,20)

// Declaración de funciones con retorno
function Suma2(a,b){
    console.log('Entrando a la funcion de suma:')
    let suma = a + b
    return suma
}
let suma3 = Suma2(10,20)
console.log(`La suma es ${suma3}`)

// Declaración de arrays
let frutas=['Manzana', 'Pera', 'Sandía', 'Zanahoria']
console.log(frutas[0])
console.log(frutas[3])

// Arrays con medición
let frutas2=['Manzana', 'Pera', 'Sandía', 'Zanahoria']
console.log(`El número de elementos es ${frutas2.length}`)
console.log(`Mostrar un elemento y es ${frutas2[2]}`)

let dato={nom:'Guy',ape:'Sánchez',am:'Hernandez'}
console.log(dato)
console.log(dato.nom)

// Obtener el objeto con forEach
let frutas3=['Manzana', 'Pera', 'Sandía', 'Zanahoria']
frutas3.forEach(function(elemento,indice,array){
    console.log(`El elemento es ${elemento}`)
    console.log(`El array es ${array}`)
    console.log(`El indice es ${indice}`)
})