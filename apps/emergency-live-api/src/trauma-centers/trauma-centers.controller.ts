import { Elysia } from 'elysia'
import { TraumaCentersService } from './trauma-centers.service'

export const TraumaCentersController = new Elysia({
  name: 'TraumaCentersController',
}).group(
  '/trauma-centers',
  {
    detail: {
      tags: ['외상센터'],
    },
  },
  app =>
    app
      .use(TraumaCentersService.use())

      .get(
        '',
        async ({ traumaCentersService }) => {
          return await traumaCentersService.getTraumaCenterListInfoInquire()
        },
        {
          detail: {
            summary: '외상센터 목록정보 조회',
            description: '외상센터 목록정보를 조회합니다.',
          },
        },
      )

      .get(
        '/locations',
        ({ traumaCentersService }) => {
          return 'getTraumaCenterLocationInfoInquire'
        },
        {
          detail: {
            summary: '외상센터 위치정보 조회',
            description: '외상센터 위치정보를 조회합니다.',
          },
        },
      )

      .get(
        '/basic-info',
        async ({ traumaCentersService }) => {
          return await traumaCentersService.getTraumaCenterBasicInfoInquire()
        },
        {
          detail: {
            summary: '외상센터 기본정보 조회',
            description: '외상센터 기본정보를 조회합니다.',
          },
        },
      ),
)
