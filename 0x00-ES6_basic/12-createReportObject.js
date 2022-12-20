export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(count) {
      return Object.keys(count).length;
    },
  };
}
