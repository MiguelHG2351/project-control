import { useState } from "react";
import { View, Text, Image, StyleSheet, Pressable, Modal, TextInput, ToastAndroid } from "react-native";
import { useAddCatRegisterMutation, useGetRegisterCatQuery } from "./api";

import Icon from 'react-native-vector-icons/FontAwesome';

export default function CatHistory({ navigation, cat }) {
  const [ addRegisterCat ] = useAddCatRegisterMutation()
  const { data=[], isLoading } = useGetRegisterCatQuery({ catId: cat.id })
  const [modalVisible, setModalVisible] = useState(false);
  const [catName, onChangeCatName] = useState('');

  function handleAddFood () {
    if(!catName) return ToastAndroid.show('Please enter a food type', ToastAndroid.SHORT)

    addRegisterCat({ catUserId: cat.id, name: catName }).unwrap()
    .then(() => {
      ToastAndroid.show(`Cat ${catName} saved!`, ToastAndroid.SHORT)
      setModalVisible(!modalVisible)
    })
    .catch(err => {
      console.log(err)
      ToastAndroid.show(`Error: ${err.error}`, ToastAndroid.SHORT)
    })
  }
  
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Ingrese el tipo de comida</Text>
            <View style={{ flexDirection: 'row' }}>
              <TextInput
                style={styles.foodType}
                placeholder={'Breakfast'}
                onChangeText={onChangeCatName}
                value={catName}
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Pressable
                style={[styles.button, styles.btnClose]}
                onPress={handleAddFood}>
                <Text style={{ fontSize: 16, textAlign: 'center', fontWeight: '600' }}>Add Food</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <View style={{marginBottom: 32, flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={{
            uri: cat.catImage
            }}
            style={{ width: 50, height: 50, borderRadius: 50/ 2, marginRight: 8 }}
          />
          <Text style={{ fontSize: 18, fontWeight: '600' }}>{cat.catName}</Text>
        </View>
        <Icon.Button name="chevron-down" backgroundColor="#fff" color={'#000'} style={{ flex: 1, justifyContent: 'center' }} iconStyle={{marginRight: '0'}} />
      </View>
      <View>
        {
          data.map(cat => (
            <View style={styles.registerTime} key={`${cat.id}_${cat.name}`}>
              <Text style={{ fontWeight: '700', fontSize: 22 }}>
                {((new Date(cat.createdAt)).getHours()+"").padStart(2,'0')}:{((new Date(cat.createdAt)).getMinutes()+"").padStart(2,'0')}
              </Text>
              <Text style={{ fontWeight: '700', fontSize: 22 }}>{cat.name}</Text>
            </View>
          ))
        }
      </View>
      <Pressable style={{ borderColor: '#0099ff', borderWidth: 1, borderRadius: 6, paddingHorizontal: 8, paddingVertical: 12, marginBottom: 32 }} onPress={() => setModalVisible(!modalVisible)}>
        <Text style={styles.feedText} accessibilityLabel='Add new pet'>
        Feed Now
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  registerTime: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 8,
    marginBottom: 32,
    backgroundColor: '#f4f8ff',
    paddingVertical: 16,
  },
  feedText: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 16
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    rowGap: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    fontSize: 22,
    textAlign: 'center',
  },
  btnClose: {
    width: '100%',
    flex: 1,
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    borderRadius: 8,
  },
  foodType: {
    borderColor: '#000',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 18,
    padding: 6,
    flex: 1,
    borderRadius: 12
  }
})
