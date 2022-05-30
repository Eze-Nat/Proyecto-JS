const contenedorProductos = document.getElementById("contenedor-productos");
let carrito = [];


stockProductos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("product-container")
    div.innerHTML = `
    <h3>${producto.nombre}</h3>
    <img src="${producto.imagen}"/>
    <h1>${producto.precio}</h1>
    <button class="button-add add-cart" id="${producto.id}">Agregar</button>    
    `

    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`${producto.id}`);

    boton.addEventListener("click", () => {
        agregarAlCarrito(producto); 
        costoTotal(producto)
    })
});

function onCargarCarrito() {
    let productNumbers = localStorage.getItem("carrito");

    if (productNumbers) {
        document.querySelector(".cart span").textContent = productNumbers;
    }
}


function agregarAlCarrito(producto) {
    console.log("el producto es", producto) //funciona!!!!
    let productNumbers = localStorage.getItem("carrito");

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem("carrito", productNumbers + 1);
        document.querySelector(".cart span").textContent = productNumbers + 1;
    } else {
        localStorage.setItem("carrito", 1);
        document.querySelector(".cart span").textContent = 1;
    }

    setItems(producto);
}

function setItems(producto) {
    let itemsCarrito = localStorage.getItem("productosEnCarrito");
    itemsCarrito = JSON.parse(itemsCarrito);


    if (itemsCarrito != null) {
        if (itemsCarrito[producto.nombre] == undefined) {
            itemsCarrito = {
                ...itemsCarrito,
                [producto.nombre]: producto
            }
            itemsCarrito[producto.nombre].cantidad += 1;
        }
    } else {
        producto.cantidad = 1;
        itemsCarrito = {
            [producto.nombre]: producto
        }
    }

    localStorage.setItem("productosEnCarrito", JSON.stringify(itemsCarrito));
}

function costoTotal(producto) {
    console.log(producto.precio) //funciona!!!
    let costoCarrito = localStorage.getItem("costoTotal");
    
    
    if(costoCarrito != null) {
        costoCarrito = parseInt(costoCarrito);
        localStorage.setItem("costoTotal", costoCarrito + producto.precio);
    } else {
        localStorage.setItem("costoTotal", producto.precio);
    }

}

function displayCarrito() {
    let itemsCarrito = localStorage.getItem("productosEnCarrito");
    itemsCarrito = JSON.parse(itemsCarrito);
    let productContainer = document.querySelector(".productos");
    console.log(itemsCarrito) // vamos bien
    let costoCarrito = localStorage.getItem("costoTotal");

    if(itemsCarrito && productContainer) {
        productContainer.innerHTML = "";
        Object.values(itemsCarrito).map(item => {
            productContainer.innerHTML += `
            <div class="product">
            <i class="fa-solid fa-xmark"></i>
            <img src="${productos.imagen}"/>
            <span>${productos.nombre}</span>
            <div class="precio">${producto.precio}</div>
            <div class="cantidad">
            <i class="fa-solid fa-arrow-down"></i>
            <span>${productos.cantidad}</span>
            <i class="fa-solid fa-arrow-up"></i>
            </div>
            <div class"total">
            ${productos.cantidad * productos.precio},00
            </div>
                        
            `
        });
        productContainer.innerHTML += `
        <div class="totalFinalContenedor">
            <h4 class="totalTitulo">
                Total
            </h4>
            <h4 class="totalFinal">
                $${costoCarrito},00
            </h4> 
        `
    }
}

onCargarCarrito();
displayCarrito();