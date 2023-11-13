import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import AddCat from "../screens/AddCat";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen

        name="Home"
        component={Home}
      />

      <Stack.Screen
        name="Cats"
        component={AddCat}
      />
    </Stack.Navigator>
  );
}
