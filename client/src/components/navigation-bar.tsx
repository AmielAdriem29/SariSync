import { Tabs } from 'expo-router';
import { useColorScheme, Text, Pressable, StyleSheet } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Colors } from '@/constants/theme';
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
    <Tabs>
      { navTabs.map(( tab ) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.name === 'custom' ? '' : tab.name.charAt(0).toUpperCase() + tab.name.slice(1),
            tabBarIcon: ({ focused }) => (
              tab.name === 'custom' ? (
                <View style={[{ 
                    backgroundColor: colors.primary, 
                    borderRadius: 20, 
                    width: 35,
                    height: 35,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }]}>
                  <tab.Icon name={tab.iconName} size={24} color="#FFFFFF" />
                </View>
              ) : (
                <tab.Icon
                  name={tab.iconName}
                  size={24}
                  color={focused ? colors.primary : colors.neutral}
                />
              )
            ),
            tabBarLabel: tab.name === 'custom' ? () => null : ({ focused, children }) => (
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: focused ? '600' : '400',
                  color: colors.neutral
                }}>
                {children}
              </Text>
            )
          }}
        />
      ))}
    </Tabs>
  );
}
