count=0
function inc()
{
  count++;
  document.getElementById("heading").innerHTML=count

  if(count>10){
      document.getElementById("heading").innerHTML="thank you"
     
 }
  
}
function dec()
{
    count--;
    document.getElementById("heading").innerHTML=count

    if(count<-10){
      var x=document.getElementById("heading")
      x.style.background="pink"
      x.style.border="2px dotted red"
    }
}
function reset()
{
    count=0;
    document.getElementById("heading").innerHTML=count
   

}
function refresh()
{
  location.reload()
}