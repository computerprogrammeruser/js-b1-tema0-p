import { checkAge } from "./tema0";

describe("checkAge", () => {
  test("should return true when age is bigger or equal than 18", () => {
    expect(checkAge(9)).toBe(false);
    expect(checkAge(17)).toBe(false);
    expect(checkAge(18)).toBe(true);
    expect(checkAge(19)).toBe(true);
  });
});