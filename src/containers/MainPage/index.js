import { connect } from 'react-redux';
import MainPage from 'src/components/MainPage';
// import { } from '../actions';

// MapStateToProps = info du state
const mapStateToProps = (state) => ({
  game: state.games.list,
});

// madDispatchToProps = fonctions
const mapDispatchToProps = (dispatch) => ({

  viewAllGamesButton: () => {
    console.log('Je clique sur mon bouton');
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
