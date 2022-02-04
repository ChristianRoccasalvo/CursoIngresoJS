/*3.
Roccasalvo Christian Dabiel DIV Z
Ejercicio TP 03
	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var farenheit;
	var pasaje;

	farenheit = document.getElementById("txtIdTemperatura").value;
	farenheit = parseInt(farenheit);

	pasaje = ((farenheit - 32) * 5/9);

    alert( farenheit + " grados Farenheit son " + pasaje + " grados Centigrados.");
}

function CentigradosFahrenheit () 
{
	var centigrados;
	var pasaje;

	centigrados = document.getElementById("txtIdTemperatura").value;
	centigrados = parseInt(centigrados);

	pasaje = ((centigrados * 9/5) +32);

    alert( centigrados + " grados Centigrados son " + pasaje + " grados Farenheit.");
}
//txtIdTemperatura