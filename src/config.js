const config = {
  api: {
    baseUrl: 'https://api.spotify.com/v1',
    authUrl: 'https://accounts.spotify.com/api/token',
    authRedirect: 'https://accounts.spotify.com/authorize',
    clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    clientSecret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
  },
};
const newVariable = 'asd';
export default config;
