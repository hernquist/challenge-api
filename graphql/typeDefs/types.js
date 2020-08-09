module.exports = `
  type User {
    _id: String!
    name: String!
    email: String
    practices: [Practice]
  }

  type Practice {
    _id: String!
    userId: String
    completedOn: String
    topic: String
    engagement: String
    level: Int
    totalQuestion: Int
    totalCorrect: Int
    score: Float
  }

  type AuthObject {
    token: String
    message: String
  }

  type MutationResponse {
    success: Boolean
    message: String
  }

  type Module {
    _id: String!
    fractions: [FractionList]
    numberOfTurns: Int
    slug: String!
  }

  type FractionList {
    _id: String
    name: String
    list: [String]
  }

`;
