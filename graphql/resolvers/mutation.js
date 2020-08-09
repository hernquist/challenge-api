const Signup = require("./mutations/signup");
const Login = require("./mutations/login");
const SavePractice = require("./mutations/savePractice");

module.exports = {
  Mutation: {
    ...Signup,
    ...Login,
    ...SavePractice,
  },
};
