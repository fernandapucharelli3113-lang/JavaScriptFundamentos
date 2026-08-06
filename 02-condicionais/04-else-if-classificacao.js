const idade = 35;

//criança 0 até 12
//adolescente 13 até 17
//adulto 18 até 59
//idoso 60+

if (idade < 0){
    console.log("Idade inválida.");
}else if(idade <= 12){
    console.log("Criança.");
}else if(idade <= 17){
    console.log("Adolescente.");
}else if(idade <= 59){
    console.log("Adulto.");
}else {
    console.log("Idoso.");
}