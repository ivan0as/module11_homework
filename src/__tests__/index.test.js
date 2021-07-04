import { getMonth } from "../index.js";

describe("takes a month number and returns its name", () => {
  it("takes 2 and returns the title February", () => {
    const result = getMonth(2);
    expect(result).toBe("февраль");
  }),
  it("takes 8 and returns the title August", () => {
    const result = getMonth(8);
    expect(result).toBe("август");
  }),
  it("takes 12 and returns the title December", () => {
    const result = getMonth(12);
    expect(result).toBe("декабрь");
  }),
  it("takes 13 and returns the title December", () => {
    const result = getMonth(13);
    expect(result).toBe("неизвестно");
  }),
  it("takes 1 and returns the title December", () => { //неуспешное выполнение
    const result = getMonth(1);
    expect(result).toBe("декабрь");
  });
});