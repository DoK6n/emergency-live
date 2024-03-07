import { Elysia, t } from 'elysia'
import { cors } from '@elysiajs/cors'
import { swagger } from '@elysiajs/swagger'

export const app = new Elysia()
  .use(cors())
  .use(swagger())
  .get('/', () => 'Hello Elysia')
  .get('/message', () => ({ message: 'Hello Elysia' }))
  .listen(3000)

console.log(`
  🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}
`)
