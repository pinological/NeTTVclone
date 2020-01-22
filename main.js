function surf() {
    var id = 1234;
    var inter = parseInt(document.getElementById("pass").value);
    console.log("okokoko");
    console.log(inter);
    if (inter == 1234) {
        window.location.href = "main.html";
    } else {
        document.getElementById("loko").innerHTML = "wrong pin Try again";
    }
}

function test() {
    if (parseInt(document.getElementById("paaa").value) == parseInt(document.getElementById("paaa1").value)) {
        document.getElementById("confo").innerHTML = "Successfull";
    } else {
        document.getElementById("confo").innerHTML = "Different Password / Re Enter / Blank space";
    }
}