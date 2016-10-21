import { connect } from 'react-redux';
import ResultArea from '../components/result-area';

const mapStateToProps = ({app}) => {
    let { address, location } = app;
    return { address, location };
};

export default
connect(mapStateToProps)(ResultArea);
