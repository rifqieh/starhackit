import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import SignupView from '../views/signup';

const mapStateToProps = (state) => state.get('signup').toJSON();

export default function(actions){
    const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actions, dispatch)});
    return connect(mapStateToProps, mapDispatchToProps)(SignupView);
}
