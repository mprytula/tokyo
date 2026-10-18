import { greet } from "./index";

describe("greet", () => {
    it("greets by name", () => {
        expect(greet("Tokyo")).toBe("Hello, Tokyo!");
    });
});
