// display content
function displayNumbers(number){
    result.value += number
   
}
// clear function
function calcClear(){
    result.value = ""
}
// equals function
function calcEquals(){
    result.value=eval(result.value)
}
// backspace function
function calcBackspace(){
    result.value = result.value.slice(0, -1)
}