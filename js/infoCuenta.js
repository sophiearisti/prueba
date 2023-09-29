document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('mas').addEventListener('click', function() {
      document.getElementById('fileUpload').click();
  });

  document.getElementById('fileUpload').addEventListener('change', function() {
      var fileName = this.value.split('\\').pop();
      document.querySelector('output').textContent = fileName;
  });
});

function show(id) {
  document.getElementById(id).style.display = 'block';
  document.body.classList.add('overlayActive');
}

function hide(id) {
  document.getElementById(id).style.display = 'none';
  document.body.classList.remove('overlayActive');
}

const input = document.getElementById("fileUpload");
const imgElement = document.getElementById("foto");

input.addEventListener("change", () => {
    displayImages();
});

function displayImages() {
    const file = input.files[0];  // Tomar el primer archivo seleccionado
    if (file) {
        const newSrc = URL.createObjectURL(file);  // Crear una URL temporal para el archivo
        imgElement.setAttribute("src", newSrc);  // Cambiar el src de la imagen
    }
}


