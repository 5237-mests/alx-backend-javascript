import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const res1 = uploadPhoto();
  const res2 = createUser();

  Promise.all([res1, res2])
    .then((data) => console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`))
    .catch(() => console.log('Signup system offline'));
}
