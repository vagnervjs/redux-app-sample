import { connect } from 'react-redux';
import { closeSearchResult } from '../actions';
import ResultArea from '../components/result-area';

const mapStateToProps = ({result}) => {
    let { address, location, showResult } = result;
    return { address, location, showResult };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClose: () => dispatch(closeSearchResult)
    }
};

export default
connect(mapStateToProps, mapDispatchToProps)(ResultArea);
