let outputScreen = document.getElementById("output")

function display(num) 
{
    outputScreen.value += num; //outputScreen.value = outputScreen.value + num;
}

function Clear() 
{
    outputScreen.value = "";
}

function Calculate() {

try {
    outputScreen.value = eval(outputScreen.value);
}

catch (err) {
    outputScreen.value = alert("Invalid Entry")
}
}

function del(){
    outputScreen.value = outputScreen.value.slice(0, -1);
}