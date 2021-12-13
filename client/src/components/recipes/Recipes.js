import React from 'react';
import { Grid } from '@material-ui/core';

import Recipe from './recipe/Recipe';
import { Link } from 'react-router-dom';
const Recipes = ({ recipesList}) => {

  return (
  (
      <Grid  container alignItems="stretch" spacing={3}>
        {recipesList.map(post => (
          <Grid key={post.id} item xs={12} sm={12} md={6} lg={3}>
            <Link to={`recipe/${post.id}`}>
            <Recipe post={post}/>
            </Link>
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Recipes;
