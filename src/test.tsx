// @ts-nocheck
import { useEffect, useState } from "preact/hooks";
export const Test = () => {
  const [activeItem, setActiveItem] = useState("item-1-toggle");
  useEffect(() => {
    for (var i = 1; i < 3; i++) {
      let btn = document.querySelector(`#item-${i}-toggle`);
      btn.addEventListener("click", function (event) {
        debugger;
        setActiveItem(event.target.id);
      });
    }
  }, []);
  return (
    <>
      <h1>
        PFE exporting out react-core components transformed to webcomponents
      </h1>
      {/* <pf-x-alert variant="danger" title="test" is-expandable>
      <pf-x-button is-loading>Loading</pf-x-button>
      <pf-x-button>Primary</pf-x-button>
      <pf-x-button variant="secondary">Secondary</pf-x-button>
    </pf-x-alert> */}
      <pf-x-button is-loading>Loading</pf-x-button>
      <pf-x-button>Primary</pf-x-button>
      <pf-x-button variant="secondary">Secondary</pf-x-button>
      <div style={{ width: "400px" }}>
        <div>activeItem: {activeItem}</div>
        <pf-x-accordion>
          <pf-x-accordion-item>
            <pf-x-accordion-toggle
              is-expanded={activeItem === 'item-1-toggle'}
              component="dt"
              id="item-1-toggle"
            >
              Item one
            </pf-x-accordion-toggle>
            <pf-x-accordion-content
              is-hidden={activeItem !== 'item-1-toggle'}
              component="dd"
              id="item-1-content"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </pf-x-accordion-content>
          </pf-x-accordion-item>
          <pf-x-accordion-item>
            <pf-x-accordion-toggle
              is-expanded={activeItem === 'item-2-toggle'}
              component="dt"
              id="item-2-toggle"
            >
              Item two
            </pf-x-accordion-toggle>
            <pf-x-accordion-content
              is-hidden={activeItem !== 'item-2-toggle'}
              component="dd"
              id="item-2-content"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </pf-x-accordion-content>
          </pf-x-accordion-item>
        </pf-x-accordion>
      </div>
      <br />
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
};
