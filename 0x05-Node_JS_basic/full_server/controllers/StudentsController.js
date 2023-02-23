import readDatabase from '../utils';

const validMajor = ['CS', 'SWE'];

/* eslint-disable no-unused-vars */
class StudentsController {
  static getAllStudents(request, response) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    const responseParts = ['This is the list of our students'];

    readDatabase(dataPath)
      .then((report) => {
        Object.keys(report).forEach((key) => {
          const listOfStudent = [`Number of students in ${key}: ${report[key].length}. List: `];
          listOfStudent.push(report[key].join(', ')); // .join('\n')
          responseParts.push(listOfStudent.join('')); // .join('\n')
        });
        response.setHeader('statusCode', 200);
        response.status(200).send(responseParts.join('\n'));
      })
      .catch((err) => {
        response.setHeader('statusCode', 500);
        response.status(500).send(err instanceof Error ? err.message : err.toString());
      });
  }

  static getAllStudentsByMajor(request, response) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    const responseParts = ['List: '];
    const { major } = request.params;

    if (!validMajor.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      // eslint-disable-next-line no-useless-return
      return;
    }
    readDatabase(dataPath)
      .then((report) => {
        responseParts.push(report[major].join(', '));
        const responseText = responseParts.join('');
        response.setHeader('statusCode', 200);
        response.status(200).send(responseText);
      })
      .catch((err) => {
        response.status(500).send(err instanceof Error ? err.message : err.toString());
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
