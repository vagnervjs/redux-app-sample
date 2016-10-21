import React, {Component} from 'react';
import '../scss/alert.scss';

export default
class Alert extends Component {
    render() {
        let { severity, msg, detail } = this.props;
        return (
            <div className={`alert ${severity}`}>
                {msg ? <span className="msg">{msg}</span> : ''}
                {detail ? <span className="detail">{detail}</span> : ''}
            </div>
        )
    }
}
