function display()
{
   var input1= document.getElementById("input1")
   var input2= document.getElementById("input2")
   var input3= document.getElementById("input3")
   var input4= document.getElementById("input4")
   if(input1.checked==true)
   {
    alert("answer selected is" +input1.value)
   }
   else if(input2.checked==true)
   {
    alert("answer selected is" +input2.value)
   }
   else if(input3.checked==true)
   {
    alert("answer selected is" +input3.value)
   }
   else if(input4.checked==true)
   {
    alert("answer selected is" +input4.value)
   }
   else{
    alert ("no answer is selected")
   }
}


