import { Elysia } from 'elysia'
import { EmergencyInfoService } from './emergency-info.service'

export const EmergencyInfoController = new Elysia({
  name: 'EmergencyInfoController',
}).group(
  '/emergency-info',
  {
    detail: {
      tags: ['응급실 관련 정보'],
    },
  },
  app =>
    app
      .use(EmergencyInfoService.use())

      .get(
        '/available-beds',
        async ({ emergencyInfoService }) => {
          return await emergencyInfoService.getEmergencyRoomRealtimeUsefulStockbedInformationInquire()
        },
        {
          detail: {
            summary: '응급실 실시간 가용병상정보 조회',
            description: '응급실 실시간 가용병상정보를 조회합니다.',
          },
        },
      )

      .get(
        '/severe-disease-acceptance',
        async ({ emergencyInfoService }) => {
          return await emergencyInfoService.getSevereIllnessDiseaseAcceptancePossibleInfoInquire()
        },
        {
          detail: {
            summary: '중증질환자 수용가능정보 조회',
            description: '중증질환자 수용가능정보 조회를 조회합니다.',
          },
        },
      )

      .get(
        '/emergency-medical-institutions',
        async ({ emergencyInfoService }) => {
          return await emergencyInfoService.getEmergencyTreatmentListInfoInquire()
        },
        {
          detail: {
            summary: '응급의료기관 목록정보 조회',
            description: '응급의료기관 목록정보 조회를 조회합니다.',
          },
        },
      )

      .get(
        '/emergency-medical-institutions/locations',
        async ({ emergencyInfoService }) => {
          return await emergencyInfoService.getEmergencyTreatmentLocationInfoInquire()
        },
        {
          detail: {
            summary: '응급의료기관 위치정보 조회',
            description: '응급의료기관 위치정보를 조회합니다.',
          },
        },
      )

      .get(
        '/emergency-medical-institutions/basic-info',
        ({ emergencyInfoService }) => {
          return 'getEmergencyTreatmentBasicInfoInquire'
        },
        {
          detail: {
            summary: '응급의료기관 기본정보 조회',
            description: '응급의료기관 기본정보를 조회합니다.',
          },
        },
      )

      .get(
        '/emergency-severe-disease-messages',
        ({ emergencyInfoService }) => {
          return 'getEmergencyRoomSevereIllnessDiseaseMessageInquire'
        },
        {
          detail: {
            summary: '응급실 및 중증질환 메시지 조회',
            description: '응급실 및 중증질환 메시지 조회를 조회합니다.',
          },
        },
      ),
)
