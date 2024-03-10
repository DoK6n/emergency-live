import { describe, expect, it } from 'bun:test'
import { edenTreaty } from '@elysiajs/eden'
import { TraumaCentersController } from './trauma-centers.controller'
import { Elysia } from 'elysia'
import { traumaCenterInfo, traumaCenterListInfo } from './sample-data'
import { OpenDataResponseDto } from '../common/dto'

describe('trauma-centers', async () => {
  const mockApp = new Elysia({ serve: { hostname: 'localhost' } }).use(TraumaCentersController)
  const api = edenTreaty<typeof mockApp>(`http://localhost:${process.env.PORT}`)

  describe('외상센터', async () => {
    it('외상센터 목록정보 조회 테스트', async () => {
      const response = await api['trauma-centers'].get()
      expect(response.data).toEqual(
        OpenDataResponseDto.from(
          OpenDataResponseDto.extractItem(traumaCenterListInfo),
          OpenDataResponseDto.pagination(traumaCenterListInfo),
        ),
      )
    })

    it('외상센터 기본정보 조회 테스트', async () => {
      const response = await api['trauma-centers']['basic-info'].get()
      expect(response.data).toEqual(
        OpenDataResponseDto.from(
          OpenDataResponseDto.extractItem(traumaCenterInfo),
          OpenDataResponseDto.pagination(traumaCenterInfo),
        ),
      )
    })
  })
})
