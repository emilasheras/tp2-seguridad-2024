//agrega productos a un contenedor
function agregarA(contenedor, productos) {
    productos.forEach(producto => {
        let a = document.createElement('a');
        a.setAttribute('href', 'producto.html?nombre=' + producto.nombre);
        a.setAttribute('class', 'card');
        a.setAttribute('data-categorias', producto.categorias);//agrego el atributo categorias

        // Crear el elemento <div> row
        let row = document.createElement('div');
        row.setAttribute('class', 'row');

        // Crear el primer elemento <div> card
        let card1 = document.createElement('div');
        card1.setAttribute('class', 'card col-sm-3 align-items-center');

        // Crear el elemento <img>
        let img = document.createElement('img');
        img.setAttribute('class', 'py-3 img-fluid w-75');
        img.setAttribute('src', producto.imagen);
        img.setAttribute('alt', producto.alt);

        // Añadir <img> a card1
        card1.appendChild(img);

        // Crear el segundo elemento <div> card
        let card2 = document.createElement('div');
        card2.setAttribute('class', 'card col-sm-7');

        // Crear el primer elemento <h1> y <p>
        let h1 = document.createElement('h3');
        h1.textContent = producto.nombre;
        let p1 = document.createElement('p');
        p1.textContent = producto.descripcion;

        // Añadir <p> a card2
        card2.appendChild(h1);
        card2.appendChild(p1);

        // Crear el tercer elemento <div> card
        let card3 = document.createElement('div');
        card3.setAttribute('class', 'card col-sm-2 text-center');

        // Crear el segundo elemento <p>
        let h3 = document.createElement('h3');
        h3.textContent = "$" + producto.precio;

        // Añadir <p> a card3
        card3.appendChild(h3);

        // Añadir card1, card2, y card3 a row
        row.appendChild(card1);
        row.appendChild(card2);
        row.appendChild(card3);

        // Añadir row a <a>
        a.appendChild(row);

        // Añadir <a> al documento
        contenedor.appendChild(a);
    });
}
function buscar(busqueda) {
    if (busqueda === null) {
        busqueda = "";
    }
    busqueda = busqueda.split(" "); // separo la oracion en palabras
    let lista = document.getElementById("prod");
    document.getElementById("prod").innerHTML = ""; //vacio el contenedor

    if (busqueda[0] == "") {
        agregarA(lista, bd);
    } else {
        //elementos de la base de datos que contengan alguna palabra buscada en su clave
        agregarA(lista, bd.filter(producto => busqueda.some(clave => producto.claves.includes(clave))));
    }
}

function filtrar(event) {
    buscar(busqueda);
    let filtro = event.target.id;
    let contenedor = document.getElementById("prod");
    let lista = Array.from(contenedor.children);
    //cuando checkeo tengo que eliminar productos que no tengan esa categoria
    if (filtro != "Todos") {
        lista.filter(producto => !producto.getAttribute('data-categorias').includes(filtro)).forEach(element => {
            element.remove();
        });
    }
}

let params = new URLSearchParams(window.location.search);
let busqueda = params.get('busqueda');
document.getElementById('buscador').value = busqueda;

//inicializo con todos los productos
if (typeof (busqueda) != 'null') {
    buscar(busqueda);

} else {
    console.log("entra")
    buscar();
}
document.getElementById("Todos").addEventListener("change", filtrar);
document.getElementById("Trajes").addEventListener("change", filtrar);
document.getElementById("Armas").addEventListener("change", filtrar);
document.getElementById("Figuras").addEventListener("change", filtrar);
document.getElementById("Tazas").addEventListener("change", filtrar);
