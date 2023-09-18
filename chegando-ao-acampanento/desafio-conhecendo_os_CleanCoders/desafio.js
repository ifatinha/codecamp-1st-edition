// Buscando planejar as ações para conter a Oil Corp, um acampamento foi criado e 
//muitos CleanCoders(inclusive novos adeptos da causa) estão chegando.Com isso, 
//para faciliar a comunicação e interação, precisamos imprimir cartões de identificação 
//para todas as pessoas.

// Crie um código que com três entradas(NOME, SOBRENOME e ID) que imprima essas informações 
//no seguinte padrão: "Nome: NOME SOBRENOME ID: ID"

// Venilton, um CleanCoder experiente, compartilhou uma dica bem útil.
//Ele disse que é possível utilizar o conceito de interpolação de strings 
//para facilitar a impressão de textos concatenados à variáveis.Para utilizar basta fazer assim:

// print(`String e ${variavel}`);

import func from '../../auxiliaryFunctions.js';

const test1 = ['Kawan', 'Anthony', 22];
const test2 = ['Renan', 'Oliveira', 98];
const test3 = ['Marjory', 'Santos', 204];

func.getAppetizer(test2);

const fName = func.gets();
const lName = func.gets();
const id = func.gets();

func.print(`Nome: ${fName} ${lName} ID: ${id}`);