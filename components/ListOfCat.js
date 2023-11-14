import { View, FlatList, Text, Image, StyleSheet, ActivityIndicator, Pressable } from 'react-native'
import { useGetMyCatsQuery } from './api'
import { useCats } from '../hooks/useCats'
import { useNavigation } from '@react-navigation/native'

export const ListOfCat = () => {
  // const [ cats, setCats ] = useState([])
  const { cats, loadMoreCats } = useCats()
  const { data, isLoading } = useGetMyCatsQuery()

  return (
    <View style={{ flex: 1, flexDirection: 'column', alignSelf: 'stretch' }}>
      <FlatList 
        style={{ width: "100%" }}

        data={[
          ...cats
        ]}
        // keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{height: 6}} />}
        renderItem={({ item }) => <CatItem key={`${item.id}_${item.name}`} cat={item} />}
        ListFooterComponent={() => (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
        onEndReached={loadMoreCats}
        onEndReachedThreshold={0.1}
      />
    </View>
  )
}


const CatItem = ({ cat }) => {
  const navigation = useNavigation()

  // const imageURI = `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`
  return (
    <View >
      <Pressable style={styles.itemView} onPress={() => navigation.navigate('CatInfo', { cat: cat })}>
        {
            !cat.image ?
            <ActivityIndicator size="large" color="#0000ff" />
            :
            <Image 
              source={{
                uri: cat.image.url || 'https://cdn2.thecatapi.com/images/MTYwODk3Mg.jpg',
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
      </Pressable>
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
