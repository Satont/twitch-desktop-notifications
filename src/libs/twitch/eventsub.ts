import {EventSubWsListener} from '@twurple/eventsub-ws'

import { apiClient } from './api.js'

export const eventSub = new EventSubWsListener({
  apiClient,
})