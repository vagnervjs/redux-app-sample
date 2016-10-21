import { connect } from 'react-redux';
import ResultArea from '../components/result-area';

const mapStateToProps = ({result}) => {
    let { address, location } = result;
    return { address, location };
};

export default
connect(mapStateToProps)(ResultArea);
