import { View, Text, FlatList } from 'react-native'
import SearchBar from '@/components/search-bar'

const sampleCredits = [
  { ID: 1, name: 'John Doe', balance: 85.00, date: '01/01/2026' },
  { ID: 2, name: 'Marcus', balance: 8502.00, date: '01/01/2026' },
  { ID: 3, name: 'Joe Smith', balance: 85.00, date: '01/01/2026' },
]

export default function ManageCredit(){
  return (
    <View className="flex-1 bg-creditPrimary p-6 gap-4">
      <SearchBar />

      <View className="flex-1 gap-2">
        <View className="flex-row px-4">
          <Text className="flex-1 font-bold text-neutral">Name</Text>
          <Text className="flex-1 font-bold text-neutral text-center">Credit</Text>
          <Text className="flex-1 font-bold text-neutral text-center">Date</Text>
        </View>
        <FlatList
          className="flex-1"
          data={sampleCredits}
          keyExtractor={(item) => String(item.ID)}
          contentContainerClassName="gap-2"
          renderItem={({ item }) => (
            <View className="flex-row items-center bg-neutral/10 rounded-lg px-4 py-3">
              <Text className="flex-1 text-neutral">{item.name}</Text>
              <Text className="flex-1 text-neutral text-center">₱ {item.balance.toFixed(2)}</Text>
              <Text className="flex-1 text-neutral text-center">{item.date}</Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}
