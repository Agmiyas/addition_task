const node_for_click = document.getElementById("for_click")

function getInfoFromDOM() {
    const organisation = document.getElementsByTagName('b')[0].innerText;
    const issueData = document.getElementsByTagName('b')[1].innerText;
    const code = document.getElementsByTagName('b')[2].innerText;
    const lastName = document.getElementsByTagName('b')[3].innerText;
    const firstName = document.getElementsByTagName('b')[4].innerText;
    const surname = document.getElementsByTagName('b')[5].innerText;
    const gender = document.getElementsByTagName('b')[6].innerText;
    const birthYear = document.getElementsByTagName('b')[7].innerText;
    const birthPlace = document.getElementsByTagName('b')[8].innerText;
    
    console.log("Паспорт выдан: " + organisation);
    console.log("Дата выдачи: " + issueData);
    console.log("Код подразделения: " + birthYear);
    console.log("Фамилия: " + lastName);
    console.log("Имя: " + firstName);
    console.log("Отчество: " + surname);
    console.log("Пол: " + gender);
    console.log("Год рождения: " + birthYear);
    console.log("Место рождения: " + birthPlace);
}

node_for_click.addEventListener("click",getInfoFromDOM)