const frutas = ["Banana", "Uva"];

frutas.unshift("Maça");
console.log("Após unshift: ", frutas);

const frutaRemovida = frutas.shift();
console.log("Removida: ", frutaRemovida);
console.log("Após shift: ", frutas);