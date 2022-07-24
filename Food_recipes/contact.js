
function validation(value) {
    
     var ptr=/^[0-9]/;
     var letterNumber = /^[0-9a-zA-Z]+$/;
     var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
   var  val=document.forms["myform"]['fname'].value;
    // console.log(val);
    if (val=="") {
        var error=document.querySelector(".first");
        var nextSibling = error.nextElementSibling;
        nextSibling.innerHTML="Fill First Name Field";
    }
   else if((val.length<=2) || (val.length>20)){
    var error=document.querySelector(".first");
    var nextSibling = error.nextElementSibling;
    nextSibling.innerHTML="Character Enter must be 2 and 20 between";
    }
   else if(ptr.test(val)){
    var error=document.querySelector(".first");
    var nextSibling = error.nextElementSibling;
    nextSibling.innerHTML="Only Character allowed";
  }
  else if(format.test(val)){
    var error=document.querySelector(".first");
    var nextSibling = error.nextElementSibling;
    nextSibling.innerHTML="Not Enter Any Spacial Character";
  }
  else{
     var error=document.querySelector(".first");
    var nextSibling = error.nextElementSibling;
    nextSibling.style.display="none";
    nextSibling.nextElementSibling.innerHTML=document.querySelector(".first").value;
    // console.log(nextSibling.nextElementSibling);
    }

    var  lastval=document.forms["myform"]['lname'].value;
    // console.log(lastval);

    if (lastval=="") {
        var error=document.querySelector(".last");
        var nextSibling = error.nextElementSibling;
        nextSibling.innerHTML="Fill Last Name Field";
    } 
    else if((lastval.length<=2) || (lastval.length>20)){
        var error=document.querySelector(".last");
        var nextSibling = error.nextElementSibling;
        nextSibling.innerHTML="Character Enter must be 2 and 20 between"; 
    }
    else if(ptr.test(lastval)){
        var error=document.querySelector(".last");
        var nextSibling = error.nextElementSibling;
        nextSibling.innerHTML="Only Character allowed"; 
    }
    else if(format.test(lastval)){
        var error=document.querySelector(".last");
        var nextSibling = error.nextElementSibling;
        nextSibling.innerHTML="Not Enter Any Spacial Character";
      }
    else{
    var error=document.querySelector(".last");
    var nextSibling = error.nextElementSibling;
    nextSibling.style.display="none";
    nextSibling.nextElementSibling.innerHTML=document.querySelector(".last").value;
    // console.log(nextSibling.nextElementSibling); 
    }

    var  emailval=document.forms["myform"]['email'].value;
    // console.log(emailval);

    if (emailval=="") {
        var error=document.querySelector(".email");
        var nextSibling = error.nextElementSibling;
        nextSibling.innerHTML="Fill Email Id Field";
    }
    else if((emailval.length<=5)){
        var error=document.querySelector(".email");
        var nextSibling = error.nextElementSibling;
        nextSibling.innerHTML="Not Enter Valid Email Id";

    }
    else if((emailval.charAt(emailval.length-4)!='.') && (emailval.charAt(emailval.length-3)!='.')){
        var error=document.querySelector(".email");
        var nextSibling = error.nextElementSibling;
        nextSibling.innerHTML="(.) Dot Are Not valid Position";
    }
    else{
        var error=document.querySelector(".email");
    var nextSibling = error.nextElementSibling;
    nextSibling.style.display="none";
    nextSibling.nextElementSibling.innerHTML=document.querySelector(".email").value;
    // console.log(nextSibling.nextElementSibling);
    }
    
    var  numval=document.forms["myform"]['number'].value;
    // console.log(numval);

    if (numval=="") {
        var error=document.querySelector(".number");
        var nextSibling = error.nextElementSibling;
        nextSibling.innerHTML="Fill Phone number field";
    }

    else if(numval.length!=10){
        var error=document.querySelector(".number");
        var nextSibling = error.nextElementSibling;
        nextSibling.innerHTML="Enter Only 10 Digits"; 
    }
    else{
        var error=document.querySelector(".number");
    var nextSibling = error.nextElementSibling;
    nextSibling.style.display="none";
    nextSibling.nextElementSibling.innerHTML=document.querySelector(".number").value;
    // console.log(nextSibling.nextElementSibling);  
    }


    var  msgval=document.forms["myform"]['msg'].value;
    // console.log(msgval);

    if (msgval=="") {
        var error=document.querySelector(".msg");
        var nextSibling = error.nextElementSibling;
        nextSibling.innerHTML="Massage Field Required";
    }
    else{
        var error=document.querySelector(".msg");
    var nextSibling = error.nextElementSibling;
    nextSibling.style.display="none";
    nextSibling.nextElementSibling.innerHTML=document.querySelector(".msg").value;
    // console.log(nextSibling.nextElementSibling);
     }
     };

    
    function submit_by_class(){

    var v3=[];
     for (let i = 0; i <document.getElementsByClassName("input-group").length-1; i++) {
            var v1=document.getElementsByClassName("input-group")[i];
            // console.log(v1);

           var v2= v1.querySelector("p");
               v3[i]= v2.innerHTML;
        //    console.log(v2);
          ;
        //  console.log(i);
        }
        var temp=0;
        for (let index = 0; index < v3.length; index++) {
            
            if(v3[index]=='')
            {
                temp=1;
            }
             
        }
       if (temp==0) {
       
        Swal.fire({
            icon: 'success',
            title: "Submitted",
            text: 'Registration Successfully',
            showConfirmButton: false,
                    timer:1500
        })
         .then((result) => {
                window.location.href = "file:///C:/temp/pooja/Recipes_website/Food_recipes/contact1.html";
        });
       }
       else if(temp==1)
       {
        Swal.fire({
            icon: 'warning',
            title: "Error",
            text: 'Something is wrong',
            showConfirmButton: false,
                    timer: 1500
        })
       }
}

    





        
     


