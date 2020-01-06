import Employee from './Employee';
import {connect} from 'react-redux';
import {getData} from '../../../selectors';
import {getRequest} from '../../../actions/get.actions';

class EmpContainer extends Employee {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
      //this.props.dispatch(getRequest('SHIFT_REQUESTING','SHIFT','http://p1.tanca.vn/api/shift/list'))
  };
  
}


const mapStateToProps = state => ({
  data:getData(state,'shift','shifts'),
  isLoading:getData(state,'shift','requesting')
});

export default connect(
  mapStateToProps,
  null,
)(EmpContainer);
