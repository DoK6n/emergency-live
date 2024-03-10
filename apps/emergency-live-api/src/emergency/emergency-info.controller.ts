import { Elysia } from 'elysia'
import { EmergencyInfoService } from './emergency-info.service'

export const EmergencyInfoController = new Elysia({
  name: 'EmergencyInfoController',
}).group(
  '/emergency-info',
  {
    detail: {
      tags: ['emergency-info'],
    },
  },
  app =>
    app
      .use(EmergencyInfoService.use())

      .get(
        '/available-beds',
        ({ emergencyInfoService }) => {
          return emergencyInfoService.getData()
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
        ({ emergencyInfoService }) => {
          return 'getSevereIllnessDiseaseAcceptancePossibleInfoInquire'
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
        ({ emergencyInfoService }) => {
          return 'getEmergencyTreatmentListInfoInquire'
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
        ({ emergencyInfoService }) => {
          return 'getEmergencyTreatmentLocationInfoInquire'
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
        '/trauma-centers',
        ({ emergencyInfoService }) => {
          return 'getTraumaCenterListInfoInquire'
        },
        {
          detail: {
            summary: '외상센터 목록정보 조회',
            description: '외상센터 목록정보를 조회합니다.',
          },
        },
      )

      .get(
        '/trauma-centers/locations',
        ({ emergencyInfoService }) => {
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
        '/trauma-centers/basic-info',
        ({ emergencyInfoService }) => {
          return 'getTraumaCenterBasicInfoInquire'
        },
        {
          detail: {
            summary: '외상센터 기본정보 조회',
            description: '외상센터 기본정보를 조회합니다.',
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
