
const navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/

var cont = 1;
var bitacoras = [];
var formulario = document.getElementById('bitacora');

//Pregunta 1 - Contiene la etiqueta form y los elementos dentro de él.
//Pregunta 2 - Al ejecutar una accion, evita que la accion que tiene por defecto se ejecute.
//Pregunta 3 - La etiqueta en la posicion x del objeto formulario.
//Pregunta 4 - la variable td contiene el contenido de los nodos en una etiqueta td y tr contiene los td en una fila
//Pregunta 5 - contiene el texto dentro del nodo.
//Pregunta 6 - Una tabla con todos los elementos de los nodos.
//Pregunta 7 - Agrega las cosas ingresadas por el usuario a la lista.
//Pregunta 8 - Devuelve el primer hijo del objeto al cual se le aplica, a la vez lo elimina del objeto.
//Pregunta 9 - Vacío.
//Pregunta 10 - El texto del hijo en la posicion i del objeto al que se le aplica la funcion.
//Pregunta 11 - Todos los elementos que tengan la clase o id que se le especifica.
//Pregunta 12 - Retorna el numero total de hijos de un elemento.
//Pregunta 13 - Nada
//Pantalla 14 - Los elemetos ingresados por el ususario en la tabla.

formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    if (!((formulario[1].value == "" || formulario[1].value == null) || (formulario[2].value == "" || formulario[2].value == null) || (formulario[3].value == "" || formulario[3].value == null || parseInt(formulario[3].value) <= 0))) {
        let bitacora = {
            cant: cont,
            fecha: formulario[1].value,
            descripcion: formulario[2].value,
            cantidad: formulario[3].value
        }
        bitacoras.push(bitacora);
        cont++;
        mostrar();
    };
    if (formulario[1].value == "" || formulario[1].value == null){
        formulario[1].style.borderColor = "red";
    }
    else {
        formulario[1].style.borderColor = "green";
    };
    if (formulario[2].value == "" || formulario[2].value == null){
        formulario[2].style.borderColor = "red";
    }
    else {
        formulario[2].style.borderColor = "green";
    };
    if ((formulario[3].value == "" || formulario[3].value == null) || parseInt(formulario[3].value) <= 0){
        formulario[3].style.borderColor = "red";
    }
    else {
        formulario[3].style.borderColor = "green";
    };
});

const crearElemento = (bitacora, tbody) => {
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => {
        let td = document.createElement("td"); 
        let content = document.createTextNode(item);
        td.appendChild(content);
        tr.setAttribute("class", "click");
        tr.appendChild(td);
    }); 
    var droptd = document.createElement("td");
    var drop = document.createElement("input");
    drop.setAttribute("class", "delete");
    drop.type = "button";
    drop.value = "Borrar";
    droptd.appendChild(drop);
    tr.appendChild(droptd);
    tbody.appendChild(tr);

    document.querySelectorAll(".delete").forEach((item) => {
        item.addEventListener("click", function(){
            item.parentNode.parentNode.style.display = "none";
        })
    })
}



const eliminar = (tbody) => {
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
}

const agregar = () => {
    var eventtr = document.querySelectorAll(".click");
    eventtr.forEach((item, index) => {
        item.addEventListener("click", () => {
            document.querySelector("#fecha").value = item.childNodes[1].textContent;
            document.querySelector("#descp").value = item.childNodes[2].textContent;
            document.querySelector("#cant").value = item.childNodes[3].textContent;
        });
    })
}

const mostrar = () => {
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
        eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item => {
        crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });
    agregar();
} 