import { Elysia } from 'elysia'
import { OpenDataResponseDto } from '../common/dto'
import {
  EmergencyRoomRealtimeUsefulStockbedInfo,
  EmergencyTreatmentListInfo,
  SevereIllnessDiseaseAcceptancePossibleInfo,
} from './model'
import {
  emergencyRoomRealTimeUsefulStockbedInfoList,
  emergencyTreatmentListInfoList,
  severeIllnessDiseaseAcceptancePossibleInfoList,
} from './sample-data'

export class EmergencyInfoService {
  static use() {
    return new Elysia({ name: 'EmergencyInfoService' }).decorate(
      'emergencyInfoService',
      new EmergencyInfoService(),
    )
  }

  async getEmergencyRoomRealtimeUsefulStockbedInformationInquire(): Promise<
    OpenDataResponseDto<EmergencyRoomRealtimeUsefulStockbedInfo[]>
  > {
    const result = OpenDataResponseDto.from<EmergencyRoomRealtimeUsefulStockbedInfo[]>(
      OpenDataResponseDto.extractItem(emergencyRoomRealTimeUsefulStockbedInfoList),
      OpenDataResponseDto.pagination(emergencyRoomRealTimeUsefulStockbedInfoList),
    )

    return result
  }

  async getSevereIllnessDiseaseAcceptancePossibleInfoInquire(): Promise<
    OpenDataResponseDto<SevereIllnessDiseaseAcceptancePossibleInfo[]>
  > {
    const result = OpenDataResponseDto.from<SevereIllnessDiseaseAcceptancePossibleInfo[]>(
      OpenDataResponseDto.extractItem(severeIllnessDiseaseAcceptancePossibleInfoList),
      OpenDataResponseDto.pagination(severeIllnessDiseaseAcceptancePossibleInfoList),
    )

    return result
  }

  async getEmergencyTreatmentListInfoInquire(): Promise<
    OpenDataResponseDto<EmergencyTreatmentListInfo[]>
  > {
    const result = OpenDataResponseDto.from<EmergencyTreatmentListInfo[]>(
      OpenDataResponseDto.extractItem(emergencyTreatmentListInfoList),
      OpenDataResponseDto.pagination(emergencyTreatmentListInfoList),
    )

    return result
  }
}
