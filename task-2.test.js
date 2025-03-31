import { describe, it, expect, vi } from "vitest";

import { User } from "./task-2-sortUserByType";
import sortUserByType from "./task-2-sortUserByType";

describe("sortUserByType", () => {
  it("should sort users according to profession priority", () => {
    const users = [
      new User({
        firstName: "John",
        lastName: "Doe",
        note: "",
        profession: "student",
        customerID: 1,
      }),
      new User({
        firstName: "Allen",
        lastName: "Walker",
        note: "",
        profession: "student",
        customerID: 2,
      }),
      new User({
        firstName: "Amy",
        lastName: "",
        note: "",
        profession: "freelancer",
        customerID: 3,
      }),
      new User({
        firstName: "Tom",
        lastName: "Hank",
        note: "Today is Monday",
        profession: "productOwner",
        customerID: 4,
      }),
      new User({
        firstName: "Emma",
        lastName: "Watson",
        note: "Tomorrow is another day",
        profession: "engineer",
        customerID: 5,
      }),
      new User({
        firstName: "Tom",
        lastName: "Riddle",
        note: "I'm Valdimmort",
        profession: "systemAnalytics",
        customerID: 6,
      }),
    ];

    const result = sortUserByType([...users]);

    expect(result.map((u) => u.profession)).toEqual([
      "systemAnalytics",
      "engineer",
      "productOwner",
      "freelancer",
      "student",
      "student",
    ]);
  });

  it("should log the sorted array to console", () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    const users = [
      new User({
        firstName: "Amy",
        lastName: "",
        note: "",
        profession: "freelancer",
        customerID: 3,
      }),
      new User({
        firstName: "Tom",
        lastName: "Riddle",
        note: "I'm Valdimmort",
        profession: "systemAnalytics",
        customerID: 6,
      }),
    ];

    const expected = [
      users[1], // systemAnalytics
      users[0], // freelancer
    ];

    const result = sortUserByType([...users]);
    expect(result).toEqual(expected);
    expect(consoleSpy).toHaveBeenCalledWith("[sortUserByType]", expected);

    consoleSpy.mockRestore();
  });
});
