const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
  _id: ID
  name: String
  email: String
  password: String
}

type Auth {
  token: ID!
  user: user
}

type Query {
  users: [user]!
  user(userId: ID!): user
}

type Mutation {
  addUser(name: String!, email: String!, password: String!): Auth
  
  login(email: String!, password: String!): Auth
  
  removeUser(userId: ID!): User
}

  type Profile {
    _id: ID
    name: String
    about: [String]!
    restaraunt: [String]!
    match: [String]!

  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    addProfile(name: String!): Profile

    addAbout(profileId: ID!, about: String!): Profile

    addRestaraunt(profileId: ID!, restaraunt: String!): Profile

    addMatch(profileId: ID!, match: String!): Profile

    addComment(profileId: ID! commentText: String! commentAuthor: String!): Profile

    removeProfile(profileId: ID!): Profile

    removeAbout(profileId: ID!, about: String!): Profile

    removeRestaraunt(profileId: ID!, restaraunt: String!): Profile

    removeMatch(profileId: ID!, profile: String!): Profile

    removeComment(profileId: ID!, commentId: ID!): Profile
  }
`;

module.exports = typeDefs;