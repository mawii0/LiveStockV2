import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { BottomNav } from '../components/BottomNav';
import type { ActiveTab } from '../App';

interface HomeScreenProps {
  activeTab: ActiveTab;
  onTabPress: (tab: ActiveTab) => void;
  onCardPress: () => void;
}

export function HomeScreen({
  activeTab,
  onTabPress,
  onCardPress,
}: HomeScreenProps) {
  return (
    <View style={styles.container}>
      {/* Header gradient banner */}
      <LinearGradient
        colors={['#00695c', '#1a9e6e', '#43a047']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <View style={styles.headerRow}>
          <View style={styles.avatar}>
            <Image
              source={require('../assets/livestock_logo.png')}
              style={styles.avatarImage}
              resizeMode="contain"
            />
          </View>
          <View>
            <Text style={styles.helloText}>Hello, Juan!</Text>
            <Text style={styles.dateText}>Sunday, 12 October 2025</Text>
          </View>
        </View>
      </LinearGradient>

      {/* Body */}
      <View style={styles.body}>
        <Text style={styles.sectionTitle}>Choose an animal</Text>
        <Text style={styles.sectionSubtitle}>
          Select the type of animal you want to scan
        </Text>

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={onCardPress}
          style={styles.card}
        >
          <Image
            source={require('../assets/pig_icon.png')}
            style={styles.cardIcon}
            resizeMode="contain"
          />
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>Pig / Baboy</Text>
            <Text style={styles.cardSubtitle}>Swine Scanning</Text>
          </View>
          <View style={styles.arrowCircle}>
            <Ionicons name="arrow-forward" size={14} color="#1a9e6e" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={onCardPress}
          style={styles.card}
        >
          <Image
            source={require('../assets/cow_icon.png')}
            style={styles.cardIcon}
            resizeMode="contain"
          />
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>Cow / Baka</Text>
            <Text style={styles.cardSubtitle}>Cattle Scanning</Text>
          </View>
          <View style={styles.arrowCircle}>
            <Ionicons name="arrow-forward" size={14} color="#1a9e6e" />
          </View>
        </TouchableOpacity>
      </View>

      <BottomNav activeTab={activeTab} onTabPress={onTabPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 56,
    paddingBottom: 40,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  avatarImage: {
    width: 36,
    height: 36,
  },
  helloText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateText: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 12,
    marginTop: 2,
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 100,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a9e6e',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 13,
    color: '#9ca3af',
    marginBottom: 24,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  cardIcon: {
    width: 64,
    height: 64,
  },
  cardText: {
    flex: 1,
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#111827',
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#9ca3af',
    marginTop: 2,
  },
  arrowCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#e8f5e9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
