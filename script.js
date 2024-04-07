
function myFunction(){
   let celsius=document.querySelector("#celsius");
let result=document.querySelector("#result");


if(celsius.value)
result.value=(celsius.value * 9/5) + 32 ;
else
celsius.value=(result.value - 32) * 5/9 ;

}

function clearFunction(){
    result.value="";
    celsius.value="";
}
   



