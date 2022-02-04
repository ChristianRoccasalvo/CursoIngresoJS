/*
Roccasalvo Christian Dabiel DIV Z
Ejercicio TP 01
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var ingresePrecio1;
	var ingresePrecio2;
	var ingresePrecio3;
	var suma;

	ingresePrecio1 = document.getElementById("txtIdPrecioUno").value;
    ingresePrecio1 = parseInt(ingresePrecio1);

	ingresePrecio2 = document.getElementById("txtIdPrecioDos").value;
    ingresePrecio2 = parseInt(ingresePrecio2);

	ingresePrecio3 = document.getElementById("txtIdPrecioTres").value;
    ingresePrecio3 = parseInt(ingresePrecio3);

	suma = ingresePrecio1 + ingresePrecio2 + ingresePrecio3;

	alert ("La suma es " + " $ " + suma);
	
}
function Promedio () 
{
    var ingresePrecio1;
	var ingresePrecio2;
	var ingresePrecio3;
	var suma;
	var promedio;

	ingresePrecio1 = document.getElementById("txtIdPrecioUno").value;
    ingresePrecio1 = parseInt(ingresePrecio1);

	ingresePrecio2 = document.getElementById("txtIdPrecioDos").value;
    ingresePrecio2 = parseInt(ingresePrecio2);

	ingresePrecio3 = document.getElementById("txtIdPrecioTres").value;
    ingresePrecio3 = parseInt(ingresePrecio3);

	suma = ingresePrecio1 + ingresePrecio2 + ingresePrecio3;
	promedio = suma / 3;

	alert ("El promedio es " + " $ " + promedio);
	
}
function PrecioFinal () 
{
	var ingresePrecio1;
	var ingresePrecio2;
	var ingresePrecio3;
	var suma;
	var iva;
	var precioFinal;

	iva = 21;

	ingresePrecio1 = document.getElementById("txtIdPrecioUno").value;
    ingresePrecio1 = parseInt(ingresePrecio1);

	ingresePrecio2 = document.getElementById("txtIdPrecioDos").value;
    ingresePrecio2 = parseInt(ingresePrecio2);

	ingresePrecio3 = document.getElementById("txtIdPrecioTres").value;
    ingresePrecio3 = parseInt(ingresePrecio3);

	suma = ingresePrecio1 + ingresePrecio2 + ingresePrecio3;
	precioFinal = suma + (suma/100 * iva);

	alert ("El precio final mas IVA 21% es de " + " $ " + precioFinal);
}
//txtIdPrecioUno
//txtIdPrecioDos
//txtIdPrecioTres