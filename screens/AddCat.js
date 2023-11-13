import React from 'react'
import { StyleSheet, Text, Pressable, View, TextInput } from 'react-native'
import { globalStyles } from '../components/globalStyles' 

import { ListOfCat } from '../components/ListOfCat'

export default AddCat = ({ navigation }) => {
  
  return (
    <View style={styles.modalView}>
      <Text style={styles.modalTitle} accessibilityLabel='Add new pet'>Add new pet</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Find your catito!"
      />
      <ListOfCat/>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText} accessibilityLabel='Add new pet'>
        Add new pet
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    textTransform: 'capitalize',
    borderRadius: 8,
    width: '100%',
    backgroundColor: '#0086ff',
    padding: 8,
  },
  modalView: {
    ...globalStyles.centeredView,
    backgroundColor: '#fff',
    paddingLeft: 12,
    paddingRight: 12,
    gap: 6
  },
  modalTitle: {
    fontSize: 24,
    marginBottom: 16,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  }
})
