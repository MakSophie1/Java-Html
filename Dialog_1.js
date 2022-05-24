var person = {
    "SNILS 1": ["Иванов", "Иван", "Иванович", 15, "мая", 1974, "м","исполнено"],
    "SNILS 2": ["Сидоров", "Петр", "Сидорович", 20, "мая", 1980, "м","медотвод"],
    "SNILS 3": ["Прошкина", "Ульяна", "Батьковна", 02, "марта", 1900, "ж","назначено"],
    "SNILS 4": ["Макарова", "Софья", "Андреевна", 04, "сентября", 2002, "ж","назначено"],
    "SNILS 5": ["Потапов", "Сергей", "Иванович", 02, "января", 1966, "м","назначено"],
    "SNILS 6": ["Семёнова", "Светлана", "Георгиевна", 19, "декабря", 2000, "ж","медотвод"],
    "SNILS 7": ["Комаров", "Олег", "Владимирович", 03, "мая", 1971, "м","назначено"],
    "SNILS 8": ["Тимирязев", "Тимофей", "Арсеньевич", 06, "октября", 1996, "м","медотвод"],
    "SNILS 9": ["Трошина", "Любовь", "Сергеевна", 08, "ноября", 1947, "ж","медотвод"],
    "SNILS 10": ["Прокопенко", "Галина", "Семёновна", 13, "июля", 1987, "ж","назначено"],
};
console.log(person);

let SNILS;
var FirstFunction = function (person,SNILS) {
    SNILS=prompt("Введите SNILS пациента", SNILS);
    infoname=person[SNILS];
    //console.log(infoname);
    alert("Информация о пациенте"+infoname);
    statusPriv = person[SNILS][7];
    console.log(statusPriv);
};
/* let phase;
phase=prompt("Введите действие или медотвод или назначено или исполнено", phase);
infoname.push(phase);
console.log(infoname);
person[SNILS]=infoname;
console.log(person);*/
// Извлекаем информацию ог текущем статусе прививки
var SecondFunction = function (statusPriv,infoname) {

    //statusPriv = person[SNILS][7];

   //Проверяем возможность изменения статуса
if (statusPriv === "исполнено") {
    alert("Отказано в прививке пациенту" + infoname);
} else if (statusPriv === "медотвод") {
    alert("Отказано в прививке пациенту" + infoname);
} else {
    alert("Исполнить прививку пациенту" + infoname);      
} 
}
ForSecond = FirstFunction(person,SNILS);
SecondFunction(statusPriv,infoname);
//Предлагаем закончить или продолжить работу в этом окне
while (confirm("Продолжить проверку прививочного статуса")) {   
    ForSecond = FirstFunction(person,SNILS);
SecondFunction(statusPriv,infoname);

}

console.log("Сеанс проверки прививочного статуса закончен")