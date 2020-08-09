const { Mutation } = require("./mutation");
const { Query } = require("./query");
const { Date } = require("./date");

module.exports = {
  Date,
  Mutation,
  Query,
  User: {
    practices: async ({ _id }, __, { Practice }) =>
      await Practice.find({ userId: _id }),
  },
  Module: {
    fractions: async ({ fractions }, ___, { FractionList }) => {
      if (fractions) {
        const [listA] = await FractionList.find({ name: fractions[0] });
        const [listB] = await FractionList.find({ name: fractions[1] });
        return [listA, listB];
      }
    },
  },
};
