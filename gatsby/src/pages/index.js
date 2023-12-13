import React, { useEffect, useRef, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import LesActualitesSection from "components/pages/HomePage/LesActualitesSection";
import styled from "styled-components";
import LCGlogoHero from "assets/logos/LogoLCGHero";
import ArrowBtn from "components/global/ArrowBtn";
import { Seo } from "components/global/Seo";
import IlsParlentDeNousSlider from "components/pages/HomePage/IlsParlentDeNousSlider";
import { useContext } from "react";
import { Context } from "data/Context";
import { graphql } from "gatsby";
import winesData from "data/winesData";
import { Link } from "gatsby";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";

const StyledContainer = styled.div`
  .heroSection {
    @media ${({ theme }) => theme.minWidth.sm} {
      height: calc(100vh - 60px);
    }
    .heroImg {
      grid-column: 1/8;
      grid-row: 1/1;
      aspect-ratio: 1;
      @media ${({ theme }) => theme.minWidth.sm} {
        aspect-ratio: unset;
      }
    }
    .heroContent {
      grid-template-rows: auto 60px auto;
      align-items: center;
      grid-column: 1/8;
      grid-row: 1/1;
      position: relative;
      h1 {
        font-family: democratica;
        color: ${({ theme }) => theme.colors.backgroundLight};
        font-size: 26px;
        @media ${({ theme }) => theme.minWidth.sm} {
          font-size: 4vw;
        }
        &:first-child {
          grid-row: 0 / 3;
          grid-column: 2 / 8;
        }
        &:last-child {
          grid-column: 5 / 8;
          grid-row: 3/3;
        }
      }
      svg {
        height: 70px;
        grid-row: 2/3;
        grid-column: 1/8;
        margin: auto;
        @media ${({ theme }) => theme.minWidth.sm} {
          height: auto;
        }
      }
    }
  }
  section:not(.heroSection) {
    padding: 60px 0;
    @media ${({ theme }) => theme.minWidth.sm} {
      padding: 135px 0;
    }
    &.orange,
    &.green,
    &.red {
      margin: 0 -15px 0 -15px;
      padding: 0 15px 0 15px;
      @media ${({ theme }) => theme.minWidth.sm} {
        margin: 0 -195px 0 -60px;
        padding: 0 195px 0 60px;
      }
    }

    &.orange {
      background-color: ${({ theme }) => theme.colors.orange};
      .leDomaine {
        h2 {
          z-index: 1;
          grid-column: 2/8;
          @media ${({ theme }) => theme.minWidth.sm} {
            grid-column: 3/8;
            z-index: 1;
          }
        }
        .gatsby-image-wrapper {
          grid-column: 1/8;
          margin-top: -30px;
          @media ${({ theme }) => theme.minWidth.sm} {
            grid-column: 2/7;
            margin-top: -60px;
          }
        }
        p {
          grid-column: 1/8;
          @media ${({ theme }) => theme.minWidth.sm} {
            grid-column: 4/8;
          }
        }
      }
      .anaisYves {
        h2 {
          grid-column: 7/8;
          z-index: 1;
          @media ${({ theme }) => theme.minWidth.sm} {
            grid-column: 6/8;
            z-index: 1;
            grid-row: 1/2;
          }
        }
        .gatsby-image-wrapper {
          grid-column: 1/8;
          margin-top: -90px;
          @media ${({ theme }) => theme.minWidth.sm} {
            grid-column: 4/7;
            margin-top: -150px;
            grid-row: 2/2;
          }
        }
        p {
          grid-column: 1/8;
          @media ${({ theme }) => theme.minWidth.sm} {
            grid-column: 1 / 4;
            grid-row: 2 / 2;
            align-self: end;
          }
        }
      }
    }

    &.green {
      background-color: ${({ theme }) => theme.colors.green};
      color: ${({ theme }) => theme.colors.backgroundLight};
      .notrePhilo {
        h2 {
          grid-column: 1/8;
          z-index: 2;
          @media ${({ theme }) => theme.minWidth.sm} {
            grid-column: 1/8;
            z-index: 1;
            grid-row: 1/1;
          }
        }
        .gatsby-image-wrapper {
          &.one {
            grid-column: 1/8;
            margin-top: -30px;
            @media ${({ theme }) => theme.minWidth.sm} {
              grid-column: 2/6;
              margin-top: -75px;
              grid-row: 2/2;
            }
          }
          &.two {
            grid-row: 3/3;
            grid-column: 4/8;
            @media ${({ theme }) => theme.minWidth.sm} {
              grid-column: 5/7;
              grid-row: 3/5;
            }
          }
        }
        p {
          grid-column: 1/8;
          @media ${({ theme }) => theme.minWidth.sm} {
            grid-column: 2 / 5;
            grid-row: 3/3;
          }
        }
        button {
          grid-column: 2/8;
          margin-top: 30px;
          color: ${({ theme }) => theme.colors.backgroundLight};
          @media ${({ theme }) => theme.minWidth.sm} {
            margin-top: 0;
            grid-row: 4/4;
            grid-column: 3/5;
          }
        }
      }
      .ilsParlent {
        h2 {
          grid-column: 1/8;
          margin-bottom: 30px;
          @media ${({ theme }) => theme.minWidth.sm} {
            grid-column: 3/8;
            margin-bottom: 90px;
          }
        }
      }
    }
    &.red {
      background-color: ${({ theme }) => theme.colors.red};
      color: ${({ theme }) => theme.colors.backgroundLight};
      .unArt {
        @media ${({ theme }) => theme.minWidth.sm} {
          grid-template-rows: 1fr;
        }
        h2 {
          grid-column: 3/8;
          @media ${({ theme }) => theme.minWidth.sm} {
            grid-column: 5/8;
            grid-row: 1/1;
            align-self: flex-end;
          }
        }
        .gatsby-image-wrapper {
          &:first-of-type {
            grid-column: 1/8;
            aspect-ratio: 1;
            @media ${({ theme }) => theme.minWidth.sm} {
              aspect-ratio: auto;
              grid-column: 2/5;
              grid-row: 1/3;
              align-self: flex-end;
              flex-grow: 1;
            }
          }
          &:last-of-type {
            grid-column: 1/6;
            @media ${({ theme }) => theme.minWidth.sm} {
              grid-column: 3/7;
            }
          }
        }
        p {
          grid-column: 1/8;
          @media ${({ theme }) => theme.minWidth.sm} {
            grid-column: 5/8;
            grid-row: 2/2;
            align-self: end;
          }
        }
      }
    }
  }
`;

const HomePage = ({ data }) => {
  const { originalPath } = useI18next();

  const news = data.allSanityNews.nodes;
  const event = data.allSanityEvents.nodes[0];

  const orangeSectionRef = useRef();
  const greenSectionRef = useRef();
  const redSectionRef = useRef();
  const { setActiveHomeSection } = useContext(Context);
  const [activeCategory, setActiveCategory] = useState("blanc");

  useEffect(() => {
    const handleScroll = () => {
      const orangeSectionTop =
        orangeSectionRef.current.getBoundingClientRect().top;
      const greenSectionTop =
        greenSectionRef.current.getBoundingClientRect().top;
      const redSectionTop = redSectionRef.current.getBoundingClientRect().top;
      const redSectionBottom =
        redSectionRef.current.getBoundingClientRect().bottom;
      if (originalPath === "/") {
        if (orangeSectionTop < 0 && greenSectionTop > 0) {
          setActiveHomeSection("orange");
        }
        if (greenSectionTop < 0 && redSectionTop > 0) {
          setActiveHomeSection("green");
        }
        if (redSectionTop < 0 && redSectionBottom > 0) {
          setActiveHomeSection("red");
        }
        if (orangeSectionTop > 0 || redSectionBottom < 0) {
          setActiveHomeSection("white");
        }
      } else {
        setActiveHomeSection("white");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      setActiveHomeSection("white");
    };
  }, [originalPath, setActiveHomeSection]);

  return (
    <StyledContainer>
      <section className="heroSection grid">
        <StaticImage
          className="heroImg"
          src="../assets/imgs/home/heroImage.jpg"
          alt=""
          layout="fullWidth"
          loading="eager"
        />
        <div className="heroContent grid">
          <h1>
            <Trans>Domaine</Trans>
          </h1>
          <LCGlogoHero />
          <h1>La Croix Gratiot</h1>
        </div>
      </section>
      <div className="grid">
        <section className="largeText">
          <Trans>
            Entre bassin de Thau et collines de pins découvrez des vins bio issu
            d’un travail en famille, de père en fille, dans le respect de la
            nature.
          </Trans>
        </section>
      </div>
      <section className="orange" ref={orangeSectionRef}>
        <section className="leDomaine grid">
          <h2 className="sectionTitle">
            <Trans>Le</Trans>
            <br />
            <Trans>domaine</Trans>
          </h2>
          <StaticImage
            src="../assets/imgs/home/leDomaine.jpg"
            alt=""
            layout="fullWidth"
          />
          <p>
            <Trans>
              Au cœur des appellations Languedoc et Picpoul de Pinet, le domaine
              La Croix Gratiot est ancré dans un terroir riche en couleurs.
              Situé sur les collines argilo-calcaires et bercé par les alizés
              marins chargés des senteurs de garrigue, notre vignoble s’étend
              sur 35 hectares.
            </Trans>
          </p>
        </section>
        <section className="anaisYves grid">
          <h2 className="sectionTitle">
            Anaïs
            <br />
            <Trans>et</Trans>
            <br />
            Yves
          </h2>
          <StaticImage
            src="../assets/imgs/home/anaisYves.jpg"
            alt=""
            layout="fullWidth"
          />
          <p>
            <Trans>
              Ici, la passion du vin se transmet de père en fille. Yves, avec
              son frère Hugues, a cultivé les vignes sur les terres familiales
              avant de fonder la cave en 2004. Sa fille, Anaïs, après avoir
              parcouru le monde et enrichi son savoir-faire, est revenue aux
              racines familiales, déterminée à perpétuer et à renouveler l'art
              vinicole.
            </Trans>
          </p>
        </section>
      </section>
      <section className="green" ref={greenSectionRef}>
        <section className="notrePhilo grid">
          <h2 className="sectionTitle">
            <Trans>Notre</Trans>
            <br />
            <Trans>Philosophie</Trans>
          </h2>
          <StaticImage
            src="../assets/imgs/home/notrePhilo1.jpg"
            alt=""
            layout="fullWidth"
            className="one"
          />
          <p>
            <Trans>
              Notre philosophie se fonde sur un profond respect pour la nature,
              le terroir, et l’humain. Guidés par l’approche biodynamique, nous
              aspirons à une viticulture qui vit en harmonie avec son
              écosystème, valorisant la biodiversité et l'équilibre
              environnemental.
            </Trans>
          </p>
          <ArrowBtn to="/nos-pratiques/">
            <Trans>Nos pratiques</Trans>
          </ArrowBtn>
          <StaticImage
            src="../assets/imgs/home/notrePhilo2.jpg"
            alt=""
            layout="fullWidth"
            className="two"
          />
        </section>
        <section className="ilsParlent grid">
          <h2 className="sectionTitle">
            <Trans>Ils parlent</Trans>
            <br />
            <Trans>de nous</Trans>
          </h2>
          <IlsParlentDeNousSlider />
        </section>
      </section>
      <section className="red" ref={redSectionRef}>
        <section className="unArt grid">
          <h2 className="sectionTitle">
            <Trans>Un art</Trans>
            <br />
            <Trans>de vivre</Trans>
          </h2>
          <StaticImage
            src="../assets/imgs/home/unArtdeVivre1.jpg"
            alt=""
            layout="fullWidth"
          />
          <StaticImage
            src="../assets/imgs/home/unArtdeVivre2.jpg"
            alt=""
            layout="fullWidth"
          />
          <p>
            <Trans>
              Sensible à l’art et à la musique, La Croix Gratiot prend plaisir à
              éveiller les sens vers des émotions gustatives ou artistiques.
              Notre domaine est un carrefour où s'assemblent convivialité et
              créativité à travers des événements festifs et des collaborations
              artistiques.
            </Trans>
          </p>
        </section>
        <LesActualitesSection news={news} event={event} />
      </section>
      <section className="grid nosVinsSection">
        <h2 className="sectionTitle">
          <Trans>Nos</Trans>
          <br />
          <Trans>Vins</Trans>
        </h2>
        {activeCategory === "blanc" ? (
          <StaticImage
            src="../assets/imgs/nosVins/blanc.jpg"
            alt=""
            layout="fullWidth"
            loading="eager"
          />
        ) : activeCategory === "rose" ? (
          <StaticImage
            src="../assets/imgs/nosVins/rose.jpg"
            alt=""
            layout="fullWidth"
            loading="eager"
          />
        ) : activeCategory === "rouge" ? (
          <StaticImage
            src="../assets/imgs/nosVins/rouge.jpg"
            alt=""
            layout="fullWidth"
            loading="eager"
          />
        ) : activeCategory === "autre" ? (
          <StaticImage
            src="../assets/imgs/nosVins/autre.jpg"
            alt=""
            layout="fullWidth"
            loading="eager"
          />
        ) : null}
        <ul>
          {winesData.map(({ category, title }) => (
            <li key={category}>
              <Link
                onMouseEnter={() => setActiveCategory(category)}
                to={"/la-degustation/#" + category}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <ArrowBtn to="/la-degustation/" black>
          <Trans>Voir tous nos vins</Trans>
        </ArrowBtn>
      </section>
    </StyledContainer>
  );
};

export default HomePage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allSanityNews(limit: 3) {
      nodes {
        text
        newsUrl
        thumbImg {
          asset {
            gatsbyImageData
          }
        }
      }
    }
    allSanityEvents(limit: 1, sort: { date: DESC }) {
      nodes {
        title
        date(formatString: "DD MMMM YYYY", locale: "fr")
        description
        eventUrl
        thumbImg {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = () => <Seo />;
