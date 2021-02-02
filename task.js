function myFunc(){
    
    var val=document.getElementById("form").elements[0].value;
    var val1=document.getElementById("form").elements[1].value;
    var val2=document.getElementById("form").elements[2].value;
    var val3=document.getElementById("form").elements[3].value;
    var msg="First Name: "+val+"<br>Last Name: "+val1+"<br>Email: "+val2+"<br>Contact No.: "+val3;
    document.getElementById("content").innerHTML="Your details have been saved<br>"+msg;
}

