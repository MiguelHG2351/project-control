import { View, FlatList, Text, Image, StyleSheet } from 'react-native'
import { useEffect, useState } from 'react'
import { getCats } from './api/cats'

export const ListOfCat = () => {
  const [ cats, setCats ] = useState([])

  useEffect(() => {
    getCats()
    .then(cats => setCats(cats))
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <FlatList 
        data={[
          ...cats
        ]}
        renderItem={({ item }) => <CatItem cat={item} />}
      />
    </View>
  )
}


const CatItem = ({ cat }) => {
  return (
    <View>
      <Image 
        source={{
        uri: `https://api.thecatapi.com/v1/images/${cat.reference_image_id}`,
        }}
        styles={styles.catImage}
      />
      <Text>{cat.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  catImage: {
    width: 50,
    height: 50,
  },
})
