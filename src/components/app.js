import React, {Component} from 'react';
import Header from './header';
import ControlBar from './control-bar';
import StatusContainer from '../containers/status-container';
import ResultContainer from '../containers/result-container';
import { getFromQueryString } from '../services/url';
import '../scss/app.scss';

export default
class App extends Component {
    componentDidMount () {
        let cep = getFromQueryString();
        if (cep) this.props.init(cep);
    }

    render() {
        return (
            <div className="app">
                <Header/>
                <ControlBar/>
                <StatusContainer/>
                <ResultContainer/>
            </div>
        )
    }
}
