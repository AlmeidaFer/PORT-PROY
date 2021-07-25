


//OPCIONES DE MENU
function desplazaMenu() {

    let Menu = document.getElementById('Menu');
    Menu.classList.add("rightMe-100");

}

function checkM() {
        let Menu = document.getElementById('Menu');
    Menu.classList.remove("rightMe-100");

}

//Desplazamiento de menu por links del Menu
function desplazaMenuXbtn() {
  let Menu = document.getElementById('Menu');
  Menu.classList.add("rightMe-100");
 
  document.getElementById("check").checked = false;

}

// ------------------------------------------------
// var Sechdr = document.getElementById('irHome'); 


// $(document).ready(function () {

//       $(window).scroll(function () {
//           var windowHeight = $(window).scrollTop(); //Altura de la pantalla
//           var contenido2 = $("#bandera-irHome").offset();//#secBienvenido es el elemento que el Scroll detectara
//           contenido2 = contenido2.top;
  
//           if (windowHeight >= contenido2) {
//               Sechdr.classList.add('displeyFlex');
  
//           } else {
//               Sechdr.classList.remove('displeyFlex');
//           }
//       });
//   });





//Efecto scroll suave para los links
$('a').click(function () {

  
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
    });



// //----------------------------
// window.onscroll = function (){
//   // Obtenemos la posicion del scroll en pantall
//   var scroll = document.documentElement.scrollTop || document.body.scrollTop;

//   // Realizamos alguna accion cuando el scroll este entre la posicion 300 y 400
//   if(scroll > 300 && scroll < 400){
//       console.log("Pasaste la posicion 300 del scroll");
//   }
// }