import {createAppContainer} from 'react-navigation';
import {createStackNavigator, HeaderBackButton} from 'react-navigation-stack';

import Home from './pages/Home';
import Details from './pages/Details';

console.disableYellowBox = true;

const Routes = createAppContainer(
  createStackNavigator({
    Search: Home,
    Details: Details,
  }),
);

export default Routes;
