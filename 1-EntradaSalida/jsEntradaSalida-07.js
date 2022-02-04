/*
Roccasalvo Christian Daniel DIV Z
Ejercicio E/S 07
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
{
	var numeroIngresado;
	var numeroIngresado2;
	var resultado;

	numeroIngresado = document.getElementById("txtIdNumeroUno").value;
	numeroIngresado = parseInt(numeroIngresado);

	numeroIngresado2 = document.getElementById("txtIdNumeroDos").value;
    numeroIngresado2 = parseInt(numeroIngresado2);
    
    resultado = numeroIngresado - numeroIngresado2;
    
	alert("La resta es" +" "+ resultado);
}

function multiplicar()
{ 
	var numeroIngresado;
	var numeroIngresado2;
	var resultado;

	numeroIngresado = document.getElementById("txtIdNumeroUno").value;
	numeroIngresado = parseInt(numeroIngresado);

	numeroIngresado2 = document.getElementById("txtIdNumeroDos").value;
    numeroIngresado2 = parseInt(numeroIngresado2);
    
    resultado = numeroIngresado * numeroIngresado2;
    
	alert("La resultado es" +" "+ resultado);	
}

function dividir()
{
	var numeroIngresado;
	var numeroIngresado2;
	var resultado;

	numeroIngresado = document.getElementById("txtIdNumeroUno").value;
	numeroIngresado = parseInt(numeroIngresado);

	numeroIngresado2 = document.getElementById("txtIdNumeroDos").value;
    numeroIngresado2 = parseInt(numeroIngresado2);
    
    resultado = numeroIngresado / numeroIngresado2;
    
	alert("La resultado es" +" "+ resultado);
}

//txtIdNumeroUno
//txtIdNumeroDos

