import {
  require_client
} from "/build/_shared/chunk-IFJ75IDK.js";
import {
  RemixBrowser
} from "/build/_shared/chunk-7X624UQH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-ED7KKCRB.js";
import {
  createHotContext
} from "/build/_shared/chunk-PYZTZDTV.js";
import "/build/_shared/chunk-ZIPKILLR.js";
import "/build/_shared/chunk-RYE6BCZB.js";
import {
  require_react
} from "/build/_shared/chunk-PECDPABK.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/entry.client.tsx
var import_react2 = __toESM(require_react());
var import_client = __toESM(require_client());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/entry.client.tsx"
  );
  import.meta.hot.lastModified = "1708697012912.1824";
}
function hydrate() {
  (0, import_react2.startTransition)(() => {
    (0, import_client.hydrateRoot)(
      document,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemixBrowser, {}, void 0, false, {
        fileName: "app/entry.client.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/entry.client.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this)
    );
  });
}
if (typeof requestIdleCallback === "function") {
  requestIdleCallback(hydrate);
} else {
  setTimeout(hydrate, 1);
}
//# sourceMappingURL=/build/entry.client-ZP7HT3DL.js.map
