// Definición de funciones y variables
var getElem = function(id) {
  return document.getElementById(id);
}

var show = function(id) {
  getElem(id).style.display = 'block';
  document.body.classList.add('overlayActive');
}

var hide = function(id) {
  getElem(id).style.display = 'none';
  document.body.classList.remove('overlayActive');
}

const cant=20;

async function getProductos(){
  return await fetch('http://localhost:3000/productos', {

      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          limit: 20
      })
  })
}

const promesaProductos = getProductos()

promesaProductos
  .then(res => {
      console.log(res.ok)

       //ingresarlo al local storage la lista de ids de productos
       //y hacer el proceso de ingresar las fotos
       for (var i = 0; i < cant; i++) {
      
       }
      generateProducts(".scrollBoxProducto", 'popup');

      res.json()
  })
  .then(data => {
      console.log(data)
      variable = data
  })
  .catch(() => {
      console.log('error')
  })
  

function generateProducts(containerSelector, popupId) {
  var container = $(containerSelector);
  var linkImagen;
  var nombre;

  for (var i = 0; i < cant; i++) {
      var productBlock = `
          <div class="producto">
              <div class="circuloproducto">
                  <a href="#" class="productLink">
                      <img class="fotominipRODUCTO" src="../imagenes/PRODUCTOIMG.png" alt="foto Producto">
                  </a>
              </div>
              <p class="nombreminiProducto">
                  torta de chocolate
              </p>
          </div>
      `;

      container.append(productBlock);
  }

  // Es importante hacer el evento click DESPUÉS de agregar los productos al contenedor
  container.find(".productLink").on("click", function(event) {
      event.preventDefault();
      show(popupId);
      $('#cantidadProducto').val(1);
  });
}

async function getTiendas(){
  return await fetch('http://localhost:3000/tiendas', {

      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          limit: 20
      })
  })
}

const promesaTiendas = getTiendas()

promesaTiendas
  .then(res => {
      console.log(res.ok)
      
     //ingresarlo al local storage la lista de ids de tiendas
     //y hacer el proceso de ingresar las fotos
     for (var i = 0; i < cant; i++) {

     }
     generateTiendas(".scrollBoxTienda");

      res.json()
  })
  .then(data => {
      console.log(data)
      variable = data
  })
  .catch(() => {
      console.log('error')
  })
  

function generateTiendas(containerSelector) {
  var container = $(containerSelector);
  var linkImagen;
  var nombre;

  for (var i = 0; i < cant; i++) {
      var tiendaBlock = `
      <div class="minitienda">
          <div class="circuloTIENDA">
            <a  href=,"#" onclick="show('')">
              <img class="fotominiTIENDA" src="../imagenes/LaCentral.png" alt="foto Tienda">
            </a>
          </div>
          
          <p class="nombreminiTIENDA">
            La central
          </p>
      </div>
      `;

      container.append(tiendaBlock);
  }
}

async function getInfoProducto(idProducto){
  return await fetch('http://localhost:3000/info-producto', {

      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          ID: idproducto
      })
  })
}

const promesaInformacionProducto = getProductos()

promesaInformacionProducto
  .then(res => {
      console.log(res.ok)

      generateInfoProducto(nombre, precio, descuento, disponible, descripcion, ingredientes, tiendasList, imagen);

      res.json()
  })
  .then(data => {
      console.log(data)
      variable = data
  })
  .catch(() => {
      console.log('error')
  })
  
  function generateInfoProducto(nombre, precio, descuento, disponible, descripcion, ingredientes, tiendasList, linkImagen) {
   
    var container = $(containerSelector);
    
    $('#tituloProducto').text(nombre);
    $("#fotopRODUCTO").attr("src", imagen);
    $('#precioText').text(precio-precio*descuento);

    if(descuento==0)
    {
      $('#DescText').hide();
      $('#porcentajePopUp').hide();
      $('#DescText2').hide();
    }
    else
    {
      $('#DescText2').text(descuento * 100 + '%');
      $('#DescText').text(precio);
      $('#DescText').css('text-decoration', 'line-through');

    }

    if(!disponible)
    {
      $('disponible').text('agotado');
      $('#disponible').css('color', '#f17e7e');  // Cambia el color a rojo
    }

    $('#textoDescrip').text(descripcion);

    $('#textoIngred').text(ingredientes);

    for (var i = 0; i < tiendasList.size; i++) {
      var nombreTienda;

      var tiendaBlock = `
      <div id="RadioOptions1">
            <input type="radio" id="tienda" name="TiendaSeleccion" value="Tienda1">
      </div>
      `;

      //REVISAR
      container.append('scrollBoxinner');
    }

  }


$(document).ready(function() {
  // Para el primer bloque
  generateProducts(".scrollBoxProducto", 'popup');

  generateTiendas(".scrollBoxTienda");

  $('#basura').on('click', function() {
    $('#cantidadProducto').val('1');
  });

  $('#mas').on('click', function() {
    var currentValue = parseInt($('#cantidadProducto').val(), 10) || 0; // Convertir el valor a entero
    $('#cantidadProducto').val(currentValue + 1);
  });

  $('.Bspagar').on('click', function() {
    var cantidad = $('#cantidadProducto').val();
    if (isNaN(cantidad) || cantidad.trim() === "") { 
        // isNaN verifica si no es un número; la segunda condición verifica si está vacío o sólo contiene espacios.
        alert('Por favor, introduce un número válido en la cantidad.');
        return false; // Evita que se ejecute cualquier otro comportamiento del botón.
    }
    

});

  
});
