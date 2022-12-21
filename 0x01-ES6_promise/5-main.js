import uploadPhoto from './5-photo-reject';
const tst = uploadPhoto('guillaume.jpg');
tst.catch(()=>{})
console.log(tst);