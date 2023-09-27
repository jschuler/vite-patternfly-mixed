import {
  Accordion,
  AccordionToggle,
  AccordionItem,
  AccordionContent,
} from "@patternfly/react-core";
import baseStyles from "@patternfly/patternfly/patternfly-base.css?inline";
import accordionStyles from "@patternfly/patternfly/components/Accordion/accordion.css?inline";
import register from "preact-custom-element";

// hack because the PF base styles selector does not work in shadow root
const baseShadowStyles = baseStyles.replace(':where(:root)', ':host');

const WrappedAccordion = ({ children }) => (
  <>
    {/* <style>{baseShadowStyles}</style> */}
    <style>{accordionStyles}</style>
    <Accordion>{children}</Accordion>
  </>
);
register(WrappedAccordion, "pf-x-accordion", ["children"], { shadow: true });

const WrappedAccordionContent = ({ children, isHidden, component, id }) => (
  <>
    <style>{baseStyles}</style>
    <style>{accordionStyles}</style>
    <AccordionContent isHidden={isHidden} component={component} id={id}>
      {children}
    </AccordionContent>
  </>
);
register(
  WrappedAccordionContent,
  "pf-x-accordion-content",
  ["isHidden", "component", "id", "children"],
  { shadow: true }
);

const WrappedAccordionToggle = ({ children, isExpanded, component, id }) => (
  <>
    <style>{baseStyles}</style>
    <style>{accordionStyles}</style>
    <AccordionToggle isExpanded={isExpanded} component={component} id={id}>
      {children}
    </AccordionToggle>
  </>
);
register(
  WrappedAccordionToggle,
  "pf-x-accordion-toggle",
  ["isExpanded", "component", "id", "children"],
  { shadow: true }
);

const WrappedAccordionItem = ({ children }) => (
  <>
    <style>{baseStyles}</style>
    <style>{accordionStyles}</style>
    <AccordionItem>{children}</AccordionItem>
  </>
);
register(WrappedAccordionItem, "pf-x-accordion-item", ["children"], {
  shadow: true,
});
