class Producto {
    constructor(nombre, descripcion, precio, claves, categorias, imagen, alt, cantidad) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.claves = claves;
        this.categorias = categorias;
        this.imagen = imagen;
        this.alt = alt;
        this.cantidad = cantidad;
        //etiquetaD
        //etiquetaC
        //etiquetaP
    }
}
//bd
const espadasSao = new Producto("Espadas Kirito", "Las dos espadas de Kirito de SAO con sus respectivas vainas", 50000, ["espadas", "sao", "kirito", "asuna"], "Armas", "Imagenes/espadasSAO.jpeg", "espadas SAO", 0);
const gorroInosuke = new Producto("Mascara Inosuke", "La mascara de Inosuke de Kimetsu no Yaiba conocido tambien como Deamon Slayer", 10000, ["inosuke", "mascara", "kimetsu", "yaiba", "deamon", "slayer", "gorro"], "Trajes", "Imagenes/gorroInosuke.jpeg", "gorro Inosuke", 0);
const figuraGoku = new Producto("Figura Goku SS4", "Figura de Goku Super Saiyajin 4 de Dragon Ball", 8000, ["goku", "figura", "muñeco", "dragon", "ball", "saiyan", "gorro"], "Figuras", "Imagenes/muñecoGoku.jpeg", "muñeco Goku", 0);
const tazaSNC = new Producto("Taza Cuerpo de Exploracion", "Taza con el logo del cuerpo de exploracion de Shingeki no Kiojin conocido tambien como Attack of Titans", 5000, ["taza", "logo", "exploracion", "shingeki", "kiojin", "attack", "titan", "levi", "jeager", "mikasa", "eren"], "Tazas", "Imagenes/tazaSNK.jpeg", "taza SNK", 0);
const trajeAkatsuki = new Producto("Traje Akatsuki", "El traje usado por los mienmbros de Akatsuki en Naruto", 20000, ["naruto", "traje", "akatsuki", "itachi", "sasuke"], "Trajes", "Imagenes/trajeAkatsuki.jpeg", "traje Akastuki", 0);
const remeraHaikyuu = new Producto("Remera Haikyuu", "Remera de Hinata de la serie Haikyuu con la frase 'chase your dreams' o 'persigue tus sueños' en español", 15000, ["remera", "hinata", "haikyuu", "persigue", "sueños"], "Trajes", "Imagenes/remeraHaikyuu.jpeg", "remera Haikyuu!", 0);

let bd = [espadasSao, gorroInosuke, figuraGoku, tazaSNC, trajeAkatsuki, remeraHaikyuu];

//inicializo total y carro
if (!sessionStorage.getItem('total')) {
    //si no existe creo e inicializo en 0
    sessionStorage.setItem('total', 0);
}
if (!sessionStorage.getItem('carro')) {
    sessionStorage.setItem('carro', JSON.stringify([]));
}

var carro = JSON.parse(sessionStorage.getItem('carro')).map(obj => Object.assign(new Producto(), obj));
var total = Number(sessionStorage.getItem('total'));

function agregar(producto) {
    let productoBuscado = carro.find(elemento => elemento.nombre === producto.nombre);
    if (productoBuscado) {
        productoBuscado.cantidad++;
    } else {
        producto.cantidad = 1;
        carro.push(producto);
    }
    sessionStorage.setItem('carro', JSON.stringify(carro));

    total += producto.precio;
    document.getElementById("total").textContent = '$' + total;
    sessionStorage.setItem('total', total.toString());
}

function sacar(producto) {
    let productoBuscado = carro.find(elemento => elemento.nombre === producto.nombre);
    productoBuscado.cantidad--;
    sessionStorage.setItem('carro', JSON.stringify(carro));
    total -= producto.precio;
    document.getElementById("total").textContent = '$' + total;
    sessionStorage.setItem('total', total.toString());
}

function eliminar(producto) {
    carro = carro.filter(elemento => !elemento.nombre == producto.nombre);
    sessionStorage.setItem('carro', JSON.stringify(carro));
    total -= producto.cantidad * producto.precio;
    document.getElementById("total").textContent = '$' + total;
    sessionStorage.setItem('total', total.toString());
}

function comprar(){
    //todo lo que tenga que hacer con esos datos para la compra
    sessionStorage.setItem('carro', JSON.stringify([]));
    sessionStorage.setItem('total', 0);
}

document.getElementById("total").textContent = '$' + sessionStorage.getItem('total');

document.getElementById("btnBuscar").addEventListener('click', function () {
    let busqueda = document.getElementById('buscador').value;
    window.location.href = 'index.html?busqueda=' + busqueda;
    buscar(busqueda);
});