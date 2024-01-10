
var toastTrigger =Array.from( document.getElementsByClassName('liveToastBtn'))
var toastLiveExample = document.getElementById('liveToast')
var toastLiveExample1 = document.getElementById('liveToast1')
var toastLiveExample2 = document.getElementById('liveToast2')

if (toastTrigger) {
    // console.log("run")
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.forEach(function(element){ 
    element.addEventListener('click', function() {
    toastBootstrap.show();
   
  })

})
  
}


var back=document.getElementById('bg');
var lg=document.getElementById('player');
var rg=document.getElementById('regist');

function f(){
    back.style.display="block";
    lg.style.display="flex";
    document.getElementsByTagName('body')[0].style.overflowY='hidden';
}
// function ff(){
//     back.style.display="block";
//     rg.style.display="flex";
//     document.getElementsByTagName('body')[0].style.overflowY='hidden';
// }

document.getElementsByClassName('cross')[0].addEventListener('click',function(){
    // console.log("run");
    back.style.display="none";
    lg.style.display="none";
    // rg.style.display="none";
    document.getElementsByTagName('body')[0].style.overflowY='visible';
})
document.getElementsByClassName('cross')[1].addEventListener('click',function(){
    // console.log("run");
    back.style.display="none";
    // lg.style.display="none";
    rg.style.display="none";
    document.getElementsByTagName('body')[0].style.overflowY='visible';
})

document.getElementsByClassName('register')[0].addEventListener('click',function(){
    // console.log("run");
    lg.style.display="none";
    rg.style.display="flex";
})
document.getElementsByClassName('lgn')[1].addEventListener('click',function(){
    // console.log("run");
    lg.style.display="flex";
    rg.style.display="none";
})

function lshow(){
    var lp=document.getElementById('pas');
    if(lp.type=="password"){
        lp.type="text";
        document.getElementsByClassName('eye')[0].classList.remove("fa-eye");
        document.getElementsByClassName('eye')[0].classList.add("fa-eye-slash");
    }
    else{
        lp.type="password";
        document.getElementsByClassName('eye')[0].classList.remove("fa-eye-slash");
        document.getElementsByClassName('eye')[0].classList.add("fa-eye");
    }
}
function rshow(){
    var rp=document.getElementById('pass');
    if(rp.type=="password"){
        rp.type="text";
        document.getElementsByClassName('eye')[1].classList.remove("fa-eye");
        document.getElementsByClassName('eye')[1].classList.add("fa-eye-slash");
    }
    else{
        rp.type="password";
        document.getElementsByClassName('eye')[1].classList.remove("fa-eye-slash");
        document.getElementsByClassName('eye')[1].classList.add("fa-eye");
    }
}

// =====================================
function s(){
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample1)
    toastBootstrap.show();
}
function c(){
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample2)
    toastBootstrap.show();
}

function valid(){
    // console.log("called");
    var name=n.value;
    var email1=e.value;
    var email2=e2.value;
    var mobile=parseInt(m.value);
    // console.log(name);
    if(name!=""){
    if(name==1||name==2||name==3||name==4||name==5||name==6||name==7||name==8||name==9){
        document.getElementById('rn').innerHTML="Invalid Input";
        // console.log("call");
    }
    else{
        document.getElementById('rn').innerHTML="";
    }
    }
    
    c1=email1.indexOf('@');
    c2=email1.indexOf('.com');
    f1=email2.indexOf('@');
    f2=email2.indexOf('.com');
    // console.log(c1);
    if(email1!=""){
    if(c1==-1||c2==-1){
        document.getElementById('re').innerHTML="Invalid Email";
    }
    else{
        document.getElementById('re').innerHTML="";
    }
    }
    if(email2!=""){
    if(f1==-1||f2==-1){
        document.getElementById('le').innerHTML="Invalid Email";
    }
    else{
        document.getElementById('le').innerHTML="";
    }
    }
var c=0;
// console.log(c);
for(i=mobile;i>0;i=parseInt(i/10)){
    c++;
}
// console.log(c);
if(c!=0){
if(c==10){
    document.getElementById('rm').innerHTML="";
}
else{
    document.getElementById('rm').innerHTML="Invalid Mobile No.";
}
}
}

// ===================================================================================
window.addEventListener('scroll',function(){
    // console.log(this.scrollY);
    if(this.scrollY>20){
    document.getElementById('arrow').style.display='inline';
    }
    else{
        document.getElementById('arrow').style.display='none';
    }
})
document.getElementById('arrow').addEventListener('click',function(){
    document.documentElement.scrollTop=0;
})