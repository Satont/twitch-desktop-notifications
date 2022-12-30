import notifier from 'node-notifier'

import './libs/config.js'
import { eventSub } from "./libs/twitch/eventsub.js";
import { apiClient } from "./libs/twitch/api.js";

await eventSub.start()

const me = await apiClient.users.getMe()

await eventSub.subscribeToChannelFollowEvents(me.id, (event) => {
  notifier.notify({
    title: `New Follow`,
    message: event.userName,
    time: 10000,
  })
})

await eventSub.subscribeToChannelRaidEventsTo(me.id, (event) => {
  notifier.notify({
    title: 'New Raid',
    message: `${event.raidingBroadcasterName} with ${event.viewers}`,
    time: 10000,
  })
})

notifier.notify({
  title: '[twitch-notifications]',
  message: 'Notifier started'
})