import { isNull } from 'lodash';

import { User } from 'src/models';

const signup = async (userDTO) => {
  const user = await User.create(userDTO);

  return user;
};

const loginWithEmail = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (isNull(user) || !(await user.checkPassword(password))) {
    throw new Error('Something went wrong');
  }

  const accessToken = await user.generateAccessToken();
  return accessToken;
};

const userServices = {
  signup,
  loginWithEmail,
};

export default userServices;
