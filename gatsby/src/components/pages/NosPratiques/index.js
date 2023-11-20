import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const StyledContainer = styled.div``;

const NosPratiques = () => {
  return (
    <StyledContainer>
      <h1>Nos Pratiques</h1>
      <StaticImage src="../../../assets/imgs/homeHeroImage.jpg" alt="" />
    </StyledContainer>
  );
};

export default NosPratiques;
