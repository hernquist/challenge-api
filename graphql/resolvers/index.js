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
    content: async ({ content }, ___, { Content }) => {
      if (content.length > 0) {
        const [listA] = await Content.find({
          name: content[0].name,
          type: content[0].type,
        });
        const [listB] = await Content.find({
          name: content[1].name,
          type: content[1].type,
        });

        return [listA, listB];
      }
      return [];
    },
  },
};
