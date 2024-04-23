/*
 * @Date: 2024-04-15 17:21:40
 * @Description: 功能：
 */
import prisma from "../lib/prisma"
export const resolvers = {
  Query: {
    links: () => {
      return prisma.link.findMany()
    },
  },
}