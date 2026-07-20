import { View, Text, Image, FlatList } from 'react-native'
import SearchBar from '@/components/search-bar';

const sampleProducts = [
  { ID: 1, name: 'Coke', SRP: '85.00', WSP: '78.00' },
  { ID: 2, name: 'Coke', SRP: '85.00', WSP: '78.00' },
  { ID: 3, name: 'Coke', SRP: '85.00', WSP: '78.00' },
  { ID: 4, name: 'Coke', SRP: '85.00', WSP: '78.00' },
  { ID: 5, name: 'Coke', SRP: '85.00', WSP: '78.00' },
  { ID: 6, name: 'Coke', SRP: '85.00', WSP: '78.00' },
  { ID: 7, name: 'Coke', SRP: '85.00', WSP: '78.00' },
  { ID: 8, name: 'Coke', SRP: '85.00', WSP: '78.00' },
]

export default function Products() {
  return (
    <View className="flex-1 p-6 gap-4">
      <SearchBar />
      {/* Products List */}
      <FlatList
        className="flex-1"
        data={sampleProducts}
        keyExtractor={(item) => String(item.ID)}
        contentContainerClassName="gap-2"
        renderItem={({ item }) => (
          <View className="flex-row items-center gap-3 bg-neutral/10 p-2 rounded-lg">
            <View className="w-16 h-16 rounded-lg overflow-hidden">
              <Image
                className="bg-neutral"
                style={{ width: '100%', height: '100%' }}
                source={require('@/assets/images/coffee-cat.jpg')}
              />
            </View>
            <View>
              <Text className="text-base font-bold text-neutral">
                {item.name} 1.5L
              </Text>
              <View className="flex-row items-center gap-2">
                <Text className="text-xs text-neutral">SRP: ₱ {item.SRP}</Text>
                <Text className="text-xs text-neutral">|</Text>
                <Text className="text-xs text-neutral">WSP: ₱ {item.WSP}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  )
}
