import React, { useState} from 'react'
import './homePage.css';
import {Grid,CircularProgress, Box } from '@material-ui/core';
import Recipes from '../recipes/Recipes';
import homePageImage from '../../assets/main-page-pic.svg'
import { getRecipes } from '../../services/rest.cleint.service';
import SearchButton from '../searchButton/SearchButton';


const HomePage = () => {
    const [recipesList, setRecipesList] = useState([]);
    const [errorMessage, setErrorMessage] = useState("Check The Results Here");
    const [querySerch, setQuerySerch] = useState("");
    const [loading, setLoading] = useState(false);

    /*
    @function that accept or set an event which is string that represent query
    */
    const setSearchQuery = (e) => {
        setQuerySerch(e)
    }

    /*
    @function that set an array of recipes on rescipe list state 
    which is a promise so it will return an error if it is occur
    also it set a status of loading and finish it when the data retrived
    */
    const searchSubmitHandler = async () => {
        try {
            setLoading(true)
            const res = await getRecipes(querySerch, 10)
            setRecipesList(res)
            if(!res.length){
            setErrorMessage("No Result Matched")
            }
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false)
        }
    }

    /*
    @ function that not accept any parameter and on call it will return an Recipes component
    */
    const renderItems = ()=>{
        return (<Grid item xs={16} sm={6} md={9}>
        <h4 className="gradient__text">Choose from them to find details</h4>
            <Recipes recipesList={recipesList} />
        </Grid>)
    }

    /*
    @function that handle circular progrss when if call in JSX
    */
    function renderSpinner() {
        return (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        );
      }

    /*
    @ function that serachSubmitHadler function when the enter key press
    */
    function handleKeyDown (e) {
        if (e.key === 'Enter') {
         searchSubmitHandler()
        }
    }

    return (
        <div>
            <div className="recipes__header section__padding">
                <div className="recipes__header-content">
                    <h1 className="gradient__text">
                        Find Out Your Favourite Recipes
                    </h1>
                    <p>Find Out Your Favorites Recipes And Try To Cook It ...</p>
                    <div className="recipes__header-content__input">
                        <input type="email" placeholder="Type Here ..." onKeyDown={handleKeyDown} value={querySerch} onChange={(e) => setSearchQuery(e.target.value)} />
                        <SearchButton onClick={searchSubmitHandler} label="Search"/>
                    </div>
                </div>
                <div className="recipes__header-image">
                    <img src={homePageImage} alt="ai" />
                </div>
            </div>
            <div className=" recipes__header-content2">
                {(recipesList.length && !loading) && renderItems()}
                {(!recipesList.length && !loading) &&  <h4 className="gradient__text">{errorMessage}</h4>}
                {loading && renderSpinner()}
            </div>
        </div>
    )
}

export default HomePage
