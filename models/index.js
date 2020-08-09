const mongoose = require("mongoose");

const practice = {
  userId: String,
  completedOn: String,
  topic: String,
  engagement: String,
  level: Number,
  totalQuestion: Number,
  totalCorrect: Number,
  score: Number,
};

const user = {
  name: String,
  email: String,
  password: String,
  practices: [practice],
};

const fractionList = {
  name: String,
  list: [String],
};

const moduleType = {
  fractions: [String],
  numberOfTurns: Number,
  slug: String,
};

const User = mongoose.model("User", user);
const Practice = mongoose.model("Practice", practice);
const FractionList = mongoose.model(
  "FractionList",
  fractionList,
  "fractionLists"
);
const Module = mongoose.model("Module", moduleType);

module.exports = {
  User,
  Practice,
  FractionList,
  Module,
};
