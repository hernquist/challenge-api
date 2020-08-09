const prepare = (obj) => {
  if (obj) {
    obj._id = obj._id.toString();
  }
  return obj;
};

module.exports = {
  Query: {
    user: async (__, ___, context) => {
      const { User } = context;
      if (context.authUser) {
        const { _id } = context.authUser;
        const user = await User.find({ _id });

        return prepare(user[0]);
      } else {
        return new Error("user not authenticated");
      }
    },
    fractionList: async (__, { _id }, context) => {
      const { FractionList } = context;

      const [list] = await FractionList.find({});
      return list;
    },
    module: async (__, { slug }, context) => {
      const { Module } = context;
      const [mod] = await Module.find({ slug });

      return {
        _id: mod._id,
        numberOfTurns: mod.numberOfTurns,
        slug: mod.slug,
        fractions: mod.fractions,
      };
    },
  },
};
