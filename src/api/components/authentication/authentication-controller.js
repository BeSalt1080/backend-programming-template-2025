const authenticationService = require('./authentication-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function login(request, response, next) {
  try {
    const { email, password } = request.body;

    if (!email) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'email is required');
    }

    if (!password) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'password is required');
    }

    const users = await authenticationService.validateCredentials(
      email,
      password
    );

    if (!users) {
      throw errorResponder(
        errorTypes.INVALID_PASSWORD,
        'email atau password salah'
      );
    }

    return response.status(200).json('anda berhasil login');
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  login,
};
