import { Pressable, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Home({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My pets</Text>
      <Text>Add up to 5 pets, and manage their fedding</Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Cats')}>
        <Text style={styles.buttonText} accessibilityLabel='Add new pet'>
        Add a new pet
        </Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
    
  },
  title: {
    fontSize: 32
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    textTransform: 'capitalize',
    borderRadius: 8,
    width: '100%',
    backgroundColor: '#0086ff',
    padding: 8,
  }
});
