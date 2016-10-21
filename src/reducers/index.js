import { combineReducers } from 'redux';
import form from './form-reducer';
import result from './result-reducer';
import status from './status-reducer';

export default
combineReducers({
    form,
    result,
    status
});