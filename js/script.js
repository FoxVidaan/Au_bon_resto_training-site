let input = document.querySelectorAll("input");

function Setup() {
    document.querySelector("#reserv").addEventListener("click", Remplir_obj);
    input[0].addEventListener("focusout", function () {
        verifForm(0, 3)
    });
    input[1].addEventListener("focusout", function () {
        verifForm(1, 3)
    });
    input[2].addEventListener("focusout", function () {
        verifForm(2, 0, 3)
    });
    input[3].addEventListener("focusout", function () {
        verifForm(3, 0, 2)
    });
    input[4].addEventListener("focusout", function () {
        verifForm(4, 4)
    });
    document.querySelector("textarea").addEventListener("focusout", function () {
        if (document.querySelector("textarea").value.length < 10) {
            document.querySelector("textarea").style.border = "";
            document.querySelector("textarea").style.borderColor = '#FF0000';
            document.querySelector("textarea").placeholder = "Minimum " + 10 + " caractère";
        } else {
            document.querySelector("textarea").style.borderColor = "#00FF00";
        }
    });


}

window.addEventListener("load", Setup);

function verifForm(index, minCaractere, index2) {
    if (index2 == undefined) {
        if (input[index].value.length < minCaractere) {
            input[index].style.borderColor = '#FF0000';
            input[index].placeholder = "Minimum " + minCaractere + " caractère";
        } else {
            input[index].style.borderColor = "#00FF00";
        }
    } else if (input[index].value.length == 0 && input[index2].value.length == 0) {
        input[index].style.borderColor = '#FF0000';
        input[index2].style.borderColor = '#FF0000';
    } else {
        input[index].style.borderColor = '#00FF00';
        input[index2].style.borderColor = '#00FF00';

    }
}

function Remplir_obj() {
    let obj = document.querySelector("#obj");
    obj.value = "RESERVATION";
}
