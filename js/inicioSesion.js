
async function post(inputID, inputNombreusuario, inputcontrasena, inputTipo){
    return await fetch('http://localhost:8080/ingreso', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ID: inputID,
            tipo: inputTipo,
            NUsario: inputNombreusuario,
            contrasena: inputcontrasena
        })
    })
}

const promesa = post()

promesa
    .then(res => {
        console.log(res.ok)
        
        if(res.ok)
        {
            $(this).unbind('submit').submit(); // Desvincula el evento 'submit' y luego envía el formulario
            res.json().then(data => {
                 //GUARDAR EL ID DEL USUARIO EN EL LOCAL STORAGE
                 //PEDIR EL AVATAR Y GUARDARLO EN EL LOCAL STORAGE
            })
        }
        else
        {
            $('.msg').text('Existe un error en la información');
            showAlert();
        }
    })
    .catch(() => {
        console.log('error')
    })
    

$(document).ready(function() {
   
    function showAlert(){
        $('.alert').addClass("show");
        $('.alert').removeClass("hide");
        $('.alert').addClass("showAlert");
        setTimeout(function(){
            $('.alert').removeClass("show");
            $('.alert').addClass("hide");
        },10000);
    };

    $('.close-btn').click(function(){
        $('.alert').removeClass("show");
        $('.alert').addClass("hide");
    });


    $('.camposLlenar').on('submit', function(event) {
        event.preventDefault();  // This prevents the form from being submitted

        var isValid = true;  // Assume the form is valid to start\\

        var inputID = $('#ID').val();
        var inputNombreusuario = $('#Nombreusuario').val();
        var inputcontrasena = $('#contrasena').val();
        var inputTipo;

        if($('#Tipo').is(':checked')) 
        {
            inputTipo="domiciliario";
        } 
        else {
            inputTipo="cliente";
        }

        //evaluar si es un numero
        if(isNaN(inputID)) 
        {
            console.log("ID is not a number");
            isValid = false;
            $('.msg').text('El ID solo debe contener números');
            showAlert();
        }
        
        if(isValid) 
        {
            $(this).unbind('submit').submit(); /*ESTO SE QUITA*/
            post(inputID, inputNombreusuario, inputcontrasena, tipo);
        }
    });
});

