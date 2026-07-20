import { View, Text } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import Entypo from '@expo/vector-icons/Entypo'
import { IconSizes } from '@/constants/theme'
import { useColorScheme } from 'react-native'
import { Colors } from '@/constants/theme'

export default function SearchBar(){
  const scheme = useColorScheme();
  const colors = Colors[scheme === 'unspecified' ? 'light' : scheme];

  return (
    <View className="rounded-lg flex-row justify-between items-center border-2 border-secondary py-1 px-2">
        <Feather name="search" size={IconSizes.small} color={colors.primary} />
        <Entypo name="menu" size={IconSizes.small} color={colors.neutral} />
    </View>
  )
}