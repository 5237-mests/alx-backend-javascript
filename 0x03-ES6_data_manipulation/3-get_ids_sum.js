export default function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce((accumulator, currentElement) => accumulator + currentElement.id,
    0);
}
