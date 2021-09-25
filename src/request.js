const API_KEY = "b49c911c0a9a97c6c60ac4fd065ef000";
// process.env.REACT_APP_API_KEY

const request = {
  fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
  fetchNetflix: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default request;
