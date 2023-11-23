import mapSelectedColorToHex from "./mapSelectedColorToHex";

describe("mapSelectedColorToHex", () => {
  it("transforms blue to #2E3A8C", () => {
    const widgets = [{ selectedColor: "blue" }];
    const transformed = mapSelectedColorToHex(widgets);
    expect(transformed[0].selectedColor).toBe("#2E3A8C");
  });

  it("transforms green to #3B755F", () => {
    const widgets = [{ selectedColor: "green" }];
    const transformed = mapSelectedColorToHex(widgets);
    expect(transformed[0].selectedColor).toBe("#3B755F");
  });

  it("transforms black to #212121", () => {
    const widgets = [{ selectedColor: "black" }];
    const transformed = mapSelectedColorToHex(widgets);
    expect(transformed[0].selectedColor).toBe("#212121");
  });

  it("leaves unknown colors unchanged", () => {
    const unknownColor = "red";
    const widgets = [{ selectedColor: unknownColor }];
    const transformed = mapSelectedColorToHex(widgets);
    expect(transformed[0].selectedColor).toBe(unknownColor);
  });

  it("handles an array of multiple widgets", () => {
    const widgets = [
      { selectedColor: "blue" },
      { selectedColor: "green" },
      { selectedColor: "black" },
      { selectedColor: "red" },
    ];
    const transformed = mapSelectedColorToHex(widgets);
    expect(transformed[0].selectedColor).toBe("#2E3A8C");
    expect(transformed[1].selectedColor).toBe("#3B755F");
    expect(transformed[2].selectedColor).toBe("#212121");
    expect(transformed[3].selectedColor).toBe("red");
  });
});
