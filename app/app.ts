import { Application, Frame } from '@nativescript/core'

// nsmapsample://<page> opens that page. The handler is registered before
// Application.run so a link that launches the app is not missed.
const pages: Record<string, string> = {
  '': 'home/home-page',
  home: 'home/home-page',
  details: 'details/details-page',
  settings: 'settings/settings-page',
}

function openLink(url: string) {
  const moduleName = pages[url.replace(/^nsmapsample:\/\//, '').replace(/\/$/, '')]
  if (!moduleName) return false
  Frame.topmost()?.navigate({ moduleName, animated: false })
  return true
}

if (__APPLE__) {
  Application.ios.addDelegateHandler('applicationOpenURLOptions', (_app, url) => openLink(url.absoluteString))
}

Application.run({ moduleName: 'app-root' })

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
