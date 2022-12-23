import HolbertonCourse from "./2-hbtn_course.js";

test("HolbertonCourse checks setter types", () => {
  const course = new HolbertonCourse("PHP", 20, ["Lucie", "Guillaume"]);
  expect(() => {
    course.name = 10;
  }).toThrowError();
  expect(() => {
    course.length = '10';
  }).toThrowError();
  expect(() => {
    course.students = 'Thomas';
  }).toThrowError();
});