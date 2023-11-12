import React, { useState } from 'react'
import { StyleSheet, Text, Pressable, Modal, View } from 'react-native'
import { globalStyles } from './globalStyles'

export const AddCatModal = () => {
  const [ modalVisible, setModalVisible ] = useState(false)
  
  return (
    <React.Fragment>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Modal</Text>
            <Pressable style={styles.button} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText} accessibilityLabel='Add new pet'>
              Add new pet
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      
      <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText} accessibilityLabel='Add new pet'>
        Add new pet
        </Text>
      </Pressable>
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
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 16,
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
