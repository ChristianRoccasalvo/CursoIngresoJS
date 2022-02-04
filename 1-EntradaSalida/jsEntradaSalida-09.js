/*
Roccasalvo Christian Daniel DIV Z
Ejercicio E/S 09
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var ingresoSueldo;
	var resultado;

	ingresoSueldo = document.getElementById("txtIdSueldo").value;
	ingresoSueldo = parseInt(ingresoSueldo);

    resultado = (ingresoSueldo * 10/100) + ingresoSueldo;
    
    document.getElementById("txtIdResultado").value = resultado;
}
//txtIdSueldo
//txtIdResultado
