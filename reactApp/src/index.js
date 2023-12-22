import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/homePage";
import { QueryClientProvider, QueryClient } from "react-query";
import LoginPage from "./pages/loginPage";
import AuthContextProvider from "./contexts/authContext";
import ProtectedRoutes from "./protectedRoutes";
import SiteHeader from "./components/siteHeader";
import SignUpPage from "./pages/signUpPage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import LatestMoviesPage from './pages/latestMoviesPage';
import MovieCreditsPage from './pages/movieCreditsPage';
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import TrendingMoviesPage from "./pages/trendingMoviesPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <SiteHeader />
          <AuthContextProvider>
            <MoviesContextProvider>

              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route element={<ProtectedRoutes />}>
                  {/* <Route path="/movies" element={<HomePage />} /> */}
                  <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
                </Route>
                <Route path="/signup" element={<SignUpPage />} />

                <Route path="/reviews/form" element={<AddMovieReviewPage />} />
                <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
                <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
                <Route path="/reviews/:id" element={<MovieReviewPage />} />
                <Route path="/movies/:id" element={<MoviePage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<Navigate to="/" />} />

                <Route path="/movies/latest" element={<LatestMoviesPage />} />
                <Route path="/movies/:id/credits" element={<MovieCreditsPage />} />
                <Route path="/movies/top_rated" element={<TopRatedMoviesPage />} />
                <Route path="/movies/trending" element={<TrendingMoviesPage />} />

              </Routes>
            </MoviesContextProvider>
          </AuthContextProvider>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AuthContextProvider>

  );
};

const rootElement = createRoot(document.getElementById("root"))
rootElement.render(<App />);