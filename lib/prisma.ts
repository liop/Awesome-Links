/*
 * @Date: 2024-04-15 17:45:45
 * @Description: 功能：
 */
import { PrismaClient } from "@prisma/client";

let prisma:PrismaClient

declare global {
  var prisma:PrismaClient
}

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

export default prisma

