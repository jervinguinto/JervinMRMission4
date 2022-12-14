const calculateCarValue = require("./CarValue");
const assert = require("assert");

test("negative year", () => {
  expect(calculateCarValue("civic", -2020)).toBe(
    "Error: There's something wrong with the input"
  );
});

test("right model and year", () => {
  expect(calculateCarValue("civic", 2014)).toBe(6614);
});
test("year is a string", () => {
  expect(calculateCarValue("civic", "twenty twenty")).toBe(
    "Error: There's something wrong with the input"
  );
});
test("model is a number, year is correct", () => {
  expect(calculateCarValue("111", 2020)).toBe(2020);
});
test("both data are wrong", () => {
  expect(calculateCarValue("task-force", -2020)).toBe(
    "Error: There's something wrong with the input"
  );
});
test("special characters as model", () => {
  expect(calculateCarValue("$$$", 2020)).toBe(
    2020 
  );
});




//test later

// describe("calculateCarValue", () => {
//     it("should give the expected output", () => {
//       const input = { Model: "Civic", Year: 2014 };
//       const expectedOutput = 6614;
//       const result = calculateCarValue(input);
//       // expect(result).toBe(expectedOutput);
//       assert.strict(result, expectedOutput);
//     });

//     it("should give the expected output", () => {
//       const input2 = { Model: "Camry", Year: 2020 };
//       const expectedOutput2 = 8020;
//       const result2 = calculateCarValue(input2);
//       // expect(result2).toBe(expectedOutput2);
//       assert.strict(result2, expectedOutput2);
//     });
//     it("should give the expected output", () => {
//       const input3 = { Model: "Civic", Year: 2014 };
//       const expectedOutput3 = 6614;
//       const result3 = calculateCarValue(input3);
//       // expect(result3).toBe(expectedOutput3);
//       assert.strict(result3, expectedOutput3);
//     });

//     it("should return an error message", () => {
//       const input4 = { Model: "Task-Force", Year: -987 };
//       const expectedOutput4 = "error";
//       const result4 = calculateCarValue(input4);
//       // expect(result4).toBe(expectedOutput4);
//       assert.strict(result4, expectedOutput4);
//     });
//     it("should return an error message", () => {
//       const input5 = { Model: "Camry", Year: "twenty" };
//       const expectedOutput5 = "error";
//       const result5 = calculateCarValue(input5);
//       // expect(result5).toBe(expectedOutput5);
//       assert.strict(result5, expectedOutput5);
//     });
// })
