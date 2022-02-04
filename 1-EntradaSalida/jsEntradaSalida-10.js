/*
Roccasalvo Christian Daniel DIV Z
Ejercicio E/S 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var ingresoSueldo;
	var resultado;
	var porcentaje;

    porcentaje = 25;
	ingresoSueldo = document.getElementById("txtIdImporte").value;
	ingresoSueldo = parseInt(ingresoSueldo);

    resultado = ingresoSueldo - (ingresoSueldo/100 * porcentaje);
    
    document.getElementById("txtIdResultado").value = resultado;
}
//txtIdImporte
//txtIdResultado
