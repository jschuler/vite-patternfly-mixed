import { render } from "preact";
// Global styles
import "@patternfly/react-core/dist/styles/base.css";

// PatternFly Elements
// import "@webcomponents/webcomponentsjs/custom-elements-es5-adapter";
// import "@webcomponents/webcomponentsjs/webcomponents-bundle";
// import "@patternfly/pfe-card";
// import "@patternfly/pfe-cta";
// import "@patternfly/pfe-accordion";
// import "@patternfly/pfe-button";
// import '@patternfly/elements/pf-accordion/pf-accordion.js'
// import '@patternfly/elements/pf-button/pf-button.js'

// webcomponents from react-core
import "./components/pf-button";
import "./components/pf-accordion-components";

// PatternFly Elements exporting out react-core components transformed to webcomponents
// import "@patternfly/elements/pf-x-alert/pf-x-alert.js";
// import "@patternfly/elements/pf-x-button/pf-x-button.js";
// import "@patternfly/elements/pf-x-accordion/pf-x-accordion.js";
// import "@patternfly/elements/pf-x-accordion-content/pf-x-accordion-content.js";
// import "@patternfly/elements/pf-x-accordion-toggle/pf-x-accordion-toggle.js";
// import "@patternfly/elements/pf-x-accordion-item/pf-x-accordion-item.js";

import { Test } from "./pages/test-pf-wrapped";
render(<Test />, document.getElementById("app")!);
