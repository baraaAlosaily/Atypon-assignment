import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getRecipe } from '../../services/rest.cleint.service';
import './details.css';

const Details = (props) => {
    const { id } = props.match.params;
    const [recipesDetails, setRecipesDetails] = useState([]);

/*
@function that handle data that will retrived from recipe information api 
and return an object of information of recipes 
*/
    const getRecipeDetails = async () => {
        const res = await getRecipe(id)
        setRecipesDetails(res)
    }

    useEffect(() => {
        getRecipeDetails()
    }, [])

    /*
    @function that handle readmore read less feature
    */
    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
          setIsReadMore(!isReadMore);
        };
        return (
          <p className="text">
            {isReadMore ? text.slice(0, 400) : text}
            <span onClick={toggleReadMore} className="read-or-hide">
              {isReadMore ? "...read more" : " show less"}
            </span>
          </p>
        );
      };

    return (
        <div>
            <div style={{"marginTop":"20px"}} className="recipes__possibility section__padding2" id="possibility">
            <div className='recipes__header-content2'>
            <h4 className="gradient__text">{recipesDetails.title}</h4>
            </div>
            </div>
       
        <div className="recipes__possibility section__padding2">
            <div className="recipes__possibility-image">
                <img src={recipesDetails.image} alt="possibility" />
            </div>
            <div className="recipes__possibility-container container">
                <p className='gradient__text'>Summary</p>
                {recipesDetails.summary&&
                 <p>
                     <ReadMore>
                     {recipesDetails.summary.replace(/<b>|<\/b>|<a>|<\/a>|<a|href=|>/gi," ")}
                     </ReadMore>
                 </p>
                 }
                <h4><a href={recipesDetails.sourceUrl}>More Information</a></h4>
            </div>
        </div>
        </div>
    )
}

export default Details

