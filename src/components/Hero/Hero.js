import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am am passionate developer specialized in frontend technologies like
        HTML, CSS ,Javascript, React, VueJS, NextJS
      </SectionText>
      <Button onClick={() => (window.location = "https://www.google.com")}>
        View More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
