function verify() {
    console.log("a, b, c, d")
    let a = parseFloat(elementA.innerText);
    let b = parseFloat(elementB.innerText);
    let c = parseFloat(elementC.innerText);
    let d = parseFloat(elementD.innerText)
    console.log(a, b, c, d);

    // 1014. Даны вещественные положительные числа a, b, c, d. Выясните, может ли
    // прямоугольник со сторонами a, b уместиться внутри прямоугольника со сторонами c, d так,
    // чтобы каждая сторона внутреннего прямоугольника была
    // параллельна или перпендикулярна стороне внешнего прямоугольника. 

    if (isNaN(elementA.innerText) ||
        isNaN(elementB.innerText) ||
        isNaN(elementC.innerText) ||
        isNaN(elementD.innerText)) {
        result = "Данные некорректны!"
        document.getElementById("result").innerText = result;
    }

    else if (a <= 0 || b <= 0 || c <= 0 || d <= 0) {
        result = "Данные некорректны!"
        document.getElementById("result").innerText = result;
    }

    else if ((a <= c && b <= d) || (a <= d && b <= c) || (b <= c && a <= d) || (b <= d && a <= c)) {
        result = "Уместиться."
        document.getElementById("result").innerText = result;
    } else {
        result = "Не уместиться."
        document.getElementById("result").innerText = result;
    }
}

const elementA = document.getElementById("a");
const elementB = document.getElementById("b");
const elementC = document.getElementById("c");
const elementD = document.getElementById("d");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);