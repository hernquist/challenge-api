module.exports = `
  type Query {
    user: User
    module(slug: String!): Module
    fractionList(_id: String): FractionList
  }
`;
