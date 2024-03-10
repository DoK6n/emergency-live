import { describe, expect, it } from 'bun:test'
import { edenTreaty } from '@elysiajs/eden'
import { Elysia } from 'elysia'
import { OpenDataResponseDto } from '../common/dto'
import { EmergencyRoomRealtimeUsefulStockbedInfo } from './model'
import { EmergencyInfoController } from './emergency-info.controller'
import { emergencyRoomRealTimeUsefulStockbedInfoList } from './sample-data'

describe('emergency-info', async () => {
  const port = 8002

  const mockApp = new Elysia({ serve: { hostname: 'localhost', port } })
    .use(EmergencyInfoController)
    .listen(port)

  const api = edenTreaty<typeof mockApp>(`http://localhost:${port}`)

  describe('응급실', async () => {
    it('응급실 실시간 가용병상정보 조회 테스트', async () => {
      const response = await api['emergency-info']['available-beds'].get()
      expect(response.data).toEqual(
        OpenDataResponseDto.from<EmergencyRoomRealtimeUsefulStockbedInfo[]>(
          OpenDataResponseDto.extractItem(emergencyRoomRealTimeUsefulStockbedInfoList),
          OpenDataResponseDto.pagination(emergencyRoomRealTimeUsefulStockbedInfoList),
        ),
      )
    })
  })
})
