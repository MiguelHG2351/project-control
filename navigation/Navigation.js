import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import AddCat from "../screens/AddCat";
import { CatInfo } from "../screens/CatInfo";

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
      <Stack.Screen
        name="CatInfo"
        options={{ title: 'Regresar', headerTransparent: false, headerShadowVisible: false }}
        component={CatInfo}
      />
    </Stack.Navigator>
  );
}
