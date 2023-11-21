import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 15px;
  @media ${({ theme }) => theme.minWidth.sm} {
    grid-template-rows: 1fr auto;
  }
  .gatsby-image-wrapper {
    grid-column: 1 / span 7;
  }
  .hero-image {
    grid-column: 1 / span 7;
    aspect-ratio: 1;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 1 / 4;
      grid-row: 1 / span 2;
      aspect-ratio: auto;
    }
  }
  .intro-image-1 {
    grid-column: 1 / 8;
    aspect-ratio: 290 / 195;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 4 / 8;
    }
  }
  .intro-image-2 {
    grid-column: 1 / 5;
    margin-top: 45px;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 3 / 5;
      margin: 15px 0 210px;
    }
  }
  .team-image-1 {
    grid-column: 1 / 8;
    margin-top: 120px;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 2 / 8;
      margin-top: 15px;
    }
  }
  .cepages-image-1 {
    grid-column: 1 / 8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 1 / 5;
    }
  }
  .cepages-image-2 {
    grid-column: 3 / 8;
    aspect-ratio: 200 / 167;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 4 / 7;
      margin-top: 15px;
    }
  }
  .vinification-image-1 {
    grid-column: 1 / 5;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 2 / 4;
      grid-row: 14 / span 2;
    }
  }
  .vinification-image-2 {
    grid-column: 1 / 8;
    margin-top: 45px;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 4 / 8;
      grid-row: 13 / span 2;
      margin-top: 0;
    }
  }
  .team-image-2 {
    grid-column: 1 / 8;
    margin-top: 120px;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 1 / 7;
      margin-top: 210px;
    }
  }
  .elevage-image-1 {
    grid-column: 1 / 8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 1 / 6;
      grid-row: 19 / span 2;
    }
  }
  .elevage-image-2 {
    grid-column: 1 / 5;
    margin-top: 15px;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 6 / 8;
      grid-row: 20 / span 2;
      margin-top: 0;
    }
  }

  .title,
  .base-text,
  .large-text,
  .team-description,
  .sectionTitle {
    grid-column: 1 / 8;
  }

  .title {
    font-family: "Democratica", sans-serif;
    font-size: 45px;
    line-height: 40px;
    margin-top: 15px;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 4 / 8;
      grid-row: 1;
      align-self: end;
      grid-row: 1;
      font-size: 65px;
      line-height: 55px;
      margin-top: 0;
    }
  }

  .base-text {
    font-family: "Moderat", sans-serif;
    font-size: 14px;
    line-height: 21px;
    margin-top: 15px;
    @media ${({ theme }) => theme.minWidth.sm} {
      font-size: 16px;
      line-height: 24px;
    }
  }
  .base-text.hero-text {
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 4 / 8;
      align-self: end;
    }
  }
  .base-text.intro-1 {
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 1 / 4;
      grid-row: 4 / 5;
      align-self: end;
    }
  }
  .base-text.intro-2 {
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 5 / 8;
      grid-row: 5 / 6;
    }
  }
  .base-text.cepages-1 {
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 5 / 8;
      grid-row: 9 / 10;
      margin-top: 0;
    }
  }
  .base-text.cepages-2 {
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 1 / 4;
      grid-row: 10 / 11;
    }
  }
  .base-text.vinification-1 {
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 3 / 7;
      grid-row: 12 / 13;
      margin: 0 0 15px;
    }
  }
  .base-text.vinification-2 {
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 4 / 7;
      grid-row: 15 / 16;
      margin: 15px 0 0;
    }
  }
  .base-text.elevage {
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 2 / 6;
      grid-row: 21 / 22;
      margin: 15px 0 0;
    }
  }

  .large-text {
    font-family: "Moderat", sans-serif;
    font-size: 16px;
    line-height: 150%;
    margin: 120px 0;
    text-align: center;
    @media ${({ theme }) => theme.minWidth.sm} {
      font-size: 20px;
      line-height: 30px;
      margin: 210px 0;
      .line-break::before {
        content: " ";
        display: block;
      }
    }
  }

  .team-description {
    font-family: "Moderat Mono", sans-serif;
    font-size: 10px;
    line-height: 15px;
    margin-top: 15px;
    @media ${({ theme }) => theme.minWidth.sm} {
      font-size: 14px;
      line-height: 21px;
    }
  }
  .team-description.first {
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 2 / 8;
      grid-row: 6 / 7;
      margin-top: 0;
    }
  }
  .team-description.second {
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 1 / 8;
    }
  }

  .sectionTitle {
    font-size: 45px;
    line-height: 40px;
    margin: 120px 0 45px;
    @media ${({ theme }) => theme.minWidth.sm} {
      font-size: 65px;
      line-height: 55px;
      margin: 210px 0 15px;
    }
  }
  .sectionTitle.nos-cepages {
    grid-column: 3 / 8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 4 / 8;
    }
  }
  .sectionTitle.la-vinification {
    grid-column: 1 / 8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 3 / 8;
    }
  }
  .sectionTitle.elevage {
    grid-column: 1 / 8;
    @media ${({ theme }) => theme.minWidth.sm} {
      grid-column: 4 / 8;
    }
  }
