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

            Index

            <!DOCTYPE html>
<head>
    <link href="https://fonts.googleapis.com/css2?family=Nerko+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./css/style.css" />
    
</head>
<body>
    <div class="page-nav">
        <h1>Mi tienda</h1>
        <button id="checkout" class="button-checkout" onclick="pay()">Pagar</button>
    </div>
    <div class="page-content">
        <div class="product-container">
            <h3>nombre</h3>
            <img src="images/product-1.jpg" />
            <h1>$50</h1>
            <button class="button-add" onclick="add('product-1', 50)">Agregar</button>
        </div>

        <div class="product-container">
            <h3>nombre</h3>
            <img src="images/product-2.jpg" />
            <h1>$300</h1>
            <button class="button-add" onclick="add('product-2', 300)">Agregar</button>
        </div>

        <div class="product-container">
            <h3>nombre</h3>
            <img src="images/product-3.jpg" />
            <h1>$250</h1>
            <button class="button-add" onclick="add('product-3', 250)">Agregar</button>
        </div>

        <div class="product-container">
            <h3>nombre</h3>
            <img src="images/product-4.jpg" />
            <h1>$200</h1>
            <button class="button-add" onclick="add('product-4', 200)">Agregar</button>
        </div>

        <div class="product-container">
            <h3>nombre</h3>
            <img src="images/product-5.jpg" />
            <h1>$10</h1>
            <button class="button-add" onclick="add('product-5', 10)">Agregar</button>
        </div>

        <div class="product-container">
            <h3>nombre</h3>
            <img src="images/product-6.jpg" />
            <h1>$650</h1>
            <button class="button-add" onclick="add('product-6', 650)">Agregar</button>
        </div>
    </div>

    
    <script src="/stock.js"></script>
    <script src="/script.js"></script>
</body>