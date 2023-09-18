// Agora precisamos separar os CleanCoders em dois grupos, isso vai facilitar a execução de ações 
// estratégicas.Para isso, foi definido que os IDs pares devem ir para as barracas à direita da 
// estrada que corta o acampamento e os ímpares para a esquerda.Aproveite essa oportunidade para 
// criar um código que verifique o ID do CleanCoder e indique para onde ele deve ir: 
// Direita ou Esquerda.

// Um jeito bem fácil de fazermos essa verificação é utilizando o operador %.
// Com ele conseguimos verificar o resto de divisões.


import func from '../../auxiliaryFunctions.js';

const test1 = [250];
const test2 = [15];
const test3 = [2];

func.getAppetizer(test2);

let id = parseInt(func.gets());

if(id % 2 === 0){
    func.print("Barraca da Direita");
}else{
    func.print("Barraca da Esquerda")
}
