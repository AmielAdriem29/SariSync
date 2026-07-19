import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import { useColorScheme, View, Text } from 'react-native';
import NavigationTabs from '@/components/navigation-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, IconSizes } from '@/constants/theme';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme === 'unspecified' ? 'light' : colorScheme];

  return (
    <ThemeProvider value={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
      <SafeAreaView edges={['top', 'bottom']} className="flex-1 bg-primary">
        <View className="flex-row justify-between p-6">
          <View className="flex-row items-center gap-2">
            <View className="bg-white rounded-full self-center p-1.5">
              <Ionicons name="person" size={IconSizes.medium} color={colors.neutral} />
            </View>
            <View>
              <Text className="text-white font-bold text-sm">John Doe</Text>
              <Text className="text-white text-xs">Owner</Text>
            </View>
          </View>

          <Ionicons name="notifications" size={IconSizes.medium} color={colors.white} />
        </View>

        <View className="flex-1 rounded-t-2xl overflow-hidden">
          <NavigationTabs />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}
