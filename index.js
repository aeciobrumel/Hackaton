const prompt = require("prompt-read");
const Queue = require("./queue");
const { message } = require("./utils");

let priorityCount = 0;
let priority = new Queue();
let normal = new Queue();
let option = undefined;

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
  option = prompt("Opção: ", "number");

  switch (option) {
    case 1:
      console.clear();
      console.log("** OPERAÇÕES **");
      console.log("1 - Fila prioritária");
      console.log("2 - Fila Normal");
      let queueOption = prompt("Opção: ", "number");

      if ((queueOption === 1) | (queueOption === 2)) {
        if (queueOption === 1) {
          let element = prompt("Elemento: ");
          priority.enqueue(element);
          message("Inserido na fila Prioritária!");
        } else {
          let element = prompt("Elemento: ");
          normal.enqueue(element);
          message("Inserido na fila Normal!");
        }
      } else {
        message("Opção inválida!");
      }
      break;

    case 2:
      if (priority.isEmpty() && normal.isEmpty()) {
        message("A fila está vazia!");
      }

      if (priorityCount < 2) {
        const elementP = priority.dequeue();
        if (elementP) {
          message("Elemento " + elementP + " removido da fila PRIORITÁRIA!");
          priorityCount++;
          break;
        }
      }

      const elementN = normal.dequeue();
      if (elementN) {
        message("Elemento " + elementN + " removido da fila NORMAL!");
        priorityCount = 0;
        break;
      }

    case 9:
      console.clear();
      break;

    default:
      message("Opção inválida!");
  }
} while (option != 9);
