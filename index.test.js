const Queue = require("./queue");
const { message } = require("./utils");

describe("Tests", () => {
  test("Inserir elemento na fila prioritária", () => {
    let priority = new Queue();
    priority.enqueue("elemento1");
    expect(priority.toString()).toBe("elemento1");
  });

  test("Inserir elemento na fila normal", () => {
    let normal = new Queue();
    normal.enqueue("elemento1");
    expect(normal.toString()).toBe("elemento1");
  });

  test("Remover elemento da fila prioritária", () => {
    let priority = new Queue();
    priority.enqueue("elemento1");
    priority.enqueue("elemento2");
    const element = priority.dequeue();
    expect(element).toBe("elemento1");
    expect(priority.toString()).toBe("elemento2");
  });

  test("Remover elemento da fila normal", () => {
    let normal = new Queue();
    normal.enqueue("elemento1");
    normal.enqueue("elemento2");
    const element = normal.dequeue();
    expect(element).toBe("elemento1");
    expect(normal.toString()).toBe("elemento2");
  });
});
