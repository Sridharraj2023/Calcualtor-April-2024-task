let outputScreen = document.getElementById("output");

function display(num) {
    outputScreen.value += num;
}

function Clear() {
    outputScreen.value = "";
}

function Calculate() {
    try {
        outputScreen.value = eval(outputScreen.value);
    } catch (err) {
        alert("Invalid Entry");
        outputScreen.value = "";
    }
}

function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}
