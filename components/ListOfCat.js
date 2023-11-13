import { View, FlatList, Text, Image, StyleSheet, ActivityIndicator } from 'react-native'
import { useEffect, useState } from 'react'
import { getCats, getCatImage } from './api/cats'

export const ListOfCat = () => {
  const [ cats, setCats ] = useState([])

  useEffect(() => {
    getCats(20)
    .then(cats => setCats(cats))
  }, [])

  return (
    <View style={{ flex: 1, flexDirection: 'column', alignSelf: 'stretch' }}>
      <FlatList 
        style={{ width: "100%" }}

        data={[
          ...cats
        ]}
        ItemSeparatorComponent={() => <View style={{height: 6}} />}
        renderItem={({ item }) => <CatItem cat={item} />}
        ListFooterComponent={() => (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
      />
    </View>
  )
}


const CatItem = ({ cat }) => {
  const [ catImage, setCatImage ] = useState({})
  
  useEffect(() => {
    getCatImage(cat.id).then(catImage => {
      setCatImage(catImage[0])
    }).catch(error => {
      console.log(error)
    })
  }, [])

  // const imageURI = `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`
  
  return (
    <View style={styles.itemView}>
      {
          !catImage.url ?
          <ActivityIndicator size="large" color="#0000ff" />
          :
          <Image 
            source={{
              uri: catImage.url || 'https://cdn2.thecatapi.com/images/MTYwODk3Mg.jpg',
            }}
            style={styles.catImage}
          />
      }
      <View style={styles.itemTextContainer}>
        <View style={{ flexDirection: 'row', flex: 1, flexWrap: 'wrap' }}>
          <Text style={styles.itemTitle} ellipsizeMode='head' numberOfLines={2}>{cat.name}</Text>
          <Text>{cat.origin}</Text>
        </View>
        <View>
          <Text>{cat.temperament}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  catImage: {
    width: 150,
    height: 150,
  },
  itemView: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    overflow: 'hidden', 
  },
  itemTextContainer: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flex: 1,
    paddingRight: 10,
  },
  itemTitle: {
    width: '100%',
    flexGrow: 0,
    fontSize: 24,
    fontWeight: 'bold'
  }
})
