
export const getMovies = async () => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/discover`, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getMovie = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/movie/${id}`, {
      method: 'GET'
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const login = async (username, password) => {
  const response = await fetch(`http://localhost:8080/api/users`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ username: username, password: password })
  });
  return response.json();
};

export const signup = async (username, password) => {
  const response = await fetch(`http://localhost:8080/api/users?action=register`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ username: username, password: password })
  });
  return response.json();
};

export const getGenres = async () => {
  try {
    const response = await fetch(`http://localhost:8080/genres/tmdb/genres`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getMovieImages = async ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  try {
    const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/movies/${id}/images`, {
      method: 'GET',
    }
    );
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getUpcomingMovies = async (page = 1) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/upcoming?page=${page}`, {
      method: 'GET',
    }
    );
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return await response.json();

  } catch (error) {
    throw error;
  }
};

export const getMovieReviews = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/${id}/reviews`, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};


export const getLatestMovies = async () => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/latest`, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getMovieCredits = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/api/actors/tmdb/movies/${id}/credits`, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
}

export const getTopRatedMovies = async () => {
  try {
    const response = await fetch(`http://localhost:8080/api/movies/tmdb/top_rated`, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getTrendingMovies = async () => {
  try {
    const response = await fetch(`http://localhost:8080/api/movies/tmdb/trending`, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getMovieRecommendations = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/api/movies/tmdb/movies/${id}/recommendations`, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};
