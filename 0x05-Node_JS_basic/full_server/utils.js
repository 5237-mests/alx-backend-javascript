const fs = require('fs');

export default function readDatabase(filePath) {
  function func(arr1, arr2) {
    const obj = {};
    arr1.forEach((CurrElement, index) => {
      obj[CurrElement] = arr2[index];
    });
    return obj;
  }
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const db = data
          .toString('utf-8')
          .trim()
          .split('\n');

        const responseParts = {};
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
            if (studObj[z].field === el) {
              stdlist.push(`${studObj[z].firstname}`);
            }
          }
          responseParts[el] = stdlist;
        }
        // Sorting the field in ascending order case sensitive
        const sortedObj = Object.keys(responseParts).sort((a, b) => a.localeCompare(b)).reduce(
          (objEntries, key) => {
            // eslint-disable-next-line no-param-reassign
            objEntries[key] = responseParts[key];
            return objEntries;
          }, {},
        );
        resolve(sortedObj);
      }
    });
  });
}

module.exports = readDatabase;
