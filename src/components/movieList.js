import { connect } from 'react-redux'
import { deleteMovie, deleteLastMovie, updateLike, updateDisLike } from '../redux/actions'
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';
import '../css/movies.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';


const lastMovieInCategory = (movies, category) => {
    const categories = movies.filter(m => m.category === category)
    return categories.length === 1;
}

const LikeBar = ({ likes, dislikes }) => {
    const votes = likes + dislikes;
    const voteValue = 100 / votes;
    const result = likes * voteValue;

    return (
        <>
            <LinearProgress color='success' value={result} variant={'determinate'} />
        </>
    )
}

const MovieList = ({ loading, movies, filter, deleteSimple, deleteLast, page, updateLike, updateDisLike }) => {
    const moviesFiltered = movies.filter(m => {
        if (filter === '') return true;
        return (m.category === filter)
    })

    const moviesFilteredPaged = moviesFiltered.splice((page-1)*4, 4)

    if (loading)
        return <CircularProgress />

    return (
        <div className="main" >
                    {moviesFilteredPaged.map((m) => {
                        return (
                            <div style={{ padding: 5 }} key={m.id} >
                            <Grid item xs={6} >
                            <Card sx={{ minWidth: 275, padding: 2  }}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {m.title}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        {m.category}
                                    </Typography>
                                    <LikeBar likes={m.likes} dislikes={m.dislikes} />
                                </CardContent>
                                <CardActions>
                                    <IconButton variant="contained" color="success" size="small" onClick={() => {
                                            updateLike(m.id)
                                        }} >
                                        <ThumbUpAltIcon />
                                    </IconButton>
                                    <IconButton variant="contained" color="error" size='small' onClick={() => {
                                            updateDisLike(m.id)
                                        }} >
                                        <ThumbDownAltIcon />
                                    </IconButton>
                                    <IconButton aria-label="delete" size="small" onClick={() => {
                                            if (lastMovieInCategory(movies, m.category))
                                                deleteLast(m.id)
                                            else
                                                deleteSimple(m.id)
                                        }}  >
                                        <DeleteIcon fontSize="small"/>
                                    </IconButton>
                                </CardActions>
                            </Card>
                            </Grid>
                            </div>
                        )
                    })}
        </div>
    );
}

const mapStateToProps = (state) => ({
    movies: state.movies.movies,
    loading: state.movies.loadingInProgess,
    filter : state.filter,
    page: state.pagination.page,
})

export default connect(
    mapStateToProps,
    { deleteSimple: deleteMovie,  deleteLast: deleteLastMovie, updateLike: updateLike, updateDisLike: updateDisLike },
)(MovieList);
