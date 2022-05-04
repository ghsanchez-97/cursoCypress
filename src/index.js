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
    console.log(indice, elemento)
})

// Agregar un elemento al final del array
let frutas4=['Manzana', 'Pera', 'Sandía', 'Zanahoria']
let nuevo = frutas4.push('Naranja')
let nuevo2 = frutas4.push('Durazno')
frutas4.forEach(function(elemento, indice){
    console.log(indice, elemento)
})

//Eliminar el ultimo elemento del array
let frutas5=['Manzana', 'Pera', 'Sandía', 'Zanahoria']
let nuevo3 = frutas5.pop()
console.log(frutas5)

//  Agregar un elemento al inicio del array
let frutas6=['Manzana', 'Pera', 'Sandía', 'Zanahoria']
let nuevo4 = frutas6.unshift('Naranja')
console.log(frutas6)

// Eliminar el primer elemento del array
let frutas7=['Manzana', 'Pera', 'Sandía', 'Zanahoria']
let nuevo5 = frutas7.shift()
console.log(frutas7)

// Encontrar un elemento en una posicion 
let axios = ['Carro', 'Moto', 'Bicicleta', 'Avión']
let busqueda = axios.indexOf('Avión')
console.log(busqueda)

// Encontrar un elemento en una posicion
let axios2 = ['Carro', 'Moto', 'Bicicleta', 'Avión']
let busqueda2 = axios2.indexOf('Avión')
let eliminarPos=axios2.splice(busqueda2,1)
console.log(axios2)

// Copiar un array a otro
let axios3 = ['Carro', 'Moto', 'Bicicleta', 'Avión']
let copia = axios3.slice()
console.log('Original: ' ,axios3)
console.log('La copia',copia)

// CONDICIONALES
let A = 10
if(A == 10){
    console.log('El valor de a es igual a 10')
}else{
    console.log('El valor de a es diferente a 10')
}

//  Recorre en una funcion
let edadd = 50

const validAge = (e) => {
   if( e <= 0 || e >= 100){
       console.log('Fuera de rango')
   }
   else if(e > 0 && e <= 10){
       console.log('Eres un niño')
   }
    else if(e > 10 && e <= 17){
        console.log('Eres un adolescente')
    }
    else if ( e > 17 && e <= 30){
        console.log('Eres un joven')
    }
    else{
        console.log('Eres un adulto')
    }
}
validAge(edadd)

// Trabajando con Switch
let futra = 'Motor'
const costoFrutas = (fruta) => {
    switch(fruta){
        case 'Manzana':
            console.log('El costo de la manzana es $2.00')
            break
        case 'Pera':
            console.log('El costo de la pera es $1.50')
            break
        case 'Sandía':
            console.log('El costo de la sandía es $3.00')
            break
        case 'Zanahoria':
            console.log('El costo de la zanahoria es $1.00')
            break
        default:
            console.log(`Escribio ${fruta} y no existe en la lista`)
        break
    }
}

costoFrutas(futra)

// Ciclos con for 
/* 
    La buenas practicas de programación es que no se repita el código. 
    Es buena practica iniciarlizar una variable en cero y luego ir incrementando o cambiando el valor de la variable.
*/
let x = 0
for(x=1; x <= 20; x++){
    console.log(`El valor de x es ${x}`)
} 
// Realizar sumatoria 
let aa = 0
let bb = 0
let cc = 0
// let xx = 0
// let num = parseInt(prompt('Ingrese un número que desea repetir'))
let num = 5

for(xx=1; xx <= num; xx++){
    let a = 2
    let b = 3
    c = a + b
    console.log(`El valor de c es ${c}`)
}

// Table de multiplicar
// let numero = parseInt(prompt('Ingrese un número'))
let numero = 5
let range = 20
let xx = 0
for(xx = 1; xx <= range; xx++){
    let resultado = numero * xx
    console.log(`${numero} x ${xx} = ${resultado}`)
}

// Arreglos con for
let arreglo = [1,2,3,4,5,6,7,8,9,10]
let x1 = 0
for(x1 = 0; x1 < arreglo.length; x1++){
    console.log(`El valor de x1 es ${arreglo[x1]}`)
}

// Arreglos con for in
let arreglo2 = {a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8, i:9, j:10, nom: 'Guy'}
for(let x2 in arreglo2){
    console.log(`El ciclo for IN ${x2}: ${arreglo2[x2]}`)
}

// arreglos con for Each
let arreglo3 = [1,2,3,4,5,6,7,8,9,10]
arreglo3.forEach(function(elemento, indice, array){
    console.log(`El valor de x1 es ${elemento} y el indice es ${indice}, ${array}`)
})

//  Try Catch
const sumar = () => {
    return 10 + 10
}
console.log('Inicio')
try{
    sumar()
}catch(error){
    console.log('Error', error)
}
console.log('Fin')