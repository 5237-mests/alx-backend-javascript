import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const us = await signUpUser(firstName, lastName).then((da) => ({ statu: 'fulfilled', value: da }));
  const ph = await uploadPhoto(fileName).catch((err) => ({ status: 'rejected', value: err.toString() }));

  return Promise.resolve([us, ph]);
}
