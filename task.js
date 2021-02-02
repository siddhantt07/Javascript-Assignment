function myFunc(){
    document.getElementById("content").innerHTML="Your details have been saved";
    var val=document.getElementById("form").elements[0].value;
    var val1=document.getElementById("form").elements[1].value;
    var val2=document.getElementById("form").elements[2].value;
    var val3=document.getElementById("form").elements[3].value;
    var msg="First Name: "+val+"<br>Last Name: "+val1+"<br>Email: "+val2+"<br>Contact No.: "+val3;
    document.getElementById("content").innerHTML="Your details have been saved<br>"+msg;
}
/* Ajax
document.getElementById("button").addEventListener("click",function(){
    var xhttp;

    if (window.XMLHttpRequest)
    {// If the browser if IE7+[or]Firefox[or]Chrome[or]Opera[or]Safari
        xhttp=new XMLHttpRequest();
    }
    else
    {//If browser is IE6, IE5
        xhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    //var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(xhttp.readyState==4 && xhttp.status==200){
            document.getElementById("content").innerHTML=xhttp.responseText;
        }
    }
    xhttp.open("GET","ajax.txt",true);
    xhttp.send();
});*/
   

