const Signup = require("./mutations/signup");
const Login = require("./mutations/Login");
const SavePractice = require("./mutations/SavePractice");

module.exports = {
  Mutation: {
    ...Signup,
    ...Login,
    ...SavePractice,
  },
};
