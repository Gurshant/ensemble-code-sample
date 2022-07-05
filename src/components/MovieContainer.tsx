import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IMovie } from '../App';

export const MovieContainer: React.FC<IMovie> = (props) => {
    return (
        <Card sx={{ marginTop: '3rem' }}>
            <CardMedia
                component="img"
                alt="movie poster"
                height="450"
                image={props.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                    {props.title} - ({props.year})
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {props.actors}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.plot}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}