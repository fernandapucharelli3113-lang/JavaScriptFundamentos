const saladaDeFrutas = ["Maça", "Banana", "Mamão", "Morango"];

console.log("Ingredientes iniciais: ", saladaDeFrutas);

saladaDeFrutas.push("Uva");
saladaDeFrutas.unshift("Abacaxi");

console.log("Salada completa");

for( const fruta of saladaDeFrutas){
    console.log(`-${fruta}`);
}
console.log("Total de frutas:", saladaDeFrutas.length);
console.log(`Total de frutas: ${saladaDeFrutas.length}`);
