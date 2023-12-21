import React, { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews";
import { getMovieCredits } from '../../api/tmdb-api';

const root = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  listStyle: "none",
  padding: 1.5,
  margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails = ({ movie }) => {  // Don't miss this!
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    getMovieCredits(movie.id).then(data => {
      setCredits(data);
    });

  }, [movie.id]);

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper
        component="ul"
        sx={{ ...root }}
      >
        <li>
          <Chip label="Genres" sx={{ ...chip }} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{ ...chip }} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={{ ...root }}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count}`}
        />
        <Chip label={`Released: ${movie.release_date}`} />

      </Paper>

      <Paper
        component="ul"
        sx={{ ...root }}
      >
        <Chip label="Production Countries" sx={{ ...chip }} color="primary" />
        {movie.production_countries.map((c) => (
          <li key={c.name}>
            <Chip label={c.name} sx={{ ...chip }} />
          </li>
        ))}
      </Paper>

      {/* create */}
      {credits && (
        <>
          <Typography variant="h5" component="h2">
            Cast
          </Typography>
          <ul>
            {credits.cast.map(member => (
              <li key={member.cast_id}>
                <a href={`https://www.themoviedb.org/person/${member.id}`} target="_blank" rel="noopener noreferrer">
                  {member.name} as {member.character}
                </a>
              </li>
            ))}
          </ul>
          {/* <Typography variant="h5" component="h2">
            Crew
          </Typography>
          <ul>
            {credits.crew.map(member => (
              <li key={member.credit_id}>{member.name} - {member.job}</li>
            ))}
          </ul> */}
        </>
      )}

      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
    </>
  );
};
export default MovieDetails;