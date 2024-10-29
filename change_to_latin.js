const node_for_click = document.getElementById("for_click")

function changeToLatin() {
    const lastName = document.getElementsByTagName('b')[3];
    const firstName = document.getElementsByTagName('b')[4];
    const surname = document.getElementsByTagName('b')[5];

    
    console.log(lastName.innerText);
    console.log(firstName.innerText);
    console.log(surname.innerText);
    if (lastName.innerHTML == "Башмаков") {
        lastName.innerHTML = "Bashmakov";
        firstName.innerHTML = "Amir";
        surname.innerHTML = "Saidovich";
    }
    else if (lastName.innerHTML == "Bashmakov") {
        lastName.innerHTML = "Башмаков";
        firstName.innerHTML = "Амир";
        surname.innerHTML = "Саидович";
    }
}

node_for_click.addEventListener("click",changeToLatin)