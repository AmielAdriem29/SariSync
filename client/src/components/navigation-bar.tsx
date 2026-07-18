import { Tabs } from 'expo-router';
import { useColorScheme, Text, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Colors, IconSizes } from '@/constants/theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function NavigationTabs() {
  const scheme = useColorScheme();
  const colors = Colors[scheme === 'unspecified' ? 'light' : scheme];

  const navTabs = [
    { name: 'home', Icon: Entypo, iconName: 'home' },
    { name: 'products', Icon: FontAwesome5, iconName: 'clipboard-list' },
    { name: 'custom', Icon: FontAwesome6, iconName: 'add' },
    { name: 'store', Icon: FontAwesome5, iconName: 'store' },
    { name: 'settings', Icon: Ionicons, iconName: 'settings' },
  ] as const;

  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: {
        height: 55
      },
    }}>
      { navTabs.map(( tab ) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.name === 'custom' ? '' : tab.name.charAt(0).toUpperCase() + tab.name.slice(1),
            tabBarIcon: ({ focused }) => (
              tab.name === 'custom' ? (
                <View className="bg-primary rounded-[20px] w-[35px] h-[35px] items-center justify-center">
                  <tab.Icon name={tab.iconName} size={IconSizes.medium} color={colors.white} />
                </View>
              ) : (
                <tab.Icon
                  name={tab.iconName}
                  size={IconSizes.medium}
                  color={focused ? colors.primary : colors.neutral}
                />
              )
            ),
            tabBarLabel: tab.name === 'custom' ? () => null : ({ focused, children }) => (
              <Text className={`text-xs text-neutral ${focused ? 'font-bold' : 'font-normal'}`}>
                {children}
              </Text>
            )
          }}
        />
      ))}
    </Tabs>
  );
}
