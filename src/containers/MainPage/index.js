import { connect } from 'react-redux';
import MainPage from 'src/components/MainPage';
// import { } from '../actions';

const mapStateToProps = (state) => ({
  game: state.games.list,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
