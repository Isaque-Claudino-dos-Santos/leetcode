import { describe, expect, test } from "bun:test";
import { twoSum } from ".";

describe("Two Sum Tests", () => {
  test("simple two sum tests", function () {
    expect(twoSum([1, 3, 5], 8)).toContainAllValues([1, 2]);
  });
});
