export const Test = () => (
  <>
    <h1>Pure webcomponents from PFE</h1>
    <pfe-button>
      <button>My Button</button>
    </pfe-button>
    <pfe-accordion history id="lorem-ipsum">
      <pfe-accordion-header>
        <h3>Accordion 1</h3>
      </pfe-accordion-header>
      <pfe-accordion-panel>
        <p>Accordion 1 panel content.</p>
      </pfe-accordion-panel>
      <pfe-accordion-header>
        <h3>Accordion 2</h3>
      </pfe-accordion-header>
      <pfe-accordion-panel>
        <p>Accordion 2 panel content.</p>
      </pfe-accordion-panel>
    </pfe-accordion>
  </>
);
