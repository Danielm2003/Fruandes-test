let btnAbrirPopup1 = document.getElementById("imgcert1"),
    btnAbrirPopup2 = document.getElementById("imgcert2"),
    btnAbrirPopup3 = document.getElementById("imgcert3"),
    btnAbrirPopup4 = document.getElementById("imgcert4"),
    btnAbrirPopup5 = document.getElementById("imgcert5"),
    btnAbrirPopup6 = document.getElementById("imgcert6"),
    overlay1 = document.getElementById("overlay1"),
    overlay2 = document.getElementById("overlay2"),
    overlay3 = document.getElementById("overlay3"),
    overlay4 = document.getElementById("overlay4"),
    overlay5 = document.getElementById("overlay5"),
    overlay6 = document.getElementById("overlay6"),
    popup1 = document.getElementById("popup1"),
    popup2 = document.getElementById("popup2"),
    popup3 = document.getElementById("popup3"),
    popup4 = document.getElementById("popup4"),
    popup5 = document.getElementById("popup5"),
    popup6 = document.getElementById("popup6"),
    btnCerrarPopup1 = document.getElementById("btn-cerrar-popup1"),
    btnCerrarPopup2 = document.getElementById("btn-cerrar-popup2"),
    btnCerrarPopup3 = document.getElementById("btn-cerrar-popup3"),
    btnCerrarPopup4 = document.getElementById("btn-cerrar-popup4"),
    btnCerrarPopup5 = document.getElementById("btn-cerrar-popup5"),
    btnCerrarPopup6 = document.getElementById("btn-cerrar-popup6"),
    
    /*PRINCIPAL PAGE*/
    btndMenuHome = document.getElementById("button-menu"), 
    menuHome = document.getElementById("menu"), 

     /*HEADER PAGES*/
    btnMenuHead = document.getElementById("button-menu-products"),
    menuProducts = document.getElementById("menu-products") 
    
// -------------ABRIR MENU HEAD----------------
function abrirMenu(){
    if(menuHome.className != "products-list active"){
        menuHome.classList.add('active');

        btndMenuHome.style.transform = "rotate(180deg)"
        btndMenuHome.style.padding = "0px 5px 3px 0px"

    }else{
        menuHome.classList.remove('active');

        btndMenuHome.style.transform = "rotate(0deg)"
        btndMenuHome.style.padding = "0px 0px 0px 5px"
    }
}

function abrirMenu2(){
    if(menuProducts.className != "products-list-head active"){
        menuProducts.classList.add('active');

        btnMenuHead.style.transform = "rotate(180deg)"
        btnMenuHead.style.padding = "0px 5px 3px 0px"
            
    }else{
        menuProducts.classList.remove('active');

        btnMenuHead.style.transform = "rotate(0deg)"
        btnMenuHead.style.padding = "0px 0px 0px 5px"
    }
}

// --------------ABRIR POPUP----------
btnAbrirPopup1.addEventListener('click', function(){
    overlay1.classList.add('active');
    popup1.classList.add('active');
});
btnAbrirPopup2.addEventListener('click', function(){
    overlay2.classList.add('active');
    popup2.classList.add('active');
});
btnAbrirPopup3.addEventListener('click', function(){
    overlay3.classList.add('active');
    popup3.classList.add('active');
});
btnAbrirPopup4.addEventListener('click', function(){
    overlay4.classList.add('active');
    popup4.classList.add('active');
});
btnAbrirPopup5.addEventListener('click', function(){
    overlay5.classList.add('active');
    popup5.classList.add('active');
});
btnAbrirPopup6.addEventListener('click', function(){
    overlay6.classList.add('active');
    popup6.classList.add('active');
});

// -------BOTON CERRAR-------
btnCerrarPopup1.addEventListener('click', function(e){
    e.preventDefault();
    overlay1.classList.remove('active');
    popup1.classList.remove('active');
});

btnCerrarPopup2.addEventListener('click', function(e){
    e.preventDefault();
    overlay2.classList.remove('active');
    popup2.classList.remove('active');
});
btnCerrarPopup3.addEventListener('click', function(e){
    e.preventDefault();
    overlay3.classList.remove('active');
    popup3.classList.remove('active');
});

btnCerrarPopup4.addEventListener('click', function(e){
    e.preventDefault();
    overlay4.classList.remove('active');
    popup4.classList.remove('active');
});
btnCerrarPopup5.addEventListener('click', function(e){
    e.preventDefault();
    overlay5.classList.remove('active');
    popup5.classList.remove('active');
});

btnCerrarPopup6.addEventListener('click', function(e){
    e.preventDefault();
    overlay6.classList.remove('active');
    popup6.classList.remove('active');
});
