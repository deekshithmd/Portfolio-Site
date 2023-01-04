import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section nopadding id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I am skilled in web technologies like HTML, CSS, Javascript, ReactJS,
      Redux Toolkit, Typescript, Version control tool Github, API Testing tool
      Postman, Web hosting platform netlify, vercel.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with <br /> ReactJS, VueJS, NextJS
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with <br /> NodeJS, ExpressJS
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph>
          Experience with <br /> tools like Figma
        </ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
