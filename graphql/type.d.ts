/*
 * @Date: 2024-04-15 17:19:02
 * @Description: 功能：
 */
type Link {
  id: ID
  category: String
  description: String
  imageUrl: String
  title: String
  url: String
  users: [User]
}

type Query {
  links: [Link]!
  link(id: ID!): Link!
  user(id: ID!): User!
  users: [User]!
}

type Mutation {
  createLink(category: String!, description: String!, imageUrl: String!, title: String!, url: String!): Link!
  deleteLink(id: ID!): Link!
  updateLink(category: String, description: String, id: String, imageUrl: String, title: String, url: String): Link!
}
