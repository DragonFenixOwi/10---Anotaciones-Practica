/* 
    Fecha y hora
        - Trabajamos con la pila del reloj
        -  
*/
var d =new date();


document.write
    (
        // quiero saber que dia es
            `Día ${d.getDate()}, <br> Día de la semana(0 al 6): ${d.getDay()}
            , <br> Mes(0 - 11): ${d.getMoth()}, <br> Año ${d.getFullYear()}
            , <br> Hora : ${d.getHours()}, <br> minutos : `
        
            /*

        */
    );




/*otro ejemplo */

var fechaHora = new Date();
var m = fechaHora.getMonth() + 1;

//var dia = fechaHora.getDate() < 10 ? "0" + fechaHora.gateDate();
fechaHora.getDate();
var mes = m<10? "0" + m :m ;

document.write(`FECHA: ${dia}/${fechaHora.getFullYear()}`);





/*
    COMO SE CREA UN RELOJ  
*/

/*
    -Esto lo muestro para cuando JavaScript esta lento 
    - Esto se ve mas en la practica en la 
        BASE DE DATOS.
    - Quiero que el HTML esta todo lleno  y luego que me funcione.
*/



/*
    Funcion para arreglar la visualización fea
*/

function ponerCero()
        {
            if (i<10)
                {
                    i = '0' + i;
                }
            return i;
        }


function rejol ()
        {
            var fechaHora = new Date();

            hora = fechaHora.getHours();
            minutos = fechaHora.getMinutes();
            segundos = getSeconds();

            //Añadir  cero para que se vea mejor visualmente
            hora = ponerCero(hora);
            minutos = ponerCero(minutos);
            segundos = ponerCero(segundos);

            var divReloj = document.getElementById("reloj");

            // en ese "divReloj" vamos a insertar nuestro HTML con "innerHTML"
                divReloj.innerHTML = `${hora}:${minutos}:${segundos}`;


            /* setTimeout, para que llame a la funcion "reloj" cada 500 ms o cada medio segundo 
            y cada medio segundo "mas" escribe lo que hay*/
            // ahora quiero que se mueve
                setTimeout("reloj()",500);
        }


/*hasta que "windo" no me cargue todo, quen o me llame a la funcion */
window.onload = function()
        {
            reloj();
        }
// queria que funcionara
reloj();





/*
    ERRORES
        - 

*/

