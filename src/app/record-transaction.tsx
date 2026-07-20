import { useState } from 'react'
import { View, Text, TextInput, Pressable, FlatList } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { IconSizes } from '@/constants/theme';
import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/theme';

const sampleItems = [
  { ID: 1, name: 'Coke 1.5L', price: 85.00, qty: 1 },
  { ID: 2, name: 'Coke 1.5L', price: 85.00, qty: 1 },
  { ID: 3, name: 'Coke 1.5L', price: 85.00, qty: 1 },
]

export default function RecordTransaction(){
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme === 'unspecified' ? 'light' : colorScheme];
  return (
    <View className="flex-1 bg-transactionsPrimary p-6 gap-4">
      {/* Header */}
      <View className="flex-row justify-between">
        <View>
          <Text className="text-white"><Text className="font-bold">Store:</Text> Sari-sari</Text>
          <Text className="text-white"><Text className="font-bold">Transaction ID:</Text> 1111-1111-111</Text>
        </View>
        <View className="items-end">
          <Text className="text-white"><Text className="font-bold">Date:</Text> 01-01-2026</Text>
          <Text className="text-white"><Text className="font-bold">By:</Text> Staff</Text>
        </View>
      </View>

      {/* Form card */}
      <View className="flex-1 bg-white p-4 gap-4 rounded-2xl">
        <View className="flex-row items-center justify-between">
          <Text className="font-bold text-neutral">Mode of Payment:</Text>
          <View className="bg-transactionsPrimary rounded-full px-4 py-1 flex-row items-center gap-2">
            <Text className="text-white font-bold">Choose</Text>
            <Ionicons name="chevron-down" size={IconSizes.small} color="white" />
          </View>
        </View>
        
        <View className="gap-2">
          <Text className="font-bold text-neutral">Notes:</Text>
          <TextInput
            className="bg-neutral/10 rounded-lg p-3 text-neutral"
            placeholder="Write here..."
            placeholderTextColor={colors.neutral}
            multiline
            value='Write here...'
          />
        </View>

        <View className="flex-row items-center gap-2">
          <Text className="font-bold text-neutral">List:</Text>
          <TextInput
            className="flex-1 border border-neutral/30 rounded-md px-3 py-1 text-neutral"
            placeholder="Search Product..."
            value='Search Product...'
          />
        </View>

        <View className="flex-1 bg-neutral/10 rounded-2xl p-2 gap-2">
          <View className="flex-row px-3">
            <Text className="flex-[1.5] font-bold text-neutral">Product</Text>
            <Text className="flex-[1.5] font-bold text-neutral text-center">Price</Text>
            <Text className="flex-[0.5] font-bold text-neutral text-right">Qty.</Text>
          </View>
          <FlatList
            data={sampleItems}
            keyExtractor={(item) => String(item.ID)}
            contentContainerClassName="gap-2"
            renderItem={({ item }) => (
              <View className="flex-row items-center bg-white rounded-lg px-3 py-2">
                <Text className="flex-[1.5] text-neutral">{item.name}</Text>
                <Text className="flex-[1.5] text-neutralt text-center">₱ {item.price.toFixed(2)}</Text>
                <Text className="flex-[0.5] text-neutral text-center">{item.qty}</Text>
              </View>
            )}
          />
        </View>
      </View>

      {/* Footer */}
      <View className="flex-row items-center justify-between">
        <Text className="text-white font-bold text-lg">Total: ₱ 85.00</Text>
        <Pressable className="bg-green-700 rounded-xl px-6 py-2">
          <Text className="text-white font-bold">Record</Text>
        </Pressable>
      </View>
    </View>
  )
}
