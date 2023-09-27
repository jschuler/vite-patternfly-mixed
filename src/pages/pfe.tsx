// @ts-nocheck
import { useRef, useEffect } from "preact/hooks";

export const PfeSection = () => {
  const accordion = useRef();
  useEffect(() => {
    accordion.current.toggle(0);
  });
  return (
    <>
      <pfe-card color="darkest">
        {/* <img
      alt="From https://picsum.photos/"
      overflow="left right top"
      src="https://picsum.photos/id/1019/300/200"
    /> */}
        <p>
          This is the light pfe-card and <a href="#">a link</a>.
        </p>
        <p>
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate strategy foster
          collaborative thinking to further the overall value proposition.
        </p>
        <p>
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment.
        </p>
        <pfe-cta slot="pfe-card--footer">
          <a href="#">Learn more</a>
        </pfe-cta>
      </pfe-card>
      <pfe-accordion ref={accordion}>
        <pfe-accordion-header>
          <h3>Why do wizards need money if they could just create it?</h3>
        </pfe-accordion-header>
        <pfe-accordion-panel>
          <p>
            There is legislation that decides what you can conjure and what you
            can not. Because things that you conjure out of thin air will not
            last, it is illegal in the wizarding world.
          </p>
        </pfe-accordion-panel>
        <pfe-accordion-header>
          <h3>Why doesn't Harry have a portrait of his parents?</h3>
        </pfe-accordion-header>
        <pfe-accordion-panel>
          <p>
            <a href="#">The characters in the portraits</a> are not actually
            ghosts. They mainly are there just to repeat common phrases or serve
            as a general
            <a href="foobarbaz.com">representation of the individual</a> they
            depict. A portrait of his parents would not be of much help to
            Harry.
          </p>
        </pfe-accordion-panel>
        <pfe-accordion-header>
          <h3>
            Why is Harry considered a half-blood if both of his parents could
            use magic?
          </h3>
        </pfe-accordion-header>
        <pfe-accordion-panel>
          <p>
            Because Harry's grandparents were not able to do magic. This is
            generally frowned upon by those who consider themselves pure, such
            as the Malfoy's or other antagonists.
          </p>
        </pfe-accordion-panel>
        <pfe-accordion-header>
          <h3>Is Hogwarts the only wizarding school?</h3>
        </pfe-accordion-header>
        <pfe-accordion-panel>
          <p>
            No! It has been revealed that there are actually 11 long established
            and prestigious schools around the globe. These include Castelobruxo
            in the rainforest of Brazil, Durmstrang Institute (whereas nobody is
            certain of it’s whereabouts), and Ilvermorny, right here in the
            United States.
          </p>
        </pfe-accordion-panel>
        <pfe-accordion-header>
          <h3>Where do the main characters work as adults?</h3>
        </pfe-accordion-header>
        <pfe-accordion-panel>
          <p>
            Harry and Hermione are at the Ministry: he ends up leading the Auror
            department. Ron helps George at the joke shop and does very well.
            Ginny becomes a professional Quidditch player and then sportswriter
            for the Daily Prophet.
          </p>
          <p>
            <a
              href="https://www.pottermore.com/collection/characters"
              target="blank"
            >
              Read more about the characters
            </a>
          </p>
        </pfe-accordion-panel>
      </pfe-accordion>
    </>
  );
};
