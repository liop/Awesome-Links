/*
 * @Date: 2024-04-15 17:22:15
 * @Description: 功能：
 */
import {   createYoga } from "graphql-yoga";
import type { NextApiRequest, NextApiResponse } from "next";
import { schema } from "../../graphql/schema";
import { createContext } from "../../graphql/context";

export default createYoga<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  schema,
  context: createContext,
  graphqlEndpoint: '/api/graphql'
})

export const config = {
  api: {
    bodyParser: false  
  }
}