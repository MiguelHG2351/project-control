import React from 'react'
import { ScrollView, Text, View, Image, TextInput, StyleSheet, Pressable, ToastAndroid } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useAddMyCatMutation } from '../components/api'

export function AddCatInfo(props) {
  const { cat } = props.route.params
  const [catName, onChangeCatName ] = React.useState(cat?.name) // [state, setState
  const [ createUser ] = useAddMyCatMutation()
  const navigation = useNavigation()

  function handleAddNewCat() {
    console.log(cat.name)
    console.log(cat.id)

    createUser({ catId: cat.id, catName: catName, catImage: cat.image.url }).unwrap()
    .then(() => {
      ToastAndroid.show(`Cat ${catName} saved!`, ToastAndroid.SHORT)
      navigation.navigate('Home')
    }).catch(err => {
      console.log(err)
      ToastAndroid.show(`Error: ${err.error}`, ToastAndroid.SHORT)
    })

  }

  return (
    <ScrollView>
      <View style={{ paddingHorizontal: 24 }}>
        <View style={{ alignItems: 'center', rowGap: 12 }}>
          <Image style={styles.image} source={{ uri: cat.image.url }} />
          <View style={{ flexDirection: 'row' }}>
            <TextInput 
              style={styles.catName}
              placeholder={cat.name}
              onChangeText={onChangeCatName}
              value={catName}
            />
          </View>
          <View style={{ alignItems: 'flex-start' }}>
            <Text style={{ fontSize: 16, fontWeight: 600, textAlign: 'left' }}>Dog friendly: {cat.dog_friendly}</Text>
            <Text style={{ fontSize: 16}}>Life span: {cat.life_span}</Text>
            <Text style={{ fontSize: 16}}>Health issues: {cat.health_issues}</Text>
            <Text style={{ fontSize: 16}}>Origin: {cat.origin}</Text>
          </View>
          <View>
            <Text style={{ fontSize: 16, fontWeight: 600 }}>Description:</Text>
            <Text style={{ fontSize: 16 }}>{cat.description}</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Pressable style={styles.saveCatBtn} onPress={handleAddNewCat}>
              <Text style={styles.saveCatBtnText}>Save cat</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: { width: 250,
    height: 250,
    borderRadius: 250/2 
  },
  catName: {
    borderColor: '#000',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 18,
    padding: 6,
    flex: 1,
    borderRadius: 12
  },
  saveCatBtn: {
    backgroundColor: '#0086ff',
    padding: 12,
    borderRadius: 12,
    flex: 1
  },
  saveCatBtnText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  }
})
