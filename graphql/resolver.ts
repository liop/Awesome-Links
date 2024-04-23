/*
 * @Date: 2024-04-15 17:21:40
 * @Description: 功能：
 */
import prisma from "../lib/prisma"
export const resolvers = {
  Query: {
    links: () => {
      return prisma.link.findMany()
      return [
        {
          category: 'Open Source',
          description: 'Fullstack React framework',
          id: 1,
          imageUrl: 'https://nextjs.org/static/twitter-cards/home.jpg',
          title: 'Next.js',
          url: 'https://nextjs.org',
        },
        {
          category: 'Open Source',
          description: 'Next Generation ORM for TypeScript and JavaScript',
          id: 2,
          imageUrl: 'https://www.prisma.io/images/og-image.png',
          title: 'Prisma',
          url: 'https://www.prisma.io',
        },
        {
          category: 'Open Source',
          description: 'GraphQL implementation',
          id: 3,
          imageUrl: 'https://www.apollographql.com/apollo-home.jpg',
          title: 'Apollo GraphQL',
          url: 'https://apollographql.com',
        },
      ]
    },
  },
}