


function displayCarrito() {
    let itemsCarrito = localStorage.getItem("productosEnCarrito");
    itemsCarrito = JSON.parse(itemsCarrito);
    let productContainer = document.getElementById("productos");
    console.log(itemsCarrito) // vamos bien
    let costoCarrito = localStorage.getItem("costoTotal");

    if(itemsCarrito && productContainer) {
        productContainer.innerHTML = "";
        Object.values(itemsCarrito).map(item => {
            /* let row = document.createElement("div"); */
            productContainer.innerHTML += `
            <div class="producto">
                <i class="fa-solid fa-xmark"></i>
                <img class="img-carrito" src="${item.imagen}"/>
                <span>${item.nombre}</span> 
            </div>
            <div class="precio">$${item.precio},00</div>
            <div class="cantidad">
            <button class="button-add add-cart"><i class="fa-solid fa-arrow-down"></i></button>
                <span>${item.cantidad}</span>
                <button class="button-add add-cart"> <i class="fa-solid fa-arrow-up"></i></button> 
            </div>
            <div class="total">
                $${item.cantidad * item.precio},00
            </div>
            
            ` ;
            /* productContainer.appendChild(row); */
            
        });
        productContainer.innerHTML += `
        <div class="totalFinalContenedor">
            <h4 class="totalTitulo">
                Total
            </h4>
            <h4 class="totalFinal">
                $${costoCarrito},00
            </h4> 
        </div>
        `
    }
}


displayCarrito();
