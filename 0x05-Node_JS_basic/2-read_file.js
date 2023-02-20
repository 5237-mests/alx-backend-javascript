#!/usr/bin/node
const fs = require('fs');

function countStudents (path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }

  const db = fs
    .readFileSync(path, 'utf8')
    .toString('utf-8')
    .trim()
    .split('\n');

  console.log(`Number of students: ${db.length - 1}`); // number of student

  const newdb = db.map((el, indx, arr) => {
    return el.split(',');
  });

  const studObj = [];
  for (let i = 1; i < newdb.length; i++) {
    const std = func(newdb[0], newdb[i]);
    studObj.push(std);
  }

  function func (arr1, arr2) {
    const obj = {};
    arr1.forEach((CurrElement, index) => {
      obj[CurrElement] = arr2[index];
    });
    return obj;
  }

  const field = [];
  for (let i = 0; i < studObj.length; i++) {
    field.push(studObj[i].field);
  }
  const fieldNew = new Set(field);
  const sln = [];
  for (const el of fieldNew.keys()) {
    for (let f = 0; f < studObj.length; f++) {
      if (studObj[f].field === el) {
        sln.push(studObj[f]);
      }
    }
  }

  for (const el of fieldNew.keys()) {
    const stdlist = [];
    for (let z = 0; z < studObj.length; z++) {
      if (studObj[z].field === el) stdlist.push(` ${studObj[z].firstname}`);
    }
    console.log(`Number of students in ${el}: ${stdlist.length}. List:${stdlist}`);
  }
}

module.exports = countStudents;
