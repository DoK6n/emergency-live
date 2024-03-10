import { Elysia } from 'elysia'
import { traumaCenterInfo, traumaCenterListInfo, traumaCenterLocationInfo } from './sample-data'
import { OpenDataResponseDto } from '../common/dto'
import { TraumaCenterInfo, TraumaCenterLocationInfo, TraumaCenterSummaryInfo } from './model'

export class TraumaCentersService {
  static use() {
    return new Elysia({ name: 'TraumaCentersService' }).decorate(
      'traumaCentersService',
      new TraumaCentersService(),
    )
  }

  async getTraumaCenterListInfoInquire(): Promise<OpenDataResponseDto<TraumaCenterSummaryInfo[]>> {
    const traumaCenterList = OpenDataResponseDto.from<TraumaCenterSummaryInfo[]>(
      OpenDataResponseDto.extractItem(traumaCenterListInfo),
      OpenDataResponseDto.pagination(traumaCenterListInfo),
    )

    return traumaCenterList
  }

  async getTraumaCenterLocationInfoInquire(): Promise<
    OpenDataResponseDto<TraumaCenterLocationInfo>
  > {
    const traumaCenterLocation = OpenDataResponseDto.from<TraumaCenterLocationInfo>(
      OpenDataResponseDto.extractItem(traumaCenterLocationInfo),
      OpenDataResponseDto.pagination(traumaCenterLocationInfo),
    )

    return traumaCenterLocation
  }

  async getTraumaCenterBasicInfoInquire(): Promise<OpenDataResponseDto<TraumaCenterInfo>> {
    const traumaCenter = OpenDataResponseDto.from<TraumaCenterInfo>(
      OpenDataResponseDto.extractItem(traumaCenterInfo),
      OpenDataResponseDto.pagination(traumaCenterInfo),
    )

    return traumaCenter
  }
}
