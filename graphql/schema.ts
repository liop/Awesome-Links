/*
 * @Date: 2024-04-15 17:20:59
 * @Description: 功能：
 */

import { builder } from "./builder"
import './types/Link'
import './types/User'


export const schema = builder.toSchema()
export const typeDefs = `
  type Link {
    id: ID
    title: String
    description: String
    url: String
    category: String
    imageUrl: String
    users: [String]
  }

  type Query {
    links: [Link]!
  }
`