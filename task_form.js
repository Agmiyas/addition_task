function verify() {
    console.log("a, b, c, d")
    let a = parseFloat(elementA.value);
    let b = parseFloat(elementB.value);
    let c = parseFloat(elementC.value);
    let d = parseFloat(elementD.value)
    console.log(a, b, c, d);

    if (a <= 0 || b <= 0 || c <= 0 || d <= 0) {
        result = "Данные некорректны!"
        document.getElementById("result").value = result;
        check = false;
    }

    else if ((a <= c && b <= d) || (a <= d && b <= c) || (b <= c && a <= d) || (b <= d && a <= c)) {
        result = "Уместиться."
        document.getElementById("result").value = result;
        check = true;
    } else {
        result = "Не уместиться."
        document.getElementById("result").value = result;
        check = false;
    }
}

function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}

let result;
let check;

const elementA = document.getElementById("a");
const elementB = document.getElementById("b");
const elementC = document.getElementById("c");
const elementD = document.getElementById("d");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)