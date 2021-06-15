import axios from 'axios';
import { FETCH_GAMES, saveGames } from 'src/actions/games';

const games = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_GAMES: {
      axios({
        url: "https://api.igdb.com/v4/games",
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID: dugrbla8611dnvju7gddet6p1646py',
            'Authorization: 0pca88ei5j69k87ealo0uao11mpbrt',
        },
        data: "fields name, genres.name, screenshots.url;"
      })
        .then(response => {
            console.log(response.data);
            const actionSaveGames = saveGames(response.data);
            store.dispatch(actionSaveGames);
        })
        .catch(err => {
            console.error(err);
        });

        break;
    }
    default:
      next(action);
  }
};

export default games;

