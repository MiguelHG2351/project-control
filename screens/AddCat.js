import React from 'react'
import { StyleSheet, Text, Pressable, View } from 'react-native'
import { globalStyles } from '../components/globalStyles' 

import { ListOfCat } from '../components/ListOfCat'

export default AddCat = ({ navigation }) => {
  
  return (
    <React.Fragment>
        <View style={styles.modalView}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle} accessibilityLabel='Add new pet'>Add new pet</Text>
            <ListOfCat/>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.buttonText} accessibilityLabel='Add new pet'>
              Add new pet
              </Text>
            </Pressable>
          </View>
        </View>
    </React.Fragment>
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
    padding: 80,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    paddingBottom: 32,
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
