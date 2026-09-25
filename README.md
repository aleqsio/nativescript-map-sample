# nativescript-map-sample

A small NativeScript Core app that dogfoods the [screenmap](https://github.com/aleqsio/screenmap) GitHub Action on a NativeScript project, the way [expo-map-sample](https://github.com/aleqsio/expo-map-sample) does for Expo.

- Three pages: Home, Details and Settings, linked with `Frame.navigate`.
- `nsmapsample://home`, `nsmapsample://details` and `nsmapsample://settings` open those pages (`app/app.ts`). `.screenmap/config.json` tells screenmap which link opens which page under `routes.links`.
- `.github/workflows/` builds the simulator app with `ns build ios` and passes it to the Action as `app_path`. The Action never builds a NativeScript app itself.

Run it locally with `npm install` and `ns run ios`.
