import Shift from './Shift';
import {connect} from 'react-redux';
import {getData} from '../../../selectors';
import {getRequest} from '../../../actions/get.actions';

class ShiftContainer extends Shift {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
      this.props.dispatch(getRequest('SHIFT_REQUESTING'))
  };
  
}


const mapStateToProps = state => ({
  data:getData(state,'shift','data'),
  isLoading:getData(state,'shift','requesting')
});

export default connect(
  mapStateToProps,
  null,
)(ShiftContainer);
