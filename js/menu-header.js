   
/*PRINCIPAL PAGE*/
let btndMenuHome = document.getElementById("button-menu")
let menuHome = document.getElementById("menu")

/*HEADER PAGES*/
let btnMenuHead = document.getElementById("button-menu-products")
let menuProducts = document.getElementById("menu-products") 
    
// -------------ABRIR MENU HEAD----------------
function abrirMenu(){
    if(menuHome.className != "products-list active"){
        menuHome.classList.add('active');

        btndMenuHome.style.transform = "rotate(180deg)"
        btndMenuHome.style.padding = "0px 8px 5px 0px"

    }else{
        menuHome.classList.remove('active');

        btndMenuHome.style.transform = "rotate(0deg)"
        btndMenuHome.style.padding = "0px 0px 0px 8px"
    }
}

function abrirMenu2(){
    if(menuProducts.className != "products-list-head active"){
        menuProducts.classList.add('active');

        btnMenuHead.style.transform = "rotate(180deg)"
        btnMenuHead.style.padding = "0px 8px 3px 0px"
            
    }else{
        menuProducts.classList.remove('active');

        btnMenuHead.style.transform = "rotate(0deg)"
        btnMenuHead.style.padding = "0px 0px 0px 8px"
    }
}