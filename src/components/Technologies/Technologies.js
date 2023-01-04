import React from "react";
import { DiCloud9, DiFirebase, DiGit, DiReact, DiZend } from "react-icons/di";
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
        <ListTitle>Front End</ListTitle>
        <ListParagraph>
          Experienced in Front End Technologies like <br /> HTML, CSS,
          Javascript, ReactJS, Context, Redux, VueJS, NextJS, Material UI,
          Styled Components, Sass
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiGit size="3rem" />
        <ListTitle>Version Control</ListTitle>
        <ListParagraph>
          Experience with <br /> Git, Github
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiCloud9 size="3rem" />
        <ListTitle>Hosting Technologies</ListTitle>
        <ListParagraph>
          Experience with <br /> Netlify, Vercel
        </ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
