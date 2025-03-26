const { passwordMatched } = require('../../../utils/password');
const usersRepository = require('../users/users-repository');

async function validateCredentials(email, password) {
  const user = await usersRepository.getUserByEmail(email);
  if (!user) {
    return null;
  }
  return passwordMatched(password, user.password);
}

async function changePassword(id, password) {
  return usersRepository.changePassword(id, password);
}

module.exports = {
  validateCredentials,
  changePassword,
};
