import { Elysia } from 'elysia'

export class EmergencyInfoService {
  static use() {
    return new Elysia({ name: 'EmergencyInfoService' }).decorate(
      'emergencyInfoService',
      new EmergencyInfoService(),
    )
  }

  getData() {
    return { name: 'getEmrrmRltmUsefulSckbdInfoInqire' }
  }
}
