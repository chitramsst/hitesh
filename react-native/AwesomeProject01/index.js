/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import AppPro from './src/AppPro'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppPro);