`;

const NosPratiques = ({ className }) => {
  return (
    <StyledContainer className={className}>
      <StaticImage
        className="hero-image"
        src="../../../assets/imgs/pratiques/nosPratiquesHeroImage.jpg"
        alt="nosPratiquesHeroImage"
        layout="fullWidth"
      />
      <h1 className="title">
        <ul>
          <li>Une</li>
          <li>viticulture</li>
          <li>biodynamique</li>
        </ul>
      </h1>
      <p className="base-text hero-text">
        <ul>
          <li>
            Cette approche, basée sur de l’observation, nous rapproche encore
            plus de nos vignes.
          </li>
          <li>
            Nous nous formons chaque année et employons ses préparations dans la
            conduite de la vigne afin d’intensifier la vie du sol, de la plante
            et de leurs échanges.
          </li>
        </ul>
      </p>
      <p className="large-text">
        Depuis nos essais sur une parcelle en 2012, c’est maintenant
        <span class="line-break">
          {" "}
          tout le vignoble que nous conduisons en biodynamie.
        </span>
      </p>
      <StaticImage
        className="intro-image-1"
        src="../../../assets/imgs/pratiques/nosPratiquesIntroImage1.jpg"
        alt="nosPratiquesIntroImage1"
        layout="fullWidth"
      />
      <p className="base-text intro-1">
        Attaché au maintien de la biodiversité, nous plantons des haies multi
        essences en bordure de parcelles et sur les berges du ruisseau qui
        serpente le domaine. Nous avons également fait un essai dans une
        parcelle, tout les 8 rangs de vignes une rangée de plantes aromatiques.
      </p>
      <StaticImage
        className="intro-image-2"
        src="../../../assets/imgs/pratiques/nosPratiquesIntroImage2.jpg"
        alt="nosPratiquesIntroImage2"
        layout="fullWidth"
      />
      <p className="base-text intro-2">
        Après les vendanges, aux premières pluies nous enherbons une partie du
        vignoble pour maintenir l’activité dans le sol.
      </p>
      <StaticImage
        className="team-image-1"
        src="../../../assets/imgs/pratiques/TeamImage1.jpg"
        alt="TeamImage1"
        layout="fullWidth"
      />
      <p className="team-description first">
        <ul>
          <li>Lénaïc & Karim,</li>
          <li>l’équipe viticole</li>
        </ul>
      </p>
      <h2 className="sectionTitle nos-cepages">
        <ul>
          <li>Nos</li>
          <li>cépages</li>
        </ul>
      </h2>
      <StaticImage
        className="cepages-image-1"
        src="../../../assets/imgs/pratiques/cepagesImage1.jpg"
        alt="cepagesImage1"
        layout="fullWidth"
      />
      <p className="base-text cepages-1">
        Piquepoul Blanc, Roussanne, Bourboulenc, Viognier, Sauvignon et Muscat
        petits grains composent notre encépagement blanc. Pour le rouge, nous
        cultivons de la Syrah, du Grenache Noir, du Mourvèdre, Piquepoul Noir,
        Niellucio et Pinot Noir.
      </p>
      <StaticImage
        className="cepages-image-2"
        src="../../../assets/imgs/pratiques/cepagesImage2.jpg"
        alt="cepagesImage2"
        layout="fullWidth"
      />
      <p className="base-text cepages-2">
        De retour de Nouvelle Zélande, Anaïs plante du Pinot Noir malgré un avis
        général défavorable, concernant son adaptation à notre terroir… La
        dégustation plutôt amusante nous incite à continuer. Depuis plusieurs
        années, nous surgreffons certaines parcelles avec nos propres sélections
        de bois.
      </p>
      <h2 className="sectionTitle la-vinification">
        <ul>
          <li>La</li>
          <li>vinification</li>
        </ul>
      </h2>
      <StaticImage
        className="vinification-image-1"
        src="../../../assets/imgs/pratiques/VinificationImage1.jpg"
        alt="VinificationImage1"
        layout="fullWidth"
      />
      <p className="base-text vinification-1">
        La majorité des vendanges est mécanique de nuit, pour certaines cuvées
        elle est manuelle. Chaque millésime est tellement différent, il faut
        savoir observer, goûter, décider de la bonne date de récolte et se faire
        discret pour accompagner les fermentations des raisins et laisser le
        terroir s’exprimer.
      </p>
      <StaticImage
        className="vinification-image-2"
        src="../../../assets/imgs/pratiques/VinificationImage2.jpg"
        alt="VinificationImage2"
        layout="fullWidth"
      />
      <p className="base-text vinification-2">
        Les vendanges sont une période super excitante, une année de travail à
        la vigne pour obtenir des raisins, qui rentrent enfin à l’abris pour se
        transformer en vin. Les odeurs de fruits se propagent partout.
      </p>
      <StaticImage
        className="team-image-2"
        src="../../../assets/imgs/pratiques/TeamImage2.jpg"
        alt="TeamImage2"
        layout="fullWidth"
      />
      <p className="team-description second">Thomas</p>
      <h2 className="sectionTitle elevage">L'élevage</h2>
      <StaticImage
        className="elevage-image-1"
        src="../../../assets/imgs/pratiques/ElevageImage1.jpg"
        alt="ElevageImage1"
        layout="fullWidth"
      />
      <StaticImage
        className="elevage-image-2"
        src="../../../assets/imgs/pratiques/ElevageImage2.jpg"
        alt="ElevageImage2"
        layout="fullWidth"
      />
      <p className="base-text elevage">
        Chaque année de nouveaux contenants sont achetés pour permettre une
        rotation mais aussi pour réaliser des expérimentations. Depuis 2012,
        nous réalisons des élevages en dolia de terre cuite, céramique et grès.
        Nous nous sommes équipés de cuves béton et de demi-muids. L’élevage est
        un sacré terrain de jeux.
      </p>
    </StyledContainer>
  );
};

export default NosPratiques;
