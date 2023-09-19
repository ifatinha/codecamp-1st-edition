// A equipe jurídica que está acompanhando vocês sugeriu que aplicassem, através da justiça, multas para a Oil Corp 
// caso eles não comecem a tratar todas as formas que estão poluindo a região. Além de 
// realizar protocolos de reflorestamento e cuidados com a fauna e a flora do vale, 
// respeitando a natureza.

// As atividades que demandam tratamento e atenção são: Reflorestamento, Esgoto Tratado, 
// Emissão de Carbono e Energia Sustentável. Para cada uma delas existem três 
// critério: Não feito, Em progresso e Feito. O que não foi feito deve receber multa, 
// o que está em progresso avaliação de progresso e o que está feito não multar.

// Crie um código que analise cada uma dessas atividades e print no console o que deverá 
// ser feito.

import func from '../../auxiliaryFunctions.js';

let arr = ['Reflorestamento, EsgotoTratado, EmissaoDeCarbono, EnergiaSustentavel', 'Feito', 'Não feito', 'Em progresso', 'Não feito'];
func.getAppetizer(arr);

arr = func.gets().split(", ");

const list = {
    Reflorestamento: func.gets(),
    EsgotoTratado: func.gets(),
    EmissaoDeCarbono: func.gets(),
    EnergiaSustentavel: func.gets(),
}

const findItem = (object, index) => Object.keys(object).filter(item => item.toString() == index);

arr.forEach((item => {
    let status = list[findItem(list, item)];

    if (status === 'Feito') {
        func.print('Não multar');
    } else if (status === 'Em progresso') {
        func.print('Avaliação em progresso');
    } else {
        func.print('Multa');
    }
}));