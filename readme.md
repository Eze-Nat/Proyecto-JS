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