import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LogoLGCDesktop from "assets/logos/LogoLGCDesktop";
import { useContext } from "react";
import { Context } from "data/Context";
import { useI18next, Link } from "gatsby-plugin-react-i18next";
import Footer from "./Footer";

const StyledContainer = styled.div`
  nav {
    background-color: transparent;
    pointer-events: none;
    position: fixed;
    display: grid;
    top: 0;
    bottom: 0;
    width: 100%;
    transition: all 1s;
    grid-template-columns: ${({ $incomingPage }) =>
      $incomingPage === "/nos-pratiques/"
        ? "60px calc(100vw - 180px) 60px 60px"
        : $incomingPage.startsWith("/la-degustation/")
        ? "60px 60px calc(100vw - 180px)  60px"
        : $incomingPage === "/nous-rencontrer/"
        ? "60px 60px 60px calc(100vw - 180px)"
        : "calc(100vw - 180px) 60px 60px 60px"};
    & > div {
      transition: all 0.4s;
      border-left: 2px solid;
      border-color: ${({ $activeSection, theme }) =>
        $activeSection === "red" || $activeSection === "green"
          ? theme.colors.backgroundLight
          : theme.colors.brandBrown};
      padding: 30px 0 0 17.5px;
      a,
      button {
        pointer-events: all;
        letter-spacing: 0.9px;
        text-transform: uppercase;
        font-size: 18px;
        transition: color 0.2s;
        color: ${({ $activeSection, theme }) =>
          $activeSection === "red" || $activeSection === "green"
            ? theme.colors.backgroundLight
            : theme.colors.brandBrown};
        &:not(.homeLink) {
          transform: rotate(-90deg);
          white-space: nowrap;
        }
      }
      button {
        &.nosPratiques {
          transform: rotate(-90deg) translate(-52px, -65px);
        }
        &.laDegustation {
          transform: rotate(-90deg) translate(-55px, -69px);
        }
        &.nousRencontrer {
          transform: rotate(-90deg) translate(-68px, -83px);
        }
      }
      &.homeNav {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;
        padding: 30px 0 60px 14px;
        border: none;
        svg {
          transition: fill 0.2s;
          fill: ${({ $activeSection, theme }) =>
            $activeSection === "red" || $activeSection === "green"
              ? theme.colors.backgroundLight
              : theme.colors.brandBrown};
        }
        aside {
          display: flex;
          flex-direction: column;
          a {
            margin-top: 15px;
            &.active {
              text-decoration-line: underline;
              text-decoration-thickness: 2px;
              text-underline-offset: 4px;
            }
          }
        }
      }
    }
  }
  main {
    padding: 15px 15px 0 0;
    position: relative;
    margin: ${({ $activePage }) =>
      $activePage === "/nos-pratiques/"
        ? "0 120px 0 120px"
        : $activePage.startsWith("/la-degustation/")
        ? "0 60px 0 180px"
        : $activePage === "/nous-rencontrer/"
        ? "0 0 0 240px"
        : "0 180px 0 60px"};
    &:not(.transitionMask) {
      transition: opacity 1s;
      opacity: ${({ $transitionIsActive }) => ($transitionIsActive ? 0 : 1)};
    }
    .transitionMask {
      position: fixed;
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

export default function DesktopLayout({ children }) {
  const { activeHomeSection, setActiveHomeSection, pageChange, setPageChange } =
    useContext(Context);

  const { originalPath, navigate } = useI18next();

  const [activePage, setActivePage] = useState(originalPath);
  const [incomingPage, setIncomingPage] = useState(originalPath);
  const [transitionIsActive, setTransitionIsActive] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState("left");
  const [isMounted, setIsMounted] = useState(false);

  function handlePage(page) {
    setPageChange(page);
  }

  function handlePageChange(page) {
    const degustationPages = page.startsWith("/la-degustation/");
    if (activeHomeSection === "red" || activeHomeSection === "green") {
      setActiveHomeSection("white");
    }
    setIncomingPage(page);
    setTransitionIsActive(true);
    if (originalPath === "/") {
      setTransitionDirection("left");
    }
    if (
      (originalPath === "/nos-pratiques/" && page === degustationPages) ||
      page === "/nous-rencontrer/"
    ) {
      setTransitionDirection("left");
    }
    if (originalPath === "/nos-pratiques/" && page === "/") {
      setTransitionDirection("right");
    }
    if (
      (originalPath === degustationPages && page === "/nos-pratiques/") ||
      page === "/"
    ) {
      setTransitionDirection("right");
    }
    if (originalPath === degustationPages && page === "/nous-rencontrer/") {
      setTransitionDirection("left");
    }
    if (originalPath === degustationPages && page === "/la-degustation/") {
      setTransitionDirection("right");
    }
    if (originalPath === "/nous-rencontrer/") {
      setTransitionDirection("right");
    }
    setTimeout(() => {
      navigate(page);
      setActivePage(page);
      setTransitionIsActive(false);
    }, 1000);
  }

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    isMounted && handlePageChange(pageChange);
  }, [pageChange]);

  return (
    <StyledContainer
      $incomingPage={incomingPage}
      $activePage={activePage}
      $transitionIsActive={transitionIsActive}
      $transitionDirection={transitionDirection}
      $activeSection={activeHomeSection}
    >
      <main>
        {children}
        <Footer handlePageChange={handlePage} />
        <div className="transitionMask"></div>
      </main>
      <nav>
        <div className="homeNav">
          <button
            className="homeLink"
            aria-label="La Croix Gratiot logo"
            onClick={() => handlePage("/")}
          >
            <LogoLGCDesktop />
          </button>
          <aside>
            <Link to={originalPath} language={"en"} activeClassName="active">
              EN
            </Link>
            <Link to={originalPath} language={"fr"} activeClassName="active">
              FR
            </Link>
          </aside>
        </div>
        <div>
          <button
            className="nosPratiques"
            onClick={() => handlePage("/nos-pratiques/")}
          >
            Nos Pratiques
          </button>
        </div>
        <div>
          <button
            className="laDegustation"
            onClick={() => handlePage("/la-degustation/")}
          >
            La Dégustation
          </button>
        </div>
        <div>
          <button
            className="nousRencontrer"
            onClick={() => handlePage("/nous-rencontrer/")}
          >
            Nous rencontrer
          </button>
        </div>
      </nav>
    </StyledContainer>
  );
}
