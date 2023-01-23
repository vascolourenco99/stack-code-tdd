import { describe, it, expect } from "vitest";
import { Stack } from "../lib/tdd_stack";

describe("tdd_stack", () => {
  describe("inital test", () => {
    it("initialize class", () => {
      const stackNew = new Stack("element");
      expect(stackNew).toBe(stackNew);
    });
  });

  describe("push()", () => {
    it("add to stack", () => {
      const stackNew = new Stack();
      stackNew.push("element");
    });

    it("push to stack incremente size", () => {
      const stackNew = new Stack();
      stackNew.push("element");
      expect(stackNew.size()).toEqual(1);
    });
  });

  describe("pop()", () => {
    it("can pop from non empty stack", () => {
      const stackNew = new Stack();
      stackNew.push("element");
      stackNew.pop();
    });

    it("pop to stack decrement size", () => {
      const stackNew = new Stack();
      stackNew.push("element");
      stackNew.pop();
      expect(stackNew.size()).toEqual(0);
    });

    it("can pop pushed element", () => {
      const stackNew = new Stack();
      const element = "new element";

      stackNew.push(element);
      const poppedElement = stackNew.pop();
      expect(element).toEqual(poppedElement);
    });

    it("can pop and push two elements", () => {
      const stackNew = new Stack();
      const element1 = "1 element";
      const element2 = "2 element";

      stackNew.push(element1);
      stackNew.push(element2);

      expect(element2).toEqual(stackNew.pop());
      expect(element1).toEqual(stackNew.pop());
    });
  });

  describe("size()", () => {
    it("new stack should be zero", () => {
      const stackNew = new Stack();
      expect(stackNew.size()).toStrictEqual(0);
    });
  });

  describe("empty()", () => {
    it("should show if it is empty", () => {
      const stackNew = new Stack();
      stackNew.empty();
      expect(stackNew.empty()).toBe();
    });
  });

  describe("peek()", () => {
    it("can peek pushed element", () => {
      const stackNew = new Stack();
      const element = "1 element";

      stackNew.push(element);
      const peekedElement = stackNew.peek();

      expect(element).toEqual(peekedElement);
    });
  });
});
