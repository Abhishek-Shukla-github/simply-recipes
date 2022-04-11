import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "./Layout";
import { useStaticQuery, graphql } from "gatsby"
import Allrecipes from "../components/Allrecipes";

export default function Home() {
  const data = useStaticQuery(graphql`
    {
      allContentfulRecipe {
        nodes {
          id
          name
          cookTime
          prepTime
          image {
            id
            gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage src="../assets/images/main.jpeg" alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>simply recipes</h1>
              <h4>no fluff just recipes</h4>
            </div>
          </div>
        </header>
        <Allrecipes />
      </main>
    </Layout>
  )
}
