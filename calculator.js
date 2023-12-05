function valueAccess(event){
    console.log(event.target.value)
    result.value+=event.target.value

}

function clearScreen(){
    result.value=""
}

function evaluateExp(){

   exp=result.value
   res=eval(exp)
   result.value=res 


}