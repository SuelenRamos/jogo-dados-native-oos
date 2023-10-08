import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Historico from './Historico';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Historico" component={Historico} />
    </Stack.Navigator>
  );
};

export default Navigation;
