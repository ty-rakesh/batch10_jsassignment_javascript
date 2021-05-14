


 var btn = document.getElementById("test");

 btn.addEventListener("click" ,addCar);
 var temp=true;
 
 var list = document.getElementById("cars");
 function addCar(){
     if(temp==true)
     {
 var x = document.createElement("li")
     x.innerText = "lambo";
     console.log(list.childNodes);
     list.insertBefore(x,list.childNodes[4]);
     temp=false;
     }
     else{
         return false;
     }
 
 }

var y=document.getElementById("test")
y.removeEventListener("click",removecar)
var list = document.getElementById("cars")
var temp1=true;
 function removecar(){
     if(temp1==true) {
        list.removeChild(y.firstElementChild);
        temp1=false;
     }
     else{
        return false 
     }  
 }

