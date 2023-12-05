import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import LCGLogo from "assets/logos/logo-lcg-footer.svg";
import facebookIcon from "assets/icons/facebook.svg";
import instagramIcon from "assets/icons/instagram.svg";
import Arrow from "assets/icons/Arrow";

const StyledContainer = styled.footer`
  padding: 30px 0;
  row-gap: 30px;
  border-top: 2px solid ${({ theme }) => theme.colors.brandBrown};
  @media ${({ theme }) => theme.minWidth.sm} {
    row-gap: 15px;
  }
  @media ${({ theme }) => theme.minWidth.xl} {
    row-gap: 30px;
  }
  .LCGLogo {
    grid-column: 1/8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 1/2;
      grid-row: 1/3;
    }
  }
  h2 {
    font-size: 16px;
    font-family: Moderat Mono Bold;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin-bottom: 15px;
    white-space: nowrap;
  }
  .adresse {
    grid-column: 1/5;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 2/4;
    }
    @media ${({ theme }) => theme.minWidth.xl} {
      grid-column: 3/5;
    }
  }
  .nousSuivre {
    grid-column: 5/8;
    justify-self: end;
    text-align: right;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 4/8;
      grid-row: 1/1;
    }
    @media ${({ theme }) => theme.minWidth.xl} {
      grid-column: 5/8;
    }
    & > div {
      margin-left: auto;
      display: flex;
      justify-content: flex-end;
      a {
        margin-left: 15px;
      }
    }
  }
  .contact {
    grid-column: 1/8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 4/8;
      grid-row: 1/1;
    }
    @media ${({ theme }) => theme.minWidth.xl} {
      grid-column: 5/8;
    }
  }
  .mentions {
    grid-column: 1/8;
    text-decoration: underline;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 6/8;
      grid-row: 2/2;
      justify-self: end;
    }
  }
  .credits {
    grid-column: 1/8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 2/6;
      grid-row: 2/2;
    }
    @media ${({ theme }) => theme.minWidth.xl} {
      grid-column: 3/6;
    }
  }
  .mentions,
  .credits {
    font-family: Moderat Mono;
    font-size: 10px;
    line-height: 160%;
    @media ${({ theme }) => theme.minWidth.sm} {
      align-self: end;
    }
    @media ${({ theme }) => theme.minWidth.xl} {
      font-size: 12px;
    }
    a {
      text-decoration: underline;
      display: inline;
    }
  }
`;

const Footer = () => {
  return (
    <StyledContainer className="grid">
      <img className="LCGLogo" src={LCGLogo} alt="" />
      <div className="adresse">
        <h2>Adresse</h2>
        <a href="https://www.google.fr/maps/dir//La+Croix+Gratiot,+Sainte+Croix,+Montagnac,+34530+Montagnac/@43.4487056,3.5270444,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x12ab86d1065040af:0xc820a3578a1dc20e!2m2!1d3.529626!2d43.448699?entry=ttu">
          La Croix Gratiot,
          <br />
          Anaïs & Yves Ricome,
          <br />
          Sainte Croix,
          <br />
          34530, Montagnac
        </a>
      </div>
      <div className="nousSuivre">
        <h2>Nous Suivre</h2>
        <div>
          <a href="https://www.facebook.com/lacroixgratiot/">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/laxgratiot/?hl=fr">
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="contact">
        <h2>Contact</h2>
        <a href="tel:+33467252788" className="btn">
          <Arrow />
          04 67 25 27 88
        </a>
        <a href="mailto:contact@croix-gratiot.com" className="btn">
          <Arrow />
          contact@croix-gratiot.com
        </a>
      </div>
      <Link to="/mentions-legales/" className="mentions">
        Mentions légales
      </Link>
      <p className="credits">
        Site réalisé par <a href="https://clementlapasset.dev/">Clément</a> et{" "}
        <a href="https://alapasset.dev/">Adrien Lapasset</a>, photos par{" "}
        <a href="http://www.aureliablanc.com/">Aurélia Blanc</a>
      </p>
    </StyledContainer>
  );
};

export default Footer;
