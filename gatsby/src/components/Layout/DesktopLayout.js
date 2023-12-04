import React, { useRef, useEffect, useState } from "react";
import HomePage from "components/pages/HomePage";
import NosPratiquesPage from "components/pages/NosPratiques";
import LaDegustationPage from "components/pages/LaDegustation";
import NousRencontrerPage from "components/pages/NousRencontrer";
import styled from "styled-components";
import { Router, Link, useLocation, navigate } from "@reach/router";
import LogoLGCDesktop from "assets/logos/LogoLGCDesktop";
import { useContext } from "react";
import { Context } from "data/Context";

const StyledContainer = styled.div`
  nav {
    position: fixed;
    display: grid;
    top: 0;
    bottom: 0;
    width: 100%;
    transition: all 1s;
    grid-template-columns: ${({ $incomingPage }) =>
      $incomingPage === "/"
        ? "calc(100vw - 180px) 60px 60px 60px"
        : $incomingPage === "/nos-pratiques/"
        ? "60px calc(100vw - 180px) 60px 60px"
        : $incomingPage === "/la-degustation/"
        ? "60px 60px calc(100vw - 180px)  60px"
        : $incomingPage === "/nous-rencontrer/"
        ? "60px 60px 60px calc(100vw - 180px)"
        : null};
    & > div {
      transition: all 0.4s;
      display: block;
      border-left: 2px solid;
      border-color: ${({ $activeSection, theme }) =>
        $activeSection === "red" || $activeSection === "green"
          ? theme.colors.backgroundLight
          : theme.colors.brandBrown};
      padding: 30px 0 0 17.5px;
      button {
        transition: all 0.2s;
        writing-mode: sideways-lr;
        letter-spacing: 0.9px;
        text-transform: uppercase;
        font-size: 18px;
        text-align: end;
        text-orientation: upright;
        color: ${({ $activeSection, theme }) =>
          $activeSection === "red" || $activeSection === "green"
            ? theme.colors.backgroundLight
            : theme.colors.brandBrown};
      }
      &.homeNav {
        padding: 30px 0 0 14px;
        border: none;
      }
    }
  }
  main {
    position: relative;
    margin: ${({ $activePage }) =>
      $activePage === "/"
        ? "0 180px 0 60px"
        : $activePage === "/nos-pratiques/"
        ? "0 120px 0 120px"
        : $activePage === "/la-degustation/"
        ? "0 60px 0 180px"
        : $activePage === "/nous-rencontrer/"
        ? "0 0 0 240px"
        : null};
    &:not(.transitionMask) {
      transition: opacity 1s;
      opacity: ${({ $transitionIsActive }) => ($transitionIsActive ? 0 : 1)};
    }
    .transitionMask {
      position: absolute;
      background-color: ${({ theme }) => theme.colors.backgroundLight};
      height: 100vh;
      top: 0;
      transition: all 1s;
      width: ${({ $transitionIsActive }) => ($transitionIsActive ? 100 : 0)}%;
      right: ${({ $transitionDirection }) =>
        $transitionDirection === "left" && 0};
      left: ${({ $transitionDirection }) =>
        $transitionDirection === "right" && 0};
    }
  }
`;

export default function DesktopLayout() {
  const { pathname } = useLocation();

  const [activePage, setActivePage] = useState(pathname);
  const [incomingPage, setIncomingPage] = useState(pathname);
  const [transitionIsActive, setTransitionIsActive] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState("left");
  const { activeHomeSection } = useContext(Context);

  function handlePageChange(page) {
    setIncomingPage(page);
    setTransitionIsActive(true);
    if (pathname === "/") {
      setTransitionDirection("left");
    }
    if (
      (pathname === "/nos-pratiques/" && page === "/la-degustation/") ||
      page === "/nous-rencontrer/"
    ) {
      setTransitionDirection("left");
    }
    if (pathname === "/nos-pratiques/" && page === "/") {
      setTransitionDirection("right");
    }
    if (
      (pathname === "/la-degustation/" && page === "/nos-pratiques/") ||
      page === "/"
    ) {
      setTransitionDirection("right");
    }
    if (pathname === "/la-degustation/" && page === "/nous-rencontrer/") {
      setTransitionDirection("left");
    }
    if (pathname === "/nous-rencontrer/") {
      setTransitionDirection("right");
    }
    setTimeout(() => {
      navigate(page);
      setActivePage(page);
      setTransitionIsActive(false);
    }, 1000);
  }

  return (
    <StyledContainer
      $incomingPage={incomingPage}
      $activePage={activePage}
      $transitionIsActive={transitionIsActive}
      $transitionDirection={transitionDirection}
      $activeSection={activeHomeSection}
    >
      <main>
        <Router>
          <HomePage path="/" />
          <NosPratiquesPage path="/nos-pratiques/" />
          <LaDegustationPage path="/la-degustation/" />
          <NousRencontrerPage path="/nous-rencontrer/" />
        </Router>
        <div className="transitionMask"></div>
      </main>
      <nav>
        <div className="homeNav">
          <button onClick={() => handlePageChange("/")}>
            <LogoLGCDesktop />
          </button>
        </div>
        <div>
          <button onClick={() => handlePageChange("/nos-pratiques/")}>
            Nos Pratiques
          </button>
        </div>
        <div>
          <button onClick={() => handlePageChange("/la-degustation/")}>
            La Dégustation
          </button>
        </div>
        <div>
          <button onClick={() => handlePageChange("/nous-rencontrer/")}>
            Nous rencontrer
          </button>
        </div>
      </nav>
    </StyledContainer>
  );
}
