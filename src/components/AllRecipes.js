import React from 'react'
import TagsList from './TagsList'
import RecipesList from './RecipesList'
import { useStaticQuery, graphql } from "gatsby"

const Allrecipes = () => {
  //useStaticQuery is one of the hooks provided by gatsby to fetch the data from the backend
  //Code query below is copied from graphiQL

  //V.V.IMP notice :- This is the ideal way of querying the graphQL in useStatucQuery hook ,
  // changing this or following the way specified in the course will break the code leading some weird bugs in the cache
  const { allContentfulRecipe } = useStaticQuery(graphql`
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
    <div>
      <TagsList recipes={allContentfulRecipe.nodes} />
      <RecipesList recipes={allContentfulRecipe.nodes} />
    </div>
  )
}

export default Allrecipes
