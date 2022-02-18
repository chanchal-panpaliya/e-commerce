var productimg = document.getElementById("product-img");
var smallimg = document.getElementsByClassName("img-small-single-product");

for(let i=0 ; i<= smallimg.length-1 ; i++){
    smallimg[i].onclick = function(){
        productimg.src = smallimg[i].src;
    }
}

