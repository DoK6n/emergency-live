import { Elysia, t } from 'elysia'
import { cors } from '@elysiajs/cors'
import { swagger } from '@elysiajs/swagger'
import { EmergencyInfoController } from './emergency/emergency-info.controller'

export const app = new Elysia()
  .use(cors())
  .use(
    swagger({
      path: '/api-docs',
    }),
  )
  .get('/health', () => 'ok')
  .use(EmergencyInfoController)
  .listen(process.env.PORT || 8001)

console.log(`
  🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}
  📗 API Document at http://${app.server?.hostname}:${app.server?.port}/api-docs
`)
