function FilterOpen(){

    if( document.getElementsByClassName("filter")[0].style.display == "block"){
        document.getElementsByClassName("filter")[0].style.display = "none";
    }else{
        document.getElementsByClassName("filter")[0].style.display = "block"; 
    }
}


function FilterClose(){

        document.getElementsByClassName("filter")[0].style.display = "none"; 
    
}