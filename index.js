const prompt = require("prompt-read");
const Queue = require("./queue");
const { message } = require("./utils");

// MAIN
var priorityTime = false; //boolean para testar se prioritario ja foi retirado
var priority = new Queue();
var normal = new Queue();

// Menu
do {
  console.clear();
  console.log("ragatanga pt/2");
  console.log("=============================\n");
  console.log("FILA Prioritária: \n[" + priority.toString() + "]\n");
  console.log("FILA Normal:      \n[" + normal.toString() + "]\n");
  console.log("** OPERAÇÕES **");
  console.log("1 - Inserir");
  console.log("2 - Remover");
  console.log("9 - Sair");
  var option = prompt("Opção: ", "number");

  switch (option) {
    case 1:
      console.clear();
      console.log("** OPERAÇÕES **");
      console.log("1 - Fila prioritária");
      console.log("2 - Fila Normal");
      var opcao = prompt("Opção: ", "number");

      if ((opcao == 1) | (opcao == 2)) {
        if (opcao == 1) {
          var element = prompt("Elemento: ");
          priority.enqueue(element);
          message("inserido na fila Prioritária!!!");
        } else {
          var element = prompt("Elemento: ");
          normal.enqueue(element);
          message("inserido na fila Normal!!!");
        }
      } else {
        message("opção inválida");
      }

      break;

    case 2:
      if (priorityTime == false) {
        //se não foi retirado cai nesse laço

        var elementP = priority.dequeue(); //guardo elemento em variavel para jogar na tela antes de remove-lo
        if (elementP !== undefined) {
          message("Elemento " + elementP + " removido DA PRIORI!"); //jogo na tela
        } else {
          //se cair aqui prioritaria ta vazio então retiro elemento  da normal
          var elementN = normal.dequeue();
          message("Elemento " + elementN + " removido DA NORMAL!");
        }
        priorityTime = true; //retorno true para indicar que retirei elemento da prioritaria
      } else {
        var elementN = normal.dequeue();
        if (elementN !== undefined) {
          message("Elemento removido DA NORMAL!");
        } else {
          message("Fila está vazia!");
        }
        priorityTime = false; //retorno falso para poder retirar novamente do prioritario...
      }
      break;

    case 9:
      console.clear();
      break;

    default:
      message("Opção inválida!");
  }
} while (option != 9);
