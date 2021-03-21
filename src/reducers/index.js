import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import Settings from './Settings';
import Common from "./Common";


export default (history) => combineReducers({
  router: connectRouter(history),
  settings: Settings,
  common: Common,
});
