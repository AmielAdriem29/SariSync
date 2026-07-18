import { View, Text, FlatList } from 'react-native'
import SearchBar from '@/components/search-bar'
import { Image } from 'react-native'

const storeDirectory = [
  { name: 'Don Macchiato', email: 'don.maccs@gmail.com', role: 'Staff'},
  { name: 'Maria Piattos', email: 'maria.piattos@gmail.com', role: 'Manager'},
  { name: 'John Doe', email: 'john.doe@gmail.com', role: 'Owner'},
]

export default function Products() {
  return (
    <View className="flex-1 p-6 gap-4">
      <SearchBar />
      {/* Products List */}
      <FlatList
        className="flex-1"
        data={storeDirectory}
        keyExtractor={(item) => String(item.name)}
        contentContainerClassName="gap-2"
        renderItem={({ item }) => (
          <View className="flex-row items-center gap-3 bg-neutral/10 px-3 py-2 rounded-lg">
            <View className="w-16 h-16 rounded-full overflow-hidden">
              <Image
                className="bg-neutral"
                style={{ width: '100%', height: '100%' }}
                source={require('@/assets/images/coffee-cat.jpg')}
              />
            </View>
            <View className='flex-1 flex-row justify-between'>
              <View>
                <Text className="text-base font-bold text-neutral">
                  {item.name}
                </Text>
                <Text className="text-xs text-neutral">{item.email}</Text>
              </View>

              <View className='bg-secondary/80 p-0.5 rounded-md border-2 border-primary self-start'>
                <Text className='text-xs font-semibold text-primary'>{item.role}</Text>
              </View>
            </View>

            
          </View>
        )}
      />
    </View>
  )
}
