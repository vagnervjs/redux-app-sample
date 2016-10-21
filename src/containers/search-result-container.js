import { connect } from 'react-redux';
import SearchResult from '../components/search-result';

const mapStateToProps = ({app}) => {
    let { address, loading, error, notFound } = app;
    return { address, loading, error, notFound };
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default
connect(mapStateToProps, mapDispatchToProps)(SearchResult);
