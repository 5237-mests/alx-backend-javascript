const express = require('express');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
const dbFile = process.argv.length > 2 ? process.argv[2] : '';
const app = express();

// countstudent function
function countStudents(path) {
  function func(arr1, arr2) {
    const obj = {};
    arr1.forEach((CurrElement, index) => {
      obj[CurrElement] = arr2[index];
    });
    return obj;
  }
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const db = data
          .toString('utf-8')
          .trim()
          .split('\n');

        const responseParts = [];
        // console.log(`Number of students: ${db.length - 1}`); // total os stud
        responseParts.push(`Number of students: ${db.length - 1}`);

        const newdb = db.map((el) => el.split(','));

        const studObj = [];
        // eslint-disable-next-line no-plusplus
        for (let i = 1; i < newdb.length; i++) {
          const std = func(newdb[0], newdb[i]);
          studObj.push(std);
        }

        const field = [];
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < studObj.length; i++) {
          field.push(studObj[i].field);
        }
        const fieldNew = new Set(field);
        const sln = [];
        for (const el of fieldNew.keys()) {
          // eslint-disable-next-line no-plusplus
          for (let f = 0; f < studObj.length; f++) {
            if (studObj[f].field === el) {
              sln.push(studObj[f]);
            }
          }
        }

        for (const el of fieldNew.keys()) {
          const stdlist = [];
          // eslint-disable-next-line no-plusplus
          for (let z = 0; z < studObj.length; z++) {
            if (studObj[z].field === el) stdlist.push(` ${studObj[z].firstname}`);
          }
          responseParts.push(`Number of students in ${el}: ${stdlist.length}. List:${stdlist}`);
        }

        resolve(responseParts.join('\n'));
      }
    });
  });
}

app.get('/', (_, res) => {
  const responseText = 'Hello Holberton School!';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  res.statusCode = 200;
  res.write(Buffer.from(responseText));
});

app.get('/students', (_, res) => {
  const responseParts = ['This is the list of our students'];

  countStudents(dbFile)
    .then((report) => {
      responseParts.push(report);
      const responsText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responsText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responsText));
    })
    .catch((err) => {
      responseParts.push(err instanceof Error ? err.message : err.toString());
      const responsText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responsText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responsText));
    });
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
