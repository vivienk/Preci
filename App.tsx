import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const variant = process.env.EXPO_PUBLIC_APP_VARIANT ?? 'development';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.wordmark}>preci</Text>
        <Text style={styles.title}>Thoughtful gifts start with noticing.</Text>
        <Text style={styles.description}>
          Remember the little things people mention and find a gift that feels like them.
        </Text>
        {variant !== 'production' && <Text style={styles.badge}>{variant.toUpperCase()} BUILD</Text>}
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F5F0',
  },
  content: { flex: 1, justifyContent: 'center', padding: 32 },
  wordmark: { color: '#6C5648', fontSize: 24, fontWeight: '700', marginBottom: 36 },
  title: { color: '#34291F', fontSize: 34, fontWeight: '700', lineHeight: 41 },
  description: { color: '#665D55', fontSize: 16, lineHeight: 24, marginTop: 18 },
  badge: { alignSelf: 'flex-start', backgroundColor: '#E6DED4', color: '#4C4038', fontSize: 12, fontWeight: '700', letterSpacing: 1, marginTop: 36, overflow: 'hidden', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 20 },
});
