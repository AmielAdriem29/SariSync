import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import { useColorScheme, View, StyleSheet, Text } from 'react-native';
import NavigationTabs from '@/components/navigation-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, FontSizes, FontWeights, BorderRadius, IconSizes } from '@/constants/theme';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme === 'unspecified' ? 'light' : colorScheme];

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <SafeAreaView edges={['top', 'bottom']} style={[styles.root, { backgroundColor: colors.primary }]}>
        <View style={[{ backgroundColor: colors.primary }]} />
          <View style={{ 
              display: 'flex', 
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 20
            }}
          >
            <View style={{ 
              display: 'flex', 
              flexDirection: 'row',
              gap: 8
            }}>
              <Ionicons style={{
                backgroundColor: colors.white,
                borderRadius: BorderRadius.medium,
                alignSelf: 'center',
                padding: 6
              }} name="person" size={IconSizes.medium} color={colors.neutral} />
              <View>
                <Text style={{ fontSize: FontSizes.label, color: colors.white, fontWeight: FontWeights.bold }}>John Doe</Text>
                <Text style={{ fontSize: FontSizes.small, color: colors.white }}>Owner</Text>
              </View>
            </View>

            <Ionicons name="notifications" size={IconSizes.medium} color={colors.white} />
          </View>
        
        <View style={styles.itemsWrapper}>
          <NavigationTabs />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  itemsWrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: BorderRadius.large,
    borderTopRightRadius: BorderRadius.large,
    overflow: 'hidden',
  },
});