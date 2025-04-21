var welcome=document.querySelector('.welcome');
var spanname=document.querySelector(".spanname");
var mymodel=document.querySelector(".mymodel");
var allimage=Array.from( document.querySelectorAll("img"));
var btnlog=document.querySelector(".btnlog");
var exite=document.querySelector(".exite");
var rightt=document.querySelector(".rightt");
var leftt=document.querySelector(".leftt");
var barr=document.querySelector(".barr");
var list=[];
var index;
if(localStorage.getItem("keyy")){
    var list=JSON.parse(localStorage.getItem("keyy"));
}


var newname= list[list.length-1].name;

btnlog.addEventListener("click",function(){
    window.location.replace('../index.html')
})
spanname.innerHTML=newname;
for(var i=0;i<allimage.length;i++){
allimage[i].addEventListener("click",function(e){  
getcurrent(e);
    
});
}
function hidemodal(){
    mymodel.classList.add("d-none");
}
exite.addEventListener("click",hidemodal);

function getcurrent(e){
    var currentsrc=e.target;
    console.log(currentsrc);
    
     index=allimage.indexOf(currentsrc);
    console.log(index);
    
   var srcpic=e.target.getAttribute("src")
   var srcmodel=mymodel.querySelector("img");
   mymodel.querySelector("img").setAttribute("src",srcpic);
   mymodel.classList.remove("d-none");
   
}
   
   

    function getnext(){
     
        index++;
       if(index>=allimage.length) index=0;
      
      
       var newimage=allimage[index].getAttribute("src");
       mymodel.querySelector("img").setAttribute("src",newimage);
        
    }
    function getprevious(){
     
        index--;
       if(index==0) index=allimage.length-1;
      
     
       var newimage=allimage[index].getAttribute("src");
       mymodel.querySelector("img").setAttribute("src",newimage);
        
    }
rightt.addEventListener("click",getnext);
leftt.addEventListener("click",getprevious);
barr.addEventListener("click",function(){
    window.location.replace('../index.html');
})