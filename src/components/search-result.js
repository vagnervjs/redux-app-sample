import React, {Component} from 'react';
import FullAddress from './full-address';
import Map from './map';
import Alert from './alert';
import '../scss/search-result.scss';

export default
class SearchResult extends Component {
    render() {
        let { address, loading, error, notFound } = this.props;

        if (loading)
            return <div>LOADING...</div>;
        else if (error)
            return <Alert severity="error" msg="Erro na consulta" detail={error}/>;
        else if (notFound)
            return <Alert severity="warn" msg="Endereço não encontrado"/>;
        else if (!Object.keys(address).length)
            return <div/>;

        return (
            <div className="search-result">
                <FullAddress address={address}/>
                <Map/>
            </div>
        )
    }
}
