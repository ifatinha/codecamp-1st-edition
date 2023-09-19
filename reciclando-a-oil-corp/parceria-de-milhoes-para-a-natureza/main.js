// Após vocês promoverem diversas atividades a favor da natureza, a liderança e a diretoria 
// da Oil Corp convidaram vocês para os ajudarem a preservar a natureza e a serem uma empresa 
// sustentável. Para isso, eles precisam de ajuda para criar o algoritmo que direciona os 
// resíduos da água para a estação de tratamento correta antes de ser descartada no rio Jacará-Mirim.

// Via de regra, as moléculas que possuem até 5 caracteres passam pelo Filtro Normal, 
// as que possuem até 10 caracteres passam pelo Filtro Específico e as que possuem mais 
// que 10 caracteres passam pelo Filtro Duplo Especifico. Essas moléculas estão misturadas 
// nos resíduos, se houver ao menos uma que tenha o número específico de caracteres esse 
// resíduo já deve passar pelo filtro correto.

// Crie um código que implemente essas regras e imprima o filtro adequado para cada molécula:

// <= 5 - Imprimir "Filtro Normal";
// > 5 e <= 10 - Imprimir "Filtro Específico";
// > 10 - Imprimir "Filtro Duplo Específico";

import func from '../../auxiliaryFunctions.js';

func.getAppetizer(['HNO3, HCCH, NO3']);

const arr = func.gets().split(", ");
let qualFiltro = 0;

qualFiltro = arr.find((item) => {
    if (item.length <= 5) {
        return item;
    } else if (item.length > 5 && item.length <= 10) {
        return item;
    } else {
        return item;
    }
});

if (qualFiltro.length <= 5) {
    func.print("O filtro deve ser: Filtro Normal");
} else if (qualFiltro.length > 5 && qualFiltro.length <= 10) {
    func.print("O filtro deve ser: Filtro Específico");
} else {
    func.print("O filtro deve ser: Filtro Duplo Específico");
}