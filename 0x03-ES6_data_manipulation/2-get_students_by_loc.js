export default function getStudentsByLocation(getListStudents, city) {
  return getListStudents.filter((el) => el.location === city);
}
