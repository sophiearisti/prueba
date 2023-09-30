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


function generateProducts(numProducts, containerSelector, popupId) {
  var container = $(containerSelector);

  for (var i = 0; i < numProducts; i++) {
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
  });
}

function generateTiendas(numTiendas, containerSelector) {
  var container = $(containerSelector);

  for (var i = 0; i < numTiendas; i++) {
      var tiendaBlock = `
      <div class="minitienda">
          <div class="circuloTIENDA">
            <a  href="#" onclick="show('')">
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

$(document).ready(function() {
  // Para el primer bloque
  generateProducts(10, ".scrollBoxProducto", 'popup');

  generateTiendas(10, ".scrollBoxTienda");

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
    
    // Aquí puedes continuar con cualquier otra lógica que necesites.
});

  
});
