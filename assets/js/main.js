let  mybutton = document.querySelector("#btn-menu");
let  quant = document.querySelector("#quant");
  mybutton.onclick = function (){
    // hide Add to cart
    mybutton.style.display = "none";
    // display block for quant
    quant.style.display = "block";
  }
