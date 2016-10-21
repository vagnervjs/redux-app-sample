import { connect } from 'react-redux';
import StatusArea from '../components/status-ara';

const mapStateToProps = ({app}) => {
    let { loading, error, notFound } = app;
    return { loading, error, notFound };
};

export default
connect(mapStateToProps)(StatusArea);
