import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { AddCatModal } from './components/AddCatModal';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#0099ff' }}>
        <View style={styles.container}>
          <Text style={styles.title}>My pets</Text>
          <Text>Add up to 5 pets, and manage their fedding</Text>
          <AddCatModal />
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'start',
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
    gap: 10
    
  },
  title: {
    fontSize: 32
  }
});
