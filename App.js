import Navigation from './navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { api } from './components/api';


export default function App() {
  return (
    <ApiProvider api={api}>
      <NavigationContainer>
          <Navigation />
      </NavigationContainer>
    </ApiProvider>
  );
}
