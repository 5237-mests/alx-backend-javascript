export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const newarray = getListStudents.filter((el1) => el1.location === city).map((el2) => {
    const el3 = el2;
    el3.grade = 'N/A';
    for (const d of newGrades) {
      if (el3.id === d.studentId) {
        el3.grade = d.grade;
      }
    }
    return el3;
  });
  return newarray;
}
