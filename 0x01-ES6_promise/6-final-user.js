import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promise1 = signUpUser(fileName, lastName);
  const promise2 = uploadPhoto(fileName);

  Promise.allSettled([promise1, promise2]).then(data => console.log(data))
    .catch(err => console.log(err))
}