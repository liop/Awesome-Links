/*
 * @Date: 2024-04-17 22:20:23
 * @Description: 功能：
 */
import SchemaBuilder from "@pothos/core";
import  PrismaPlugin   from "@pothos/plugin-prisma";
import RelayPlugin from '@pothos/plugin-relay'
import type PrismaTypes from '@pothos/plugin-prisma/generated'
import prisma from "../lib/prisma";
import { createContext } from "./context";


export const builder = new SchemaBuilder<{
  PrismaTypes:PrismaTypes,
  Context: ReturnType<typeof createContext>,
}>({
  plugins: [PrismaPlugin, RelayPlugin],
  relayOptions: {},
  prisma: {
    client: prisma
  }
})


builder.queryType({
  fields: (t) => ({
    ok: t.boolean({
      resolve: () => true
    })
  })
})

builder.mutationType({})