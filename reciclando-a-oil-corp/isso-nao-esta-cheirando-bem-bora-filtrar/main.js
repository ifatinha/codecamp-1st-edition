// A Oil Corp abriu o jogo e entregou para vocês uma lista contendo vários gases que eles 
// liberam durante a extração de óleo. Alguns desses gases são extremamente prejudiciais 
// para a camada de ozônio e para a natureza local como: NO2, SO2, CO e FHO.

// Durante a extração os gases saem misturados. Crie um código que, de acordo com a lista, 
// verifique se há pelo menos UM desses gases. Se não houver, imprima que deverá passar 
// por um Filtro Simples. Se houver, imprima no console que deverá passar por um 
// Filtro Especial e especifique qual gás.

// A entrada será uma lista de listas com as moléculas que devem ser analisadas. 
// A saída deve ser qual filtro deve ser utilizado para filtrar. Caso tenha uma dessas 
// moléculas prejudiciais, a saída deve ser um filtro específico para a molécula X.

// Nesse nosso desafio se houver a molécula prejudicial na entrada será apenas UMA.

import f from '../../auxiliaryFunctions.js';

f.getAppetizer(['CO2, CO', 'NH3, Cl2', '']);

let lista1 = f.gets().split(', ');
let lista2 = f.gets().split(', ');
let lista3 = f.gets().split(', ');

const arr = lista1.concat(lista2, lista3);
const moleculasProibidas = ['NO2', 'SO2', 'CO', 'FHO'];

let qualMolecula;

qualMolecula = moleculasProibidas.find((item) => {
    return arr.includes((item));
})

if (qualMolecula !== undefined) {
    f.print(`Filtro Específico para a Molécula ${qualMolecula}`);
} else {
    f.print(`Filtro Simples`);
}