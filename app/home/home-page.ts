import { EventData, Frame, NavigatedData, Page } from '@nativescript/core'

import { HomeViewModel } from './home-view-model'

export function onNavigatingTo(args: NavigatedData) {
  const page = <Page>args.object

  page.bindingContext = new HomeViewModel()
}

export function onOpenDetails(args: EventData) {
  Frame.topmost().navigate({ moduleName: 'details/details-page' })
}

export function onOpenSettings(args: EventData) {
  Frame.topmost().navigate({ moduleName: 'settings/settings-page' })
}
