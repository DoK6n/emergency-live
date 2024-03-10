import { describe, expect, it } from 'bun:test'
import { edenTreaty } from '@elysiajs/eden'
import { app } from '..'
import { Elysia } from 'elysia'
import { EmergencyLiveServerApp } from '../type'

describe('emergency-info', async () => {
  const mockApp = new Elysia({ serve: { hostname: 'localhost' } }).use(app)
  const api = edenTreaty<EmergencyLiveServerApp>(`http://localhost:${process.env.PORT}`)

  describe('응급실', async () => {
    it('응급실 실시간 가용병상정보 조회 테스트', async () => {
      const response = await api['emergency-info']['available-beds'].get()
      expect(response.data).toStrictEqual({ name: 'getEmrrmRltmUsefulSckbdInfoInqire' })
    })
  })
})
