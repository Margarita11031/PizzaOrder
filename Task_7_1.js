/**
 * Created by user on 10.10.2016.
 */

var pizzaForm;
var priceField;
window.addEventListener("load", init);

function init(){
    pizzaForm = document.pizzaOrder;
    priceField = document.getElementById("price");
    pizzaForm.addEventListener("click", calcPrice);
    var pizzaImgs =document.getElementsByName("imgPizza");
    for(var i = 0; i < pizzaImgs.length; i++){
        pizzaImgs[i].addEventListener("click", changeRadio);
    }

    calcPrice();
}

function calcPrice(){
    var pizzaPrice = 0;
    var formElems = pizzaForm.elements;
    for(var i=0; i < formElems.length; i++){
        if(formElems[i].checked){
            pizzaPrice += parseInt(formElems[i].dataset.price);
        }
    }
    priceField.innerHTML = pizzaPrice + ",00 grn";
    return pizzaPrice;
}

function changeRadio(){
    var radioBtnId = this.src;
    radioBtnId = radioBtnId.substring(radioBtnId.length-11,radioBtnId.length-4);
    var radioBtn = document.getElementById(radioBtnId);
    radioBtn.checked = true;
    var pizzaName = document.getElementById("pizzaName");
    pizzaName.innerHTML = radioBtn.value;
}