import { connect } from 'react-redux';
import SearchResult from '../components/search-result';

const mapStateToProps = ({app}) => {
    let { address, location, loading, error, notFound } = app;
    return { address, location, loading, error, notFound };
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default
connect(mapStateToProps, mapDispatchToProps)(SearchResult);
