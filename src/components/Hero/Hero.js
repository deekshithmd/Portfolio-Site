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
        I am a passionate web developer specialized in frontend technologies
        like HTML, CSS ,Javascript, React, VueJS, NextJS
      </SectionText>
      <Button
        onClick={() => (window.location = "https://github.com/deekshithmd")}
      >
        Know More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
