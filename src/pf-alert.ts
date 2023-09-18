import { Alert } from "@patternfly/react-core";

// import register from 'preact-custom-element';
// register(Alert, 'pf-alert', ['variant', 'title', 'children'], { shadow: true });

import { define } from "preactement";
define("pf-alert", () => Alert, {
  attributes: ["variant", "title", "is-expandable"],
});

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "pf-alert": PfAlertAttributes;
    }
  }
}

interface PfAlertAttributes extends preact.JSX.HTMLAttributes<HTMLElement> {
  variant?: string;
  title?: string;
  "is-expandable"?: boolean;
}
