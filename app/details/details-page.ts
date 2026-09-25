import { EventData, Frame } from '@nativescript/core'

export function onOpenSettings(args: EventData) {
  Frame.topmost().navigate({ moduleName: 'settings/settings-page' })
}
