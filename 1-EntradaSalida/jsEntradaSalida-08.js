/*
Roccasalvo Christian Daniel DIV Z
Ejercicio E/S 08
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var ingresoDividendo;
	var ingresoDivisor;
	var resultado;
	var resto;

	ingresoDividendo = document.getElementById("txtIdNumeroDividendo").value;
	ingresoDividendo = parseInt(ingresoDividendo);

	ingresoDivisor = document.getElementById("txtIdNumeroDivisor").value;
    ingresoDivisor = parseInt(ingresoDivisor);
    
    resultado = ingresoDividendo / ingresoDivisor;
    resto = ingresoDividendo % ingresoDivisor;
    
	alert("El resto es" +" "+ resto);
}
//txtIdNumeroDividendo
//txtIdNumeroDivisor
