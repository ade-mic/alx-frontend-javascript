import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  const userResult = await signUpUser(firstName, lastName);
  // const photoResult = await uploadPhoto(fileName);

  return [
    { status: userResult.status, value: userResult.value },
  ];
}

export default handleProfileSignup;
