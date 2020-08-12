class Product {
    constructor(marca, modelo, km, año, precio, qpuertas) {
        this.marca = marca;
        this.modelo = modelo;
        this.km = km;
        this.año = año;
        this.precio = precio;
        this.qpuertas = qpuertas;
    }
}

class UI {
    addProduct(product) {
       const productList = document.getElementById('products');
       const element = document.createElement('div');
       element.innerHTML = `
        
       <div class="card text-center mb-4">
        <div class="card-body">
            <strong>Marca</strong>: ${product.marca}
            <strong>Modelo</strong>: ${product.modelo}
            <strong>Kilómetros</strong>: ${product.km}
            <strong>Año</strong>: ${product.año}
            <strong>Precio</strong>: ${product.precio}
            <strong>Puertas</strong>: ${product.qpuertas}
            <br>
            <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
        </div>
       </div>

       `;

       productList.appendChild(element);
    }

    resetForm(){
        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {
        if (element.name === "delete") {
            element.parentElement.parentElement.parentElement.remove();
        }
        this.showMessage('Vehiculo eliminado correctamente', 'danger');
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(message));
        
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div,app);
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 3000);

    }

    
}

document.getElementById('product-form').addEventListener('submit', function(e) {
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const km = document.getElementById('km').value;
    const año = document.getElementById('año').value;
    const precio = document.getElementById('precio').value;
    const qpuertas = document.getElementById('qpuertas').value;

    const product = new Product(marca, modelo, km, año, precio, qpuertas);

    const ui = new UI();

    if(marca === '' || modelo === '' || km ==='' || año === '' || precio === '' || qpuertas === '') {
    ui.showMessage('Deben estar todos los campos completos', 'danger');
    e.preventDefault();
    }else{
    ui.addProduct(product);
    ui.resetForm();
    ui.showMessage('El vehiculo fue agregado correctamente', 'success');
    e.preventDefault();
    }
    
})

document.getElementById('products').addEventListener('click', function(e) {
    const ui = new UI();
    ui.deleteProduct(e.target);
})