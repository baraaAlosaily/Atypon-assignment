import React from 'react'
import {Card,CardContent,CardMedia,Typography} from '@material-ui/core';
import useStyle from './styles'

const Recipe = ({post}) => {
    const classes=useStyle();
    return (
        <Card className={classes.card} raised elevation={8}>
           <CardMedia className={classes.media} image={post.image}/>
           <CardContent>
           <Typography className={classes.title}  variant="h5" gutterBottom>{post.title}</Typography>
         </CardContent>
        </Card>
    )
}

export default Recipe
