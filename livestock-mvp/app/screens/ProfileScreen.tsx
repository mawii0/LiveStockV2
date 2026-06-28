import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { BottomNav } from '../components/BottomNav';
import type { ActiveTab } from '../App';

interface ProfileScreenProps {
  activeTab: ActiveTab;
  onTabPress: (tab: ActiveTab) => void;
  onBack: () => void;
}

const ACCOUNT_ITEMS = [
  { icon: 'person-outline', label: 'Personal Information' },
  { icon: 'document-text-outline', label: 'My Logs' },
];

const PREFERENCE_ITEMS = [
  { icon: 'mail-outline', label: 'Contact Us' },
  { icon: 'shield-checkmark-outline', label: 'Privacy Policy' },
  { icon: 'settings-outline', label: 'Settings' },
  { icon: 'log-out-outline', label: 'Log Out' },
];

export function ProfileScreen({ activeTab, onTabPress, onBack }: ProfileScreenProps) {
  return (
    <View style={styles.container}>
      {/* Header gradient */}
      <LinearGradient
        colors={['#00695c', '#1a9e6e', '#43a047']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <TouchableOpacity onPress={onBack} activeOpacity={0.7} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      </LinearGradient>

      {/* Avatar and name */}
      <View style={styles.profileHeader}>
        <View style={styles.avatarWrapper}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={36} color="#fff" />
          </View>
        </View>
        <Text style={styles.name}>Juan Datgotaway</Text>
      </View>

      {/* Menu */}
      <View style={styles.body}>
        <Text style={styles.sectionTitle}>Account</Text>
        <View style={styles.card}>
          {ACCOUNT_ITEMS.map((item, index) => (
            <TouchableOpacity
              key={item.label}
              activeOpacity={0.7}
              style={[
                styles.menuItem,
                index < ACCOUNT_ITEMS.length - 1 && styles.menuItemBorder,
              ]}
            >
              <View style={styles.menuLeft}>
                <Ionicons name={item.icon as any} size={18} color="#9ca3af" />
                <Text style={styles.menuLabel}>{item.label}</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#d1d5db" />
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.card}>
          {PREFERENCE_ITEMS.map((item, index) => (
            <TouchableOpacity
              key={item.label}
              activeOpacity={0.7}
              style={[
                styles.menuItem,
                index < PREFERENCE_ITEMS.length - 1 && styles.menuItemBorder,
              ]}
            >
              <View style={styles.menuLeft}>
                <Ionicons name={item.icon as any} size={18} color="#9ca3af" />
                <Text style={styles.menuLabel}>{item.label}</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#d1d5db" />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <BottomNav activeTab={activeTab} onTabPress={onTabPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    height: 160,
    paddingTop: 52,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  backButton: {
    width: 40,
    alignItems: 'flex-start',
  },
  profileHeader: {
    alignItems: 'center',
    marginTop: -40,
    marginBottom: 24,
  },
  avatarWrapper: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: '#fff',
    padding: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  avatar: {
    flex: 1,
    borderRadius: 38,
    backgroundColor: '#f59e0b',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 10,
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6b7280',
    marginBottom: 10,
    marginTop: 4,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
  },
  menuItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  menuLabel: {
    fontSize: 14,
    color: '#374151',
  },
});
