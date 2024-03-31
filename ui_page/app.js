function xyz()
{
    var x=document.getElementById("input1").value
    if(x<0)
    {
        document.getElementById("heading").innerHTML="enter positive value"
    }
else if(x%2==0)
    {
     var y= document.getElementById("heading")
     y.innerHTML=  `${parseInt(x)+2} ${parseInt(x)+4 } ${parseInt(x)+6}`
     
    }
    else if(x%2==1)
    {
        var y= document.getElementById("heading")
     y.innerHTML=  `${parseInt(x)+2} ${parseInt(x)+4 } ${parseInt(x)+6}`
    }
 }