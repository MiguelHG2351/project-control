import Navigation from './navigation/Navigation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage';

export default function App() {
  return (
    <NavigationContainer>
        <Navigation />
    </NavigationContainer>
  );
}
