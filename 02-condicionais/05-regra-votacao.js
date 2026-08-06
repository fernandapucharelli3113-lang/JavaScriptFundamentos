const idade = 70;

//idade < 16 Não pode votar
//idade 16 até 18 Voto facultativo
//idade 18 > voto e obrigatorio

if (idade < 0){
    console.log("Idade inválida.");
}else if(idade <= 15){
    console.log("Não pode votar.");
}else if(idade <= 18){
    console.log("Voto facultativo.");
}else {
      console.log("Voto obrigatório");
}