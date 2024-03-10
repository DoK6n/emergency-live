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
            description:
              '주소, 진료요일, 진료과목 등을 기준으로 응급의료기관 목록정보 조회 기능제공',
          },
        },
      )

      .get(
        '/locations',
        async ({ traumaCentersService }) => {
          return await traumaCentersService.getTraumaCenterLocationInfoInquire()
        },
        {
          detail: {
            summary: '외상센터 위치정보 조회',
            description:
              '위/경도를 기준으로 응급의료기관 위치 정보등을 조회하는 응급의료기관 위치정보 조회 기능제공',
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
            description:
              '기관ID를 기준으로 진료요일, 응급실 정보 등을 조회하는 응급의료기관 기본정보 조회 기능제공',
          },
        },
      ),
)
