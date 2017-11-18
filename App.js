import { StackNavigator } from 'react-navigation';
import Home from './src/Home';

const getOptions = title => ({
  title,
  headerStyle: {
    backgroundColor: 'black',
  },
  headerTintColor: 'white',
});

const scenes = {
  Home: {
    screen: Home,
    navigationOptions: getOptions('商城'),
  },
};

const App = StackNavigator(scenes);

export default App;
