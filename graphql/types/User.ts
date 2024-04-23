/*
 * @Date: 2024-04-17 22:39:34
 * @Description: 功能：
 */
import { builder } from "../builder";

builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeID('id'),
    email: t.exposeString('email', { nullable: true, }),
    image: t.exposeString('image', { nullable: true, }),
    role: t.expose('role', { type: Role, }),
    bookmarks: t.relation('bookmarks'),
  })
})

const Role = builder.enumType('Role', {
  values: ['USER', 'ADMIN'] as const 
})
