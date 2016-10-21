import React, {Component} from 'react';
import Alert from './alert';

export default
class Status extends Component {
    render() {
        let { loading, error, notFound } = this.props;

        if (loading)
            return <div className="loading"/>;
        else if (error)
            return <Alert severity="error" msg="Erro na consulta" detail={error}/>;
        else if (notFound)
            return <Alert severity="warn" msg="Endereço não encontrado"/>;

        return <div/>
    }
}
