
let productos = document.getElementById('listaProductos');
let carroc;

carroc = JSON.parse(sessionStorage.getItem('carro')).map(obj => Object.assign(new Producto(), obj))
carroc.forEach(producto => {
    //Descripcion
    let divProducto = document.createElement('div');
    divProducto.setAttribute('class', 'border  col-12 col-md-6');
    divProducto.textContent = producto.descripcion;
    producto.etiquetaD = divProducto;

    //Cantidad
    let divCant = document.createElement('div');
    divCant.setAttribute('class', 'border col-6 col-md-3 form-group d-flex align-items-center');
    producto.etiquetaC = divCant;


    //Spinner
    let spinner = document.createElement('input');
    spinner.setAttribute('id', "spin" + producto.nombre);
    spinner.setAttribute('type', 'Number');
    spinner.setAttribute('min', '1');
    spinner.setAttribute('value', producto.cantidad);
    spinner.setAttribute('class', 'spin w-50 m-2');
    let anterior = spinner.value;

    //Este evento es para que no pueda ingresar numeros
    spinner.addEventListener('keydown', function (e) {
        e.preventDefault();
    });
    //Uso input y no change porque toma todos los cambios incluso si mantiene el click
    spinner.addEventListener('input', function () {
        //si anterior es menor entonces agrego
        if (anterior < this.value) {
            agregar(producto);
            anterior++;
        } else {
            sacar(producto);
            anterior--;
        }
        producto.etiquetaP.textContent = "$" + producto.precio * this.value;
        document.getElementById("totalCarro").textContent = "Total: $" + sessionStorage.getItem('total');
    });


    //Borrar
    let borrar = document.createElement('button');
    borrar.setAttribute('class', 'btn btn-outline-danger btn-sm m-2');
    borrar.setAttribute('id', "eliminar" + producto.nombre);
    borrar.textContent = "Eliminar";
    borrar.addEventListener('click', function () {
        eliminar(producto);
        producto.etiquetaD.remove();
        producto.etiquetaP.remove();
        producto.etiquetaC.remove();
        document.getElementById("totalCarro").textContent = "Total: $" + sessionStorage.getItem('total');
    });

    //Precios
    let divPrecio = document.createElement('div');
    divPrecio.setAttribute('class', 'border col-6 col-md-3 d-flex align-items-center justify-content-center');
    divPrecio.textContent = "$" + producto.precio * producto.cantidad;
    producto.etiquetaP = divPrecio;

    //Agrego al div correspondiente
    productos.appendChild(divProducto);
    divCant.appendChild(spinner);
    divCant.append(borrar);
    productos.appendChild(divCant);
    productos.appendChild(divPrecio);

});
document.getElementById("totalCarro").textContent = "Total: $" + sessionStorage.getItem('total');

function limpiarlista() {
    carroc.forEach(producto => {
        producto.etiquetaD.remove();
        producto.etiquetaP.remove();
        producto.etiquetaC.remove();
    });
}


document.getElementById("comprar").addEventListener('click', function () {
    limpiarlista();
    comprar();
    document.getElementById("total").textContent = '$' + sessionStorage.getItem('total');
    document.getElementById("totalCarro").textContent = "Total: $" + sessionStorage.getItem('total');
})

//Carrusel
let carrusel1 = document.getElementById('c1');
let carrusel2 = document.getElementById('c2');
let carrusel3 = document.getElementById('c3');

//Saco el producto que busque y elijo uno aleatorio para poner en el carrusel
let listaCarrusel = bd;
let prod1 = listaCarrusel[Math.floor(Math.random() * listaCarrusel.length)];

listaCarrusel = listaCarrusel.filter(elemento => elemento != prod1);
let prod2 = listaCarrusel[Math.floor(Math.random() * listaCarrusel.length)];

listaCarrusel = listaCarrusel.filter(elemento => elemento != prod2);
let prod3 = listaCarrusel[Math.floor(Math.random() * listaCarrusel.length)];

//cambio los atributos del carrusel para cada producto
carrusel1.setAttribute('href', 'producto.html?nombre=' + prod1.nombre);
carrusel1 = carrusel1.children[0];
carrusel1.setAttribute('src', prod1.imagen);
carrusel1.setAttribute('alt', prod1.alt);

carrusel2.setAttribute('href', 'producto.html?nombre=' + prod2.nombre);
carrusel2 = carrusel2.children[0];
carrusel2.setAttribute('src', prod2.imagen);
carrusel2.setAttribute('alt', prod2.alt);

carrusel3.setAttribute('href', 'producto.html?nombre=' + prod3.nombre);
carrusel3 = carrusel3.children[0];
carrusel3.setAttribute('src', prod3.imagen);
carrusel3.setAttribute('alt', prod3.alt);

// Muestro cartel de comprado
let boton = document.getElementById('comprar');
boton.addEventListener('click', function () {
    //Muestro el div agregar
    let alerta = document.getElementById('alerta');
    alerta.style.display = 'block';

    // Oculta el div después de 3 segundos
    setTimeout(function () {
        alerta.style.display = "none";
    }, 3000);
});