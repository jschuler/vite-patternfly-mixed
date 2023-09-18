import { Button } from "@patternfly/react-core";

import { define } from "preactement";
define("pf-button", () => Button, {
  attributes: ["variant", "is-disabled", "is-loading"],
});

declare global {
  interface HTMLElementTagNameMap {
    "pf-button": unknown;
  }
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "pf-button": PfButtonAttributes;
    }
  }
}

interface PfButtonAttributes extends preact.JSX.HTMLAttributes<HTMLElement> {}
