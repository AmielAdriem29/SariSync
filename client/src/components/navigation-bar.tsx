import { router, Tabs } from 'expo-router';
import { useState } from 'react';
import { useColorScheme, Text, View, Modal, Pressable } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Colors, IconSizes } from '@/constants/theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';

const quickActions = [
  { name: 'Record Transaction', Icon: FontAwesome5, iconName: 'exchange-alt', className: 'bg-transactionsPrimary', route: 'record-transaction'},
  { name: 'Manage Products', Icon: Ionicons, iconName: 'cube-outline', className: 'bg-productsPrimary', route: 'manage-products'},
  { name: 'Manage Credit', Icon: Feather, iconName: 'file-text', className: 'bg-creditPrimary', route: 'manage-credit'},
  { name: 'Log Expense', Icon: FontAwesome5, iconName: 'coins', className: 'bg-expensesPrimary', route: 'log-expense'},
] as const;

function sluggify(name: string) {
  return name
    .toLowerCase()
    .replace(' ', '-')
}

export default function NavigationTabs() {
  const scheme = useColorScheme();
  const colors = Colors[scheme === 'unspecified' ? 'light' : scheme];
  const [quickActionsVisible, setQuickActionsVisible] = useState(false);

  const navTabs = [
    { name: 'home', Icon: Entypo, iconName: 'home' },
    { name: 'products', Icon: FontAwesome5, iconName: 'clipboard-list' },
    { name: 'custom', Icon: FontAwesome6, iconName: 'add' },
    { name: 'store', Icon: FontAwesome5, iconName: 'store' },
    { name: 'settings', Icon: Ionicons, iconName: 'settings' },
  ] as const;

  return (
    <>
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
            listeners={tab.name === 'custom' ? {
              tabPress: (e) => {
                e.preventDefault();
                setQuickActionsVisible(true);
              },
            } : undefined}
          />
        ))}
        {quickActions.map((action) => (
          <Tabs.Screen key={action.route} name={action.route} options={{ href: null }} />
        ))}
      </Tabs>

      <Modal
        visible={quickActionsVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setQuickActionsVisible(false)}
      >
        <Pressable
          className="flex-1 bg-black/50 justify-end"
          onPress={() => setQuickActionsVisible(false)}
        >
          {/* Menu items pressable */}
          <Pressable className="bg-white rounded-2xl p-6 gap-4" onPress={() => {}}>
            <View className="w-10 h-1 rounded-full bg-neutral/30 self-center" />
            <View className="flex-row flex-wrap justify-between gap-3">
              {quickActions.map((action) => (
                <Pressable
                  key={action.name}
                  className={`w-[48%] aspect-[5/3] rounded-2xl items-center justify-center gap-2 ${action.className}`}
                  onPress={() => {
                    setQuickActionsVisible(false);
                    router.push(`/${action.route}`);
                  }}
                >
                  <action.Icon name={action.iconName} size={IconSizes.large} color={colors.white} />
                  <Text className="text-white font-bold text-center px-2">{action.name}</Text>
                </Pressable>
              ))}
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}
