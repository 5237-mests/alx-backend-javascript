export default function createIteratorObject(report) {
  const res = [];
  for (const department in report.allEmployees) {
    if (report.allEmployees[`${department}`]) {
      for (const student of report.allEmployees[`${department}`]) {
        res.push(student);
      }
    }
  }
  return res;
}
