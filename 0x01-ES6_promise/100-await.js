import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const res1 = await uploadPhoto();
  const res2 = await createUser();

  const obj = {};

  if (!res1 || !res2) {
    obj.photo = null;
    obj.user = null;
  } else {
    obj.photo = res1;
    obj.user = res2;
  }
  return obj;
}
