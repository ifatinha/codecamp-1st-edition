// Pela manhã, com todos descansados, sua primeira missão será aumentar a plantação de jacarandás, 
// árvore fundamental para a magia do vale.Para isso, é necessário plantá-los a uma certa distância 
// um pé do outro para que nenhuma muda roube o nutriente da outra, fazendo com que algumas não se 
// desenvolvam. Nesse sentido, é necessário que cada pé esteja a exatos 10 metros de distancia um 
// do outro, assim conseguiremos plantar todas as mudas e evitar que algumas não se desenvolvam.

// Crie um código que, com as entradas de distancias dos buracos avaliadas pelo drone, 
// verifique se o espaço entre um buraco e outro é igual a 10 metros.Se for, 
// imprima no console "Plantar!".Se não for, imprima no console a distância que o buraco deve 
// retroceder ou avançar para chegar ao número ideal.

import func from '../../auxiliaryFunctions.js';

let test = [10];
func.getAppetizer(test);

let id = parseInt(func.gets());

if (id === 10){
    func.print();
}