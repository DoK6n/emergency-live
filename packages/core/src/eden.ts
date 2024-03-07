import { edenTreaty } from '@elysiajs/eden'
import type { EmergencyLiveServerApp } from '@app/emergency-live-api'

export const api = edenTreaty<EmergencyLiveServerApp>('http://localhost:3000/')