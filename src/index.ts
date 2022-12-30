import notifier from 'node-notifier'

import './libs/config.js'
import { eventSub } from "./libs/twitch/eventsub.js";
import { apiClient } from "./libs/twitch/api.js";
import * as os from "node:os";
import { resolve } from "node:path";

await eventSub.start()

const icon = resolve(os.homedir(), 'Pictures', 'twitch.png')
const me = await apiClient.users.getMe()

await eventSub.subscribeToChannelFollowEvents(me.id, (event) => {
  notifier.notify({
    title: `New Follow`,
    message: event.userName,
    icon,
    timeout: 10
  })
})

await eventSub.subscribeToChannelRaidEventsTo(me.id, (event) => {
  notifier.notify({
    title: 'New Raid',
    message: `${event.raidingBroadcasterName} with ${event.viewers}`,
    icon,
    timeout: 10,
  })
})

notifier.notify({
  title: '[twitch-notifications]',
  message: 'Notifier started'
})