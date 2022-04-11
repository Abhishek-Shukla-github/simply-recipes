import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const RecipesList = ({ recipes }) => {
    console.log(recipes)
    return (
        <div className="recipes-list">
            {recipes.map(recipe => {
                const { id, name, image, prepTime, cookTime } = recipe;

                //getImage is a helper image function provided by Gatsby to handle the case when there is no image to display ,
                // if there is no image coming from the backend ,
                // getImage function handles the case by not displaying the image

                const pathToImage = getImage(image)
                return <Link className="recipe" key={id} to={`/${name}`}>
                    <GatsbyImage image={pathToImage} className="recipe-img" alt={name} />
                    <h5>{name}</h5>
                    <p>Prep: {prepTime}min | Cook: {cookTime}min</p>
                </Link>
            })}
        </div >
    )
}

export default RecipesList
