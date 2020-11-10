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

  type ListItem {
    item: String
  }

  type Content {
    _id: String
    name: String
    type: String
    list: [String]
  }

  type Module {
    _id: String!
    content: [Content]
    numberOfTurns: Int
    slug: String!
  }


`;
