// @ts-nocheck
import { useEffect, useState } from "preact/hooks";
export const Test = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [activeItem, setActiveItem] = useState("item-1-toggle");
  const testFnc = () => console.log("click");
  const testFnc2 = () => console.log("mouseover");
  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}>Update count</button>
        <button onClick={() => setLoading(!loading)}>Toggle loading</button>
        <button onClick={() => setDisabled(!disabled)}>Toggle disabled</button>
        {/* components/pf-button */}
        <pf-button
          variant="danger"
          isLoading={loading}
          isDisabled={disabled}
          onclick={testFnc}
          onmouseover={testFnc2}
        >
          {count}
        </pf-button>
      </div>
      <br />
      <div style={{ width: "400px" }}>
        {/* components/pf-accordion-components */}
        <pf-x-accordion>
          <pf-x-accordion-item>
            <pf-x-accordion-toggle
              onMouseover={testFnc2}
              onClick={() =>
                setActiveItem(
                  activeItem === "item-1-toggle" ? null : "item-1-toggle"
                )
              }
              isExpanded={activeItem === "item-1-toggle"}
              component="dt"
              id="item-1-toggle"
            >
              Item one
            </pf-x-accordion-toggle>
            <pf-x-accordion-content
              isHidden={activeItem !== "item-1-toggle"}
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
              onClick={() =>
                setActiveItem(
                  activeItem === "item-2-toggle" ? null : "item-2-toggle"
                )
              }
              isExpanded={activeItem === "item-2-toggle"}
              component="dt"
              id="item-2-toggle"
            >
              Item two
            </pf-x-accordion-toggle>
            <pf-x-accordion-content
              isHidden={activeItem !== "item-2-toggle"}
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
    </>
  );
};
