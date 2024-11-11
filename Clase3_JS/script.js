var edad =28;
edad=30;
console.log(edad)

let nombre="luis"
nombre="angel";
console.log(nombre);

try{
    let resultado=10/0
    console.log(resultado) 
}catch(error){
console.log("error"+error.message);
}finally{
    console.log("se ejecuta si hay error")
}
console.log("---------------------------------")

// let edadusuario=parseInt(prompt("Ingrese su edad"));
// if (isNaN(edadusuario)){
// console.log("Por favor ingrese un numero valido");
// }else{
//     if(edadusuario>=18){
//         console.log("Eres mayor de edad, puedes ingresar");
//     }else{
//         console.log("Eres menor de edad, no puedes ingresar");
//     }
// }

// let montocompra=parseFloat(prompt("Ingrese el monto"));
// if (isNaN(montocompra)|| montocompra<0){
// console.log("Por favor ingrese el monto");
// }else{
//     descuento=0
//     if(montocompra>100){
//      descuento=montocompra*0.10   
     
//     }else if(montocompra>=50 && montocompra<=100){
//        descuento=montocompra*0.05
//     }else{
//         console.log("No hay descuento");
//     }
//     let=montofinal=montocompra-descuento
//     console.log("Monto Compra: $" +montocompra.toFixed(2));
//     console.log("Descuento: $" + descuento.toFixed(2));
//     console.log("Monto final: $" + montofinal.toFixed(2));
// }


// let cantidadEstudiantes = parseInt(prompt("¿Cúntos estudiantes deseas digitar?"));

// if (isNaN(cantidadEstudiantes) || cantidadEstudiantes <= 0){
//     console.log("Por favor, digite una cantidad válida");
// } else{
//     let calificaciones = [];

//     for (let i=0; i < cantidadEstudiantes; i++){
//         let calificacion = parseFloat(prompt("Digite la calificación del estudiante " + (i + 1 )+ ":"));

//         if (isNaN(calificacion) || calificacion < 0 || calificacion > 100 ){
//             console.log("Por favor, digite una calificación válida entre 0 y 100");
//             i--;
//         }else{
//             calificaciones.push(calificacion);
//         }

//     }

//     let suma = 0;
//     for (let calificacion of calificaciones) {
//         suma += calificacion;
//     }
//     let promedio = suma / cantidadEstudiantes;


//     console.log("El promedio de las calificaciones es: " + promedio.toFixed(2));

//     for (let i = 0; i < cantidadEstudiantes; i++) {
//         let estado = calificaciones[i] >= 60 ? "Aprobado" : "Desaprobado";
//         console.log("Estudiante " + (i + 1) + ": " + estado);
//     }
// }



let estudiantes = [];

function agregarEstudiante() {
    let nombre = prompt("Ingrese el nombre del estudiante:");
    let calificacion = parseFloat(prompt("Ingrese la calificación del estudiante:"));
    
    if (!isNaN(calificacion)) {
        estudiantes.push({ nombre, calificacion });
        console.log(`Estudiante ${nombre} agregado con calificación ${calificacion}.`);
    } else {
        console.log("Calificación no válida, intente de nuevo.");
    }
}

function mostrarEstudiantes() {
    console.log("Lista de estudiantes:");
    estudiantes.forEach((estudiante, index) => {
        console.log(`${index + 1}. ${estudiante.nombre} - Calificación: ${estudiante.calificacion}`);
    });
}

function calcularPromedio() {
    if (estudiantes.length === 0) {
        console.log("No hay estudiantes registrados.");
        return;
    }
    let suma = estudiantes.reduce((acc, estudiante) => acc + estudiante.calificacion, 0);
    let promedio = suma / estudiantes.length;
    console.log(`El promedio de las calificaciones del curso es: ${promedio.toFixed(2)}`);
}

function contarAprobadosDesaprobados() {
    let aprobados = estudiantes.filter(estudiante => estudiante.calificacion >= 60).length;
    let desaprobados = estudiantes.length - aprobados;
    console.log(`Estudiantes aprobados: ${aprobados}`);
    console.log(`Estudiantes desaprobados: ${desaprobados}`);
}

function menu() {
    console.log("\nSeleccione una opción:");
    console.log("1. Agregar un nuevo estudiante");
    console.log("2. Mostrar la lista de estudiantes");
    console.log("3. Calcular el promedio de calificaciones");
    console.log("4. Determinar cantidad de aprobados y desaprobados");
    console.log("5. Salir");
}

let opcion;
do {
    menu();
    opcion = prompt("Ingrese el número de la opción que desea realizar:");
    
    switch (opcion) {
        case '1':
            agregarEstudiante();
            break;
        case '2':
            mostrarEstudiantes();
            break;
        case '3':
            calcularPromedio();
            break;
        case '4':
            contarAprobadosDesaprobados();
            break;
        case '5':
            console.log("Saliendo del programa.");
            break;
        default:
            console.log("Opción no válida, intente de nuevo.");
    }
} while (opcion !== '5');
// EJERCICIO 2

function esPalindromo(texto) {

    let textoLimpio = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
 
    let textoInvertido = textoLimpio.split('').reverse().join('');
 
    return textoLimpio === textoInvertido;
}

 
console.log(esPalindromo("Anita lava la tina")); 
console.log(esPalindromo("A luna ese anula"));  
console.log(esPalindromo(" no es  palíndromo")); 

