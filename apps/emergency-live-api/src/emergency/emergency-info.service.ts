import { Elysia } from 'elysia'
import { OpenDataResponseDto } from '../common/dto'
import { EmergencyRoomRealtimeUsefulStockbedInfo } from './model'
import { emergencyRoomRealTimeUsefulStockbedInfoList } from './sample-data'

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
}
