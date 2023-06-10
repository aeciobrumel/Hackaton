const Queue = require("./queue");

describe("Queue", () => {
  const queue = new Queue();

  beforeEach(() => {
    queue.enqueue(5);
    queue.enqueue(10);
    queue.enqueue(15);
  });

  test("dequeue)", () => {
    expect(queue.dequeue()).toBe(5);
    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(15);
    expect(queue.dequeue()).toBe(undefined);
  });

  test("peek)", () => {
    expect(queue.peek()).toBe(5);
    expect(queue.dequeue()).toBe(5);

    expect(queue.peek()).toBe(10);
    expect(queue.dequeue()).toBe(10);

    expect(queue.peek()).toBe(15);
    expect(queue.dequeue()).toBe(15);

    expect(queue.peek()).toBe(undefined);
  });

  test("isEmpty)", () => {
    expect(queue.isEmpty()).toBe(false);
    expect(queue.dequeue()).toBe(5);
    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(15);
    expect(queue.isEmpty()).toBe(true);
  });

  test("size)", () => {
    expect(queue.size()).toBe(3);
    expect(queue.dequeue()).toBe(5);

    expect(queue.size()).toBe(2);
    expect(queue.dequeue()).toBe(10);

    expect(queue.size()).toBe(1);
    expect(queue.dequeue()).toBe(15);

    expect(queue.size()).toBe(0);
  });

  test("toString)", () => {
    expect(queue.toString()).toBe("5,10,15");
  });
});
