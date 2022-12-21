import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const res2 = uploadPhoto();
  const res1 = createUser();

  Promise.all([res1, res2])
    .then((data) => console.log(data[1].body, data[0].firstName, data[0].lastName))
    .catch(() => console.log('Signup system offline'));
}
