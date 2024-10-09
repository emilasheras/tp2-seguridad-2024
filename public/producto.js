// Obtener el parámetro de consulta de la URL
let params = new URLSearchParams(window.location.search);
let nombreProducto = params.get('nombre');

// Buscar el producto en la base de datos
let producto = bd.find(producto => producto.nombre == nombreProducto);

// Mostrar el producto en la página
let imagen = document.getElementById('imagen');
imagen.src = producto.imagen;
imagen.alt = producto.alt;
document.getElementById('nombre').textContent = producto.nombre;
document.getElementById('descripcion').textContent = producto.descripcion;

// Mostrar div al presionar boton agregar
let boton = document.getElementById('agregar'); 
boton.textContent = "$" + producto.precio;
boton.addEventListener('click', function () {
    agregar(producto);
    //Muestro el div agregar
    let alerta = document.getElementById('alerta');
    alerta.style.display = 'block';

    // Oculta el div después de 3 segundos
    setTimeout(function () {
        alerta.style.display = "none";
    }, 3000);
});


//Carrusel
let carrusel1 = document.getElementById('c1');
let carrusel2 = document.getElementById('c2');
let carrusel3 = document.getElementById('c3');

//Saco el producto que busque y elijo uno aleatorio para poner en el carrusel
let listaCarrusel = bd.filter(elemento => elemento != producto);
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
