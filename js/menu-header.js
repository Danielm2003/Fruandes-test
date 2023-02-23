   
/*PRINCIPAL PAGE*/
let btndMenuHome = document.getElementById("button-menu")
let menuHome = document.getElementById("menu")

/*HEADER PAGES*/
let btnMenuHead = document.getElementById("button-menu-products")
let menuProducts = document.getElementById("menu-products") 

let btnMenuExpandHead = document.getElementById("menu-expand-head")
let menuExpandHead = document.getElementById("container-menu-expand")
    
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

// function menuExpand(){
    
    

// }

btnMenuExpandHead.addEventListener('click', function(){
    // menuExpand()
    if (menuExpandHead.className.includes('disabled')){
        menuExpandHead.classList.remove('disabled');
        console.log("abrir menu")
    }
    else{
        console.log("cerrar menu")
        menuExpandHead.classList.add('disabled');
    }
    // if (menuExpandHead.className == "container-menu-expand"){
    //     console.log("abrir menu")
    //     menuExpandHead.classList.add('disabled');
    // }
})