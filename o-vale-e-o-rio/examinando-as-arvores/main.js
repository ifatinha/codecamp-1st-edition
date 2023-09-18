// Chegando no Vale, ao lado do rio Jacará-Mirim, a natureza se mostra exuberante. 
// Porém, é necessário verificar as árvores da região estão saudáveis ou necessitando de cuidados. 
// Para isso, durante nossa jornada até o vale, utilizamos um dispositivo de ultrassom desenvolvido 
// por uma das CleanTechs parceiras, a Cleanduino (especializada em projetos com Arduino e 
// JavaScript, usando o Framework Johnny-Five). Através desse dispositivo coletamos uma lista 
// de amostras, onde cada registro tem o percentual de saúde da árvore avaliada.

// Crie um código que, para cada item dessa lista, verifique se a amostra está com um nível: 
// Bom, Aceitável ou Inaceitável. Para cada nível, imprima a ação que deve ser realizada 
// considerando as seguintes regras:

// Bom (mais de 75% de saúde na amostra)
// Imprima "Descartar da lista"

// Aceitável (mais de 50% e menos de 75%)
// Imprima "Manter sob observação"

// Inaceitável (menos de 50%)
// Imprima "Isolar e iniciar protocolo de cuidados"
// Lembrando que todas as amostras são de exatamente 100g e as listas terão tamanhos variados.

import func from '../../auxiliaryFunctions.js';
const arr = [2, 10, 15];

arr.forEach((item) => {
    if (item >= 75) {
        func.print("Descartar da Lista");
    } else if (item >= 50 && item < 75) {
        func.print("Manter sob observação");
    } else {
        func.print("Isolar e iniciar protocolo de cuidados");
    }
})