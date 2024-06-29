function fun() {
    let random = Math.floor(Math.random() * 10) + 1;
    let inpName = document.getElementById("input").value;
    if (inpName <= 0 || inpName > 10) {
        document.getElementById("demo").textContent = "Number is not in range";
        document.getElementById("demo").style.color = "red"
    }
    else if (isNaN(inpName)) {
        document.getElementById("demo").textContent = "Please enter valid Number";
        document.getElementById("demo").style.color = "yellow"
    }
    else if (inpName == "") {
        document.getElementById("demo").textContent = "Fill the box";
        document.getElementById("demo").style.color = "pink"
    }
    else {
        if (inpName === random) {
            document.getElementById("demo").textContent = "You guessed the right number!";
            document.getElementById("demo").style.color = "green"
        }
        else if (inpName < random) {
            document.getElementById("demo").textContent = "Too Low! Try again.";
            document.getElementById("demo").style.color = "red"
        }
        else {
            document.getElementById("demo").textContent = "Too High! Try again.";
            document.getElementById("demo").style.color = "red"
        }
    }
    document.getElementById('input')
        .value = "";
}

