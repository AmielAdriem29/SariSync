import { View, Text, StyleSheet, useColorScheme, FlatList } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { BorderRadius, Colors, FontSizes, FontWeights, IconSizes, Spacing } from '@/constants/theme';

const sampleDashboardItems = [
  { name: 'Revenue', value: 2000, Icon: FontAwesome6, iconName: 'peso-sign'},
  { name: 'Total Sales', value: 0, Icon: FontAwesome, iconName: 'list'},
  { name: 'Total Utang', value: 40, Icon: MaterialCommunityIcons, iconName: 'chart-line' },
  { name: 'Restock Needed', value: 35, Icon: MaterialIcons, iconName: 'production-quantity-limits'}
]

const mockData = [
  { ID: 19242, amount: 250.00, staffAssigned: 'Pedro', time: '3:00:00'},
  { ID: 19242, amount: 250.00, staffAssigned: 'Pedro', time: '3:00:00'},
  { ID: 19242, amount: 250.00, staffAssigned: 'Pedro', time: '3:00:00'},
  { ID: 19242, amount: 250.00, staffAssigned: 'Pedro', time: '3:00:00'}
]

export default function Home(){
  const scheme = useColorScheme();
  const colors = Colors[scheme === 'unspecified' ? 'light' : scheme];

  return (
    <View style={[styles.container]}>
      <View style={styles.grid}>
        {sampleDashboardItems.map((item) => (
          <View key={item.name} style={[styles.card, { backgroundColor: colors.secondary }]}>
            <View style={[styles.iconBadge, { backgroundColor: colors.white }]}>
              <item.Icon name={item.iconName} size={IconSizes.small} color={colors.primary} />
            </View>
            <Text style={{ fontSize: FontSizes.heading, fontWeight: FontWeights.bold, color: colors.white }}>
              {item.value}
            </Text>
            <Text style={{ fontSize: FontSizes.label, color: colors.white }}>{item.name}</Text>
          </View>
        ))}
      </View>
      {/* Past transactions */}
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', fontSize: FontSizes.body, color: colors.neutral }}>Past Transactions</Text>
        <Text style={{ fontWeight: 'semibold', fontSize: FontSizes.label, color: colors.neutral, marginBottom: Spacing.one }}>January 26, 2026</Text>
        <FlatList
          data={mockData}
          contentContainerStyle={{ gap: Spacing.two }}
          renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                backgroundColor: '#c2bbbb',
                borderRadius: BorderRadius.small,
                padding: Spacing.two
              }}
            >
              <View 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'row', 
                  justifyContent: 'space-between'
                }}>
                <Text style={{ fontWeight: 'bold', color: colors.neutral, fontSize: FontSizes.label }}>ID: {item.ID}</Text>
                <Text style={{ fontWeight: 'bold', color: colors.neutral, fontSize: FontSizes.label }}>{item.time}</Text>
              </View>
              <Text style={{ fontWeight: FontWeights.medium, color: colors.neutral, fontSize: FontSizes.label }}>Php {item.amount}</Text>
              <Text style={{ fontWeight: FontWeights.medium, color: colors.neutral, fontSize: FontSizes.label }}>[{item.staffAssigned}]</Text>
            </View>
          )}

        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing.four,
    gap: Spacing.three,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: Spacing.three,
  },
  card: {
    width: '48%',
    padding: Spacing.three,
    gap: Spacing.two,
    borderRadius: BorderRadius.small,
  },
  iconBadge: {
    width: 32,
    height: 32,
    borderRadius: BorderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
