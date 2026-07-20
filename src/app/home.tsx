import { Colors, IconSizes } from "@/constants/theme";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { FlatList, Text, useColorScheme, View } from "react-native";

const sampleDashboardItems = [
  { name: "Revenue", value: 2000, Icon: FontAwesome6, iconName: "peso-sign" },
  { name: "Total Sales", value: 0, Icon: FontAwesome, iconName: "list" },
  {
    name: "Total Utang",
    value: 40,
    Icon: MaterialCommunityIcons,
    iconName: "chart-line",
  },
  {
    name: "Restock Needed",
    value: 35,
    Icon: MaterialIcons,
    iconName: "production-quantity-limits",
  },
];

const mockData = [
  { ID: 19242, amount: 250.0, staffAssigned: "Pedro", time: "3:00:00" },
  { ID: 19242, amount: 250.0, staffAssigned: "Pedro", time: "3:00:00" },
  { ID: 19242, amount: 250.0, staffAssigned: "Pedro", time: "3:00:00" },
  { ID: 19242, amount: 250.0, staffAssigned: "Pedro", time: "3:00:00" },
];

export default function Home() {
  const scheme = useColorScheme();
  const colors = Colors[scheme === "unspecified" ? "light" : scheme];

  return (
    <View className="flex-1 p-6 gap-4">
      <View className="flex-row flex-wrap justify-between gap-1 sm:gap-y-4">
        {sampleDashboardItems.map((item) => (
          <View
            key={item.name}
            className="w-[49%] bg-secondary p-4 gap-2 rounded-2xl"
          >
            <View className="w-8 h-8 rounded-full bg-white items-center justify-center">
              <item.Icon
                name={item.iconName}
                size={IconSizes.small}
                color={colors.primary}
              />
            </View>
            <Text className="text-3xl font-bold text-white">{item.value}</Text>
            <Text className="text-sm text-white">{item.name}</Text>
          </View>
        ))}
      </View>
      {/* Past transactions */}
      <View className="flex-1">
        <Text className="font-bold text-lg text-neutral">
          Past Transactions
        </Text>
        <Text className="font-semibold text-sm text-neutral mb-1">
          January 26, 2026
        </Text>
        <FlatList
          className="flex-1"
          data={mockData}
          contentContainerClassName="gap-2"
          renderItem={({ item }) => (
            <View className="flex-1 bg-neutral/40 rounded-lg px-3 py-2 gap-0.5">
              <View className="flex-row justify-between">
                <Text className="font-bold text-neutral text-sm">
                  ID: {item.ID}
                </Text>
                <Text className="font-bold text-neutral text-sm">
                  Time: {item.time}
                </Text>
              </View>
              <Text className="font-medium text-neutral text-sm">
                Php {item.amount}
              </Text>
              <Text className="font-medium text-neutral text-sm">
                [{item.staffAssigned}]
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
