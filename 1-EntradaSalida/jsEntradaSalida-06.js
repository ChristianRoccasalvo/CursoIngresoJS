/*
Roccasalvo Christian Daniel DIV Z
Ejercicio E/S 06
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroIngresado;
	var numeroIngresado2;
	var resultado;

	numeroIngresado = document.getElementById("txtIdNumeroUno").value;
	numeroIngresado = parseInt(numeroIngresado);

	numeroIngresado2 = document.getElementById("txtIdNumeroDos").value;
    numeroIngresado2 = parseInt(numeroIngresado2);
    
    resultado = numeroIngresado + numeroIngresado2;

    
	alert("La suma es" +" "+ resultado);
}

//txtIdNumeroUno
//txtIdNumeroDos

