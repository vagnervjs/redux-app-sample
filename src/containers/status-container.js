import { connect } from 'react-redux';
import StatusArea from '../components/status-ara';

const mapStateToProps = ({status}) => {
    let { loading, error, notFound } = status;
    return { loading, error, notFound };
};

export default
connect(mapStateToProps)(StatusArea);
