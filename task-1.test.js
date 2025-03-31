import { describe, it, expect, vi } from "vitest";

import sortUserName from "./task-1-sort-user-name";

describe("sortUserName", () => {
  it("should sort users by firstName + lastName + customerID", () => {
    const users = [
      { firstName: "John", lastName: "", customerID: 2 },
      { firstName: "Alice", lastName: "Smith", customerID: 1 },
      { firstName: "John", lastName: "", customerID: 1 },
    ];

    const sorted = sortUserName([...users]);

    expect(sorted).toEqual([
      { firstName: "Alice", lastName: "Smith", customerID: 1 },
      { firstName: "John", lastName: "", customerID: 1 },
      { firstName: "John", lastName: "", customerID: 2 },
    ]);
  });

  it("should log the sorted result to console", () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    const users = [
      { firstName: "B", lastName: "B", customerID: 2 },
      { firstName: "A", lastName: "A", customerID: 1 },
    ];

    sortUserName(users);

    expect(consoleSpy).toHaveBeenCalledWith("[sortUserName]", [
      { firstName: "A", lastName: "A", customerID: 1 },
      { firstName: "B", lastName: "B", customerID: 2 },
    ]);

    consoleSpy.mockRestore();
  });
});
