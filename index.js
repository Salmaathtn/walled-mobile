import { registerRootComponent } from 'expo';
const cors = require("cors");
import { Axios } from 'axios';


import App from './App';

App.user(cors())
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
