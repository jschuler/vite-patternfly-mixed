import register from 'preact-custom-element';

import { Button } from "@patternfly/react-core";
import baseStyles from '@patternfly/patternfly/patternfly-base.css?inline';
import buttonStyles from '@patternfly/patternfly/components/Button/button.css?inline';
import spinnerStyles from '@patternfly/patternfly/components/Spinner/spinner.css?inline';

// hack because the PF base styles selector does not work in shadow root
const baseShadowStyles = baseStyles.replace(':where(:root)', ':host');

const WrappedButton = ({ variant, isLoading, isDisabled, children }) => (
  <>
    {/* <style>{baseShadowStyles}</style> */}
    <style>{buttonStyles}</style>
    <style>{spinnerStyles}</style>
    <Button variant={variant} isLoading={isLoading} isDisabled={isDisabled}>{children}</Button>
  </>
);

register(WrappedButton, 'pf-button', ['variant', 'isLoading', 'isDisabled', 'children'], { shadow: true });

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
