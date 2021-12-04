import "piral/polyfills";
import { renderInstance } from "piral";
import { layout, errors } from "./layout";
import { createUpdateApi } from "piral-update";

renderInstance({
  layout,
  errors,
  plugins: [
    createUpdateApi({
      listen(notify, context) {
        context.on("trigger-update", () => {
          notify([
            {
              name: "sample-pilet",
              version: "2.0.0",
              requireRef: "pr_353df83fcd808a0788887cd38dbf9c50",
              link: "https://assets.piral.cloud/pilets/sample/spaceshoot-sample-pilet/1.2.0/index.js",
              spec: "v1",
            },
          ]);
        });
      },
    }),
  ],
  requestPilets() {
    return Promise.resolve([
      {
        name: "sample-pilet",
        version: "1.0.0",
        requireRef: "pr_93e526457f367ddacf7e5f409332fda3",
        link: "https://assets.piral.cloud/pilets/sample/mario5-sample-pilet/1.2.0/index.js",
        spec: "v1",
      },
    ]);
  },
});
