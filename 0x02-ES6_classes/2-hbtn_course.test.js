import HolbertonCourse from "./2-hbtn_course.js";

test("HolbertonCourse is implemented correctly", () => {
  const course = new HolbertonCourse("PHP", 20, ["Lucie", "Guillaume"]);
  expect(course.name).toBe("PHP");
  expect(course.length).toBe(20);
  expect(course.students).toEqual(["Lucie", "Guillaume"]);
});
