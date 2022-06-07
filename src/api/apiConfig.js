const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "c2aef4f563fc1b3833e66e46ce0bed6d",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
