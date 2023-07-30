function x(){
    var text = document.getElementById("input");
    if(event.target.innerHTML != "=" && event.target.innerHTML !="C"){
        text.innerHTML = text.innerHTML + event.target.innerHTML;    
    }else if(event.target.innerHTML == "="){
        text.innerHTML = eval(text.innerHTML);
    }else if(event.target.innerHTML = "C"){
        text.innerHTML = "";
    }
}

var keys = document.getElementsByClassName("card");
for(var i = 0; i < keys.length; i++){
    keys[i].addEventListener("click",x);
    
}
