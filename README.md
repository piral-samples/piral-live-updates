[![Piral Logo](https://github.com/smapiot/piral/raw/develop/docs/assets/logo.png)](https://piral.io)

# [Piral Sample](https://piral.io) &middot; [![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/smapiot/piral/blob/main/LICENSE) [![Gitter Chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/piral-io/community)

> Show how a Piral instance may be live updated.

:zap: This sample demonstrates using `piral-update` to swap a pilet at runtime when it changes.

You can visit this demo at [live-updates.samples.piral.cloud/](https://live-updates.samples.piral.cloud/).

## Getting Started

Install the dependencies:

```sh
npm install
```

If you want to change the values to your auth0 provider then go ahead and modify the values in the *src/client.ts* module. These values need to come from auth0 as shown in the next section.

Now run:

```sh
npm start
```

The app shell should be up and running.

For the sample the update is just a simple swap of the "mario5" pilet with the "spaceshoot" pilet. We do not use the feed service for this as these would be two different pilets there and no update is actually happening. Instead, we create the response directly, telling the app shell that both pilets are the same, but in different versions.

## More Information

You find more information at the the [plugin page](https://docs.piral.io/plugins/piral-update).

## License

Piral and this sample code is released using the MIT license. For more information see the [license file](./LICENSE).
