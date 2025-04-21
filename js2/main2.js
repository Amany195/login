
var logbut =document.querySelector("#logbut");
var formm=document.querySelector(".formm");
var yourmail=document.querySelector(".yourmail");
var yourpassword=document.querySelector(".yourpassword");
var yourname=document.querySelector(".yourname");
var message1=document.querySelector(".message1");
var signbutn=document.querySelector(".signbutn")
var nameregex=/^[A-Z][a-z]{3,15}$/
var mailRegex=/^[a-z]{3,}[0-9][0-9]@gmail\.(com)$/;
var passregex=/^[a-zA-z0-9]{5,15}$/;
var list=[];
var yes=document.querySelector(".yes");


if(localStorage.getItem("keyy")){
    var list=JSON.parse(localStorage.getItem("keyy"));
}
formm.addEventListener("submit",add);

function add(e){
e.preventDefault();
  
    if(validate(passregex,yourpassword)&& validate(mailRegex,yourmail)&& validate(nameregex,yourname)){
    
       yes.classList.remove("d-none");
        console.log("hi");
        
    var listemail={
       name:yourname.value,
        mail:yourmail.value,
        password:yourpassword.value,

    };
    
    for(var i=0;i<list.length;i++){
        if(list[i].mail==yourmail.value){
            Swal.fire({
                icon: "info",
                title: "Oops...",
                text: "this email is already exist",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
            console.log("this is exist");
            //    window.location.replace("../index.html");
               return false;
              
               
        }

    }
    list.push(listemail);
    localStorage.setItem("keyy",JSON.stringify(list));
    // message1.classList.add("d-none");
    window.location.replace("../index.html");
}else{
    yes.classList.add("d-none")
    message1.classList.remove("d-none");
    console.log("no");
}
}


function search(){
    for(var i=0;i<list.length;i++){
        if(list[i].mail==yourmail.value){
              
            //    window.location.replace("../index.html");
               return false;
        }
    }
}
logbut.addEventListener("click",add);
logbut.addEventListener("click",search);
// logbut.addEventListener("click",search);
    
function validate(regex,element){
    if(regex.test(element.value)){
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
        element.nextElementSibling.classList.add("d-none");
        return true
    }else{
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
        element.nextElementSibling.classList.remove("d-none");
        return false;
    }
}

yourmail.addEventListener("input",function(){
    validate(mailRegex,yourmail);
});
yourpassword.addEventListener("input",function(){
    validate(passregex,yourpassword);
});
yourname.addEventListener("input",function(){
    validate(nameregex,yourname);
});
signbutn.addEventListener("click",function(){
    window.location.replace('../index.html')
})