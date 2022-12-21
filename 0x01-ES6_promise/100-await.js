import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const obj = {};

  await uploadPhoto().then((data) => {
    obj.photo = data;
  }).catch(() => {
    obj.photo = null;
    obj.user = null;
    return Promise.resolve(obj);
  });
  await createUser().then((data) => {
    obj.user = data;
  }).catch(() => {
    obj.photo = null;
    obj.user = null;
    return Promise.resolve(obj);
  });

  return Promise.resolve(obj);
}
