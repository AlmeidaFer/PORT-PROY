

//Funcion de boton de Desplazamiento
var cta = document.querySelector(".cta");
var check = 0;

cta.addEventListener('click', function(e){

    //------------
    var blockLogin  = document.getElementById('areaLogin');
    var blockRegistro  = document.getElementById('areaRegistrar');

     //------------
    var text = e.target.nextElementSibling;
    var loginText = e.target.parentElement;
    text.classList.toggle('mostrar-block');
    loginText.classList.toggle('expandir-block');
    if(check == 0)
    {
        cta.innerHTML = "<i class=\"fas fa-chevron-up\"></i>";
        blockLogin.classList.remove("notVerBlock")
        blockLogin.classList.remove("VerBlock")
        
    blockRegistro.classList.remove("notVerBlock")
    blockRegistro.classList.remove("VerBlock")
        check++;
    }
    else
    {
        cta.innerHTML = "<i class=\"fas fa-chevron-down\"></i>";
        check = 0;

        blockRegistro.classList.add("notVerBlock")
   
    } 
})


//Funcion del boton "Registrate"
function mostrarR(){

var blockLogin  = document.getElementById('areaLogin');
var blockRegistro  = document.getElementById('areaRegistrar');

blockLogin.classList.add("notVerBlock")
blockRegistro.classList.add("VerBlock")

}