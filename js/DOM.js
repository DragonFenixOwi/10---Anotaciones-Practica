
// creamos una variable boton y con getElementById agarramos ese boton desde el script
var boton = document.getElementById('boton');

/*
    Ejemplo CLONACION 
    cada vez que queremos añadir un documento o un texto 
    siempre debemos hacer esto 
*/

boton.addEventListener('click',function()
    {
        //
        var nodoTitulo = document.createElement("h3");

        //
        var nodoTexto = document.createTextNode("titulo");
        

        /*
            -Vamos a unir Nodo titulo al nodo texto
            -Padre titulo hijo texto
        */
        
        nodoTitulo.appendChild(nodoTexto);
        // 

        //ahora ¿donde quieres que vaya? "document". "adonde va a ir"
        document.body.appendChild(nodoTitulo);
    });



/*
    Ejemplo SIN CLONACION 
    cada vez que queremos añadir un documento o un texto 
    siempre debemos hacer esto 
*/

var boton = document.getElementById('boton');
var nodoTitulo = document.createElement("h3");
var nodoTexto = document.createTextNode("titulo");

nodoTitulo.appendChild(nodoTexto);

boton.addEventListener('click',function()
    {
        document.body.appendChild(nodoTitulo);
    });






// Agregando articulo

var boton = document.getElementById('boton');
var nodoTitulo = document.createElement("h3");
var nodoTexto = document.createTextNode("titulo");

nodoTitulo.appendChild(nodoTexto);

boton.addEventListener('click',function()
    {
        document.getElementById("articulo").appendChild(nodoTitulo);
    });





/*
    - Saber localizar a un elemento padre con 
        -parentNode
        - con este comando obtenemos quien es el padre_lista
    -Con getElementsTagName busca en todo lo que hay adentro de la seccion
*/

// Toda la seccion que hay adentro 
var padre = document.getElementsByTagName("Section")[0].parentNode;

//este es el hijo
var hijo = document.getElementsByTagName("Section")[0];

//Insertar un elemento antes del hijo getElementById













// Agregando articulo

var boton = document.getElementById('boton');
var nodoTitulo = document.createElement("h3");
var nodoTexto = document.createTextNode("titulo");

nodoTitulo.appendChild(nodoTexto);

boton.addEventListener('click',function()
    {
        document.getElementById("articulo").appendChild(nodoTitulo);
    });


var padre = document.getElementsByTagName("li")[0].parentNode;

//este es el hijo
var hijo = document.getElementsByTagName("li")[0];

//Insertar un elemento antes del hijo getElementById
// metemos el h3 al principio de la lista con "insertBefore"
padre.insertBefore(nodoTitulo,hijo);

//tambien tenemos
pader.insertAfter(nodoTitulo,hijo);

//cambiar palabra Boton 
boton.addEventListener('mouseover',function()
    {
        /*
            el innerHTML a diferencia del textContent es que podemos poner cualquier cosa
            - textContent solo sirve para meter contenido punto final
            -
        */
        boton.innerHTML = "<b>Encima</b>";
    });

boton.addEventListener('mouseout',function()
    {
        /*
            
        */
        boton.textContent = "<b>Encima</b>";
    });




//lista

var nodoLista = document.createElement("li");
var nodoTextoLista = document.createTextNode("Nueva linea");

nodoLista.appendChild(nodoTextoLista);  // tenemos preparado la lista nueva "pero no insertado"




/*
    REEMPLAZAR UN ELEMENTO
*/



// lo podemos insertar con otra opcion y para eso
//¿el padre de la lista quien es ?
var padreLista = document.getElementById("Lista");


/*
    - nodoLista : parte nueva de replace
    - nodoTextoLista : 
    padreLista.replaceChild(nodoLista, nodoTextoLista);
*/



/*
    
        - nodoLista : parte nueva de replace
        - padreLista.lastChild : reemplazo un hijo por un hijo nuevo y lo reeemplazas en el caso de que el 
        padre lista, este en la ultima lista de los hijos
*/

padreLista.replaceChild(nodoLista, padreLista.lastChild);









/*
    Eliminar un hijo
*/

padreLista.removeChild(padreLista.getElementsByTagName("li")[0]);





/*
    CREAR RAPIDAMENTE UN ELEMENTO VACIO CON ATRIBUTOS
*/



/*
    PAGINA DINAMICA     
        - Dentro de main de hmtl se crea varios atributos que le describimos de aqui. 
        o apartir del codigo de abajo
        - 
*/

var elementoA = document.createElement("a");
elementoA.href = "http://www.google.es";
elementoA.id = "link";
elementoA.className = "link";
elementoA.style = "color:red;";         // Atributo de estilo
elementoA.textContent = "Google";       // contenidodentro de la A
document
    .getElementsByTagName("main")[0]
    .insertBefore(elementoA, document.getElementsByTagName("ul")[0])
    ;


// otro atributos - me gusto menos esta
elementoA.setAttribute("name","google");