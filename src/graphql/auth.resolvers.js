const AuthService = require('../services/auth.service');
const authServiceInstance = new AuthService();

const login = async (_, { email, pass: password }, context) => {
  const { user } = await context.authenticate('graphql-local', {
    email,
    password,
  });

  return authServiceInstance.signToken(user);
};

module.exports = { login };
