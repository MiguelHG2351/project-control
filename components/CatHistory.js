import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CatHistory({ navigation, cat }) {
  return (
    <View>
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
      <View style={styles.registerTime}>
        <Text style={{ fontWeight: '700', fontSize: 22 }}>08:00</Text>
        <Text style={{ fontWeight: '700', fontSize: 22 }}>Breakfast</Text>
      </View>
      <Pressable style={{ borderColor: '#0099ff', borderWidth: 1, borderRadius: 6, paddingHorizontal: 8, paddingVertical: 12, marginBottom: 32 }} onPress={() => navigation.navigate('Cats')}>
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
})
