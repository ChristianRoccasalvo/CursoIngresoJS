/*2.
Roccasalvo Christian Dabiel DIV Z
Ejercicio TP 02
	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoTerreno;
	var anchoTerreno;
	var perimetroTerreno;
	var alambre;
	var cantidadAlambre;

	alambre = 3;

	largoTerreno = document.getElementById("txtIdLargo"). value;
	largoTerreno = parseInt(largoTerreno);

	anchoTerreno = document.getElementById("txtIdAncho"). value;
	anchoTerreno = parseInt(anchoTerreno);

	perimetroTerreno = largoTerreno * 2 + anchoTerreno * 2;

	cantidadAlambre = perimetroTerreno * alambre;

	alert ("La cantidad de alambre necesaria para el terreno por 3 hilos es de" +" "+ cantidadAlambre +" "+ "metros.");

}
function Circulo () 
{
	var radioTerreno;
	var perimetroTerreno;
	var alambre;
	var cantidadAlambre;

	alambre = 3;

	radioTerreno = document.getElementById("txtIdRadio"). value;
	radioTerreno = parseInt(radioTerreno);

	perimetroTerreno = 2 * Math.PI * radioTerreno;

	cantidadAlambre = perimetroTerreno * alambre;

	alert ("La cantidad de alambre para un terreno circular por 3 hilos es de " + cantidadAlambre + " metros.");
}
function Materiales () 
{
	var largoTerreno;
	var anchoTerreno;
	var bolsasCemento;
	var bolsasCal;
    var superficie;
    var cantidadBolsasCemento;
    var cantidadBolsasCal;

    bolsasCemento = 2;
    bolsasCal = 3;

	largoTerreno = document.getElementById("txtIdLargo"). value;
	largoTerreno = parseInt(largoTerreno);

	anchoTerreno = document.getElementById("txtIdAncho"). value;
	anchoTerreno = parseInt(anchoTerreno);

	superficie = largoTerreno * anchoTerreno;

	cantidadBolsasCemento = superficie * bolsasCemento;
	cantidadBolsasCal = superficie * bolsasCal;
    

	alert ("Se necesitan " + cantidadBolsasCemento + " bolsas de cemento" + " y " + cantidadBolsasCal + " bolsas de cal.");
}
//txtIdLargo
//txtIdAncho
//txtIdRadio