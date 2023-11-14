import { Pressable, StyleSheet, Text, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import CatHistory from '../components/CatHistory';

export default function Home({ navigation }) {
  // const [ cats, update, remove ] = useIndex(postCats, 'object', storage)
  

  return (
      <ScrollView nestedScrollEnabled={true} style={{ paddingBottom: 44 }}>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>My pets</Text>
            <Text style={styles.subtitle}>Add up to 5 pets, and manage their fedding</Text>
          </View>
            <CatHistory navigation={navigation} />
            <CatHistory navigation={navigation} />
            <Pressable style={styles.newCatbutton} onPress={() => navigation.navigate('Cats')}>
              <Text style={styles.newCatText} accessibilityLabel='Add new pet'>
              Add a new pet
              </Text>
            </Pressable>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
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
    fontSize: 32,
    fontWeight: '700',
  },
  subtitle: {
    marginTop: 12,
    marginBottom: 32,
  },
  newCatText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  newCatbutton: {
    textTransform: 'capitalize',
    borderRadius: 8,
    width: '100%',
    backgroundColor: '#0086ff',
    paddingHorizontal: 8,
    paddingVertical: 12,
  }
});
