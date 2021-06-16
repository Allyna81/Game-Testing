export const FETCH_GAMES = 'FETCH_GAMES';
export const SAVE_GAMES = 'SAVE_GAMES';

export const fetchGames = () => ({
  type: FETCH_GAMES,
});

// saveGames() ==> Tu vas le retrouver dans ton containers mapDispatchToProps
// SAVE_GAMES pour ton reducer dans ton switch Case
export const saveGames = (games) => ({
  type: SAVE_GAMES,
  games,
});
