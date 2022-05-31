


function displayCarrito() {
    let itemsCarrito = localStorage.getItem("productosEnCarrito");
    itemsCarrito = JSON.parse(itemsCarrito);
    let productContainer = document.getElementById("productos");
    console.log(itemsCarrito) // vamos bien
    let costoCarrito = localStorage.getItem("costoTotal");

    if(itemsCarrito && productContainer) {
        productContainer.innerHTML = "";
        Object.values(itemsCarrito).map(item => {
            let row = document.createElement("tr");
            row.innerHTML = `
            <td class="product">
            <i class="fa-solid fa-xmark"></i>
            <img class="img-carrito" src="${item.imagen}"/>
            <span>${item.nombre}</span> </td>
            <td class="precio">${item.precio}</td>
            <td class="cantidad">
            <i class="fa-solid fa-arrow-down"></i>
            <span>${item.cantidad}</span>
            <i class="fa-solid fa-arrow-up"></i>
            </td>
            <td class"total">
            ${item.cantidad * item.precio},00
            </td>
            
            ` 
            productContainer.appendChild(row);
            
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

displayCarrito();