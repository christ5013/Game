

function table() {
    var b1, b1, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;

    if (b1 == "X" && b2 == "X" && b3 == "X" || b1 == "X" && b5 == "X" && b9 == "X" ||
        b1 == "X" && b4 == "X" && b7 == "X" || b2 == "X" && b5 == "X" && b8 == "X" ||
        b3 == "X" && b6 == "X" && b9 == "X" || b4 == "X" && b5 == "X" && b6 == "X" ||
        b7 == "X" && b8 == "X" && b9 == "X" || b3 == "X" && b5 == "X" && b7 == "X") {
        document.getElementById('table').style.display = "none";
        document.getElementById('win1').style.display = "block";
        document.getElementById('btn').style.display = "block";
        document.getElementById('btn').attributes.style.value = "margin-top:10px;display:block";
    }

    else if (b1 == "0" && b2 == "0" && b3 == "0" || b1 == "0" && b4 == "0" && b7 == "0" ||
        b1 == "0" && b5 == "0" && b9 == "0" || b2 == "0" && b5 == "0" && b8 == "0" ||
        b3 == "0" && b6 == "0" && b9 == "0" || b3 == "0" && b5 == "0" && b7 == "0" ||
        b4 == "0" && b5 == "0" && b6 == "0" || b7 == "0" && b8 == "0" && b9 == "0") {
        document.getElementById('table').style.display = "none";
        document.getElementById('win2').style.display = "block";
        document.getElementById('btn').style.display = "block";
        document.getElementById('btn').attributes.style.value = "margin-top:10px;display:block";
    }

    else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
        || b2 == '0') && (b3 == 'X' || b3 == '0') &&
        (b4 == 'X' || b4 == '0') && (b5 == 'X' ||
            b5 == '0') && (b6 == 'X' || b6 == '0') &&
        (b7 == 'X' || b7 == '0') && (b8 == 'X' ||
            b8 == '0') && (b9 == 'X' || b9 == '0')) {
        document.getElementById('table').style.display = "none";
        document.getElementById('tie').style.display = "block";
        document.getElementById('btn').style.display = "block";

    }
}
function start() {
    var doc = document.getElementById('link').innerHTML = window.location.href;
    window.location.href = doc;
}
var flag = 1;
function B1() {
    if (flag == 1) {
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled = true;
        flag = 0;
        document.getElementById('span1').style.display = "none ";
        document.getElementById('span2').style.display = "block";
    }
    else {
        document.getElementById("b1").value = "0";
        document.getElementById("b1").disabled = true;
        flag = 1;
        document.getElementById('span2').style.display = "none";
        document.getElementById('span1').style.display = "block";
    }
}

function B2() {

    if (flag == 1) {
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disabled = true;
        flag = 0;
        document.getElementById('span1').style.display = "none";
        document.getElementById('span2').style.display = "block";
    }
    else {
        document.getElementById("b2").value = "0";
        document.getElementById("b2").disabled = true;
        flag = 1;
        document.getElementById('span2').style.display = "none";
        document.getElementById('span1').style.display = "block";
    }
}
function B3() {

    if (flag == 1) {
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        flag = 0;
        document.getElementById('span1').style.display = "none";
        document.getElementById('span2').style.display = "block";
    }
    else {
        document.getElementById("b3").value = "0";
        document.getElementById("b3").disabled = true;
        flag = 1;
        document.getElementById('span2').style.display = "none";
        document.getElementById('span1').style.display = "block";
    }
}
function B4() {

    if (flag == 1) {
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disabled = true;
        flag = 0;
        document.getElementById('span1').style.display = "none";
        document.getElementById('span2').style.display = "block";
    }
    else {
        document.getElementById("b4").value = "0";
        document.getElementById("b4").disabled = true;
        flag = 1;
        document.getElementById('span2').style.display = "none";
        document.getElementById('span1').style.display = "block";
    }
}
function B5() {

    if (flag == 1) {
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disabled = true;
        flag = 0;
        document.getElementById('span1').style.display = "none";
        document.getElementById('span2').style.display = "block";
    }
    else {
        document.getElementById("b5").value = "0";
        document.getElementById("b5").disabled = true;
        flag = 1;
        document.getElementById('span2').style.display = "none";
        document.getElementById('span1').style.display = "block";
    }
}
function B6() {

    if (flag == 1) {
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disabled = true;
        flag = 0;
        document.getElementById('span1').style.display = "none";
        document.getElementById('span2').style.display = "block";
    }
    else {
        document.getElementById("b6").value = "0";
        document.getElementById("b6").disabled = true;
        flag = 1;
        document.getElementById('span2').style.display = "none";
        document.getElementById('span1').style.display = "block";
    }
}
function B7() {

    if (flag == 1) {
        document.getElementById("b7").value = "X";
        document.getElementById("b7").disabled = true;
        flag = 0;
        document.getElementById('span1').style.display = "none";
        document.getElementById('span2').style.display = "block";
    }
    else {
        document.getElementById("b7").value = "0";
        document.getElementById("b7").disabled = true;
        flag = 1;
        document.getElementById('span2').style.display = "none";
        document.getElementById('span1').style.display = "block";
    }
}
function B8() {

    if (flag == 1) {
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disabled = true;
        flag = 0;
        document.getElementById('span1').style.display = "none";
        document.getElementById('span2').style.display = "block";
    }
    else {
        document.getElementById("b8").value = "0";
        document.getElementById("b8").disabled = true;
        flag = 1;
        document.getElementById('span2').style.display = "none";
        document.getElementById('span1').style.display = "block";
    }
}
function B9() {

    if (flag == 1) {
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        flag = 0;
        document.getElementById('span1').style.display = "none";
        document.getElementById('span2').style.display = "block";
    }
    else {
        document.getElementById("b9").value = "0";
        document.getElementById("b9").disabled = true;
        flag = 1;
        document.getElementById('span2').style.display = "none";
        document.getElementById('span1').style.display = "block";
    }
}

