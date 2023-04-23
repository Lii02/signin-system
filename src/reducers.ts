import { combineReducers } from 'redux';
import signinReducer from './slice';

const rootReducer = combineReducers({
    log: signinReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;