import { StackNavigator } from 'react-navigation';
import Home from './screens/Home';
import Quiz from './screens/Quiz';
import Results from './screens/Results';

const App = StackNavigator({
    Home: {
        screen: Home,
    },
    Quiz: {
        screen: Quiz
    },
    Results: {
        screen: Results
    }
},
{
    headerMode: 'none'
});

export default App;