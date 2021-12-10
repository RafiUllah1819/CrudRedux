import reducer from './reducer';

import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    a:reducer,
})

export default rootReducers;