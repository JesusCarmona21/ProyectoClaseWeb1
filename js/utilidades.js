function crearNodo(tipoNodo){
    var nodo = document.createElement(tipoNodo);
    return nodo;
}


function crearNodo(tipoNodo, texto) {
    var nodo = crearNodo(tipoNodo);
    var textoNodo = document.createTextNode(texto);
    nodo.appendChild(textoNodo);
    return nodo; 
}

function adicionarNodoBody(nodo){
    document.body.appendChild(nodo);
}

function crearNodoImagen(url, alt){
    var nodo = crearNodo("img");
    nodo.src = url;
    nodo.src =alt;
    return nodo;
}

function adicionarNodoBody(nodo){
    document.body.appendChild(nodo);
}