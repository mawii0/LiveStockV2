import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import type { ActiveTab } from '../App';

interface BottomNavProps {
  activeTab: ActiveTab;
  onTabPress: (tab: ActiveTab) => void;
}

export function BottomNav({ activeTab, onTabPress }: BottomNavProps) {
  return (
    <View style={styles.container}>
      {/* Home */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => onTabPress('home')}
        style={styles.tab}
      >
        <Ionicons
          name={activeTab === 'home' ? 'home' : 'home-outline'}
          size={22}
          color={activeTab === 'home' ? '#1a9e6e' : '#9ca3af'}
        />
        <Text
          style={[
            styles.label,
            activeTab === 'home' && styles.labelActive,
          ]}
        >
          Home
        </Text>
      </TouchableOpacity>

      {/* Scan — raised circular button */}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => onTabPress('scan')}
        style={styles.scanTab}
      >
        <LinearGradient
          colors={['#6ee07b', '#1a9e6e']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.scanButton}
        >
          <Ionicons name="scan-outline" size={26} color="#fff" />
        </LinearGradient>
        <Text
          style={[
            styles.label,
            styles.scanLabel,
            activeTab === 'scan' && styles.labelActive,
          ]}
        >
          Scan
        </Text>
      </TouchableOpacity>

      {/* Profile */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => onTabPress('profile')}
        style={styles.tab}
      >
        <Ionicons
          name={activeTab === 'profile' ? 'person' : 'person-outline'}
          size={22}
          color={activeTab === 'profile' ? '#1a9e6e' : '#9ca3af'}
        />
        <Text
          style={[
            styles.label,
            activeTab === 'profile' && styles.labelActive,
          ]}
        >
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 84,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 64,
    paddingTop: 4,
  },
  label: {
    fontSize: 10,
    color: '#9ca3af',
    fontWeight: '600',
    marginTop: 3,
  },
  labelActive: {
    color: '#1a9e6e',
  },
  scanTab: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: -20,
  },
  scanButton: {
    width: 58,
    height: 58,
    borderRadius: 29,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 10,
    elevation: 6,
  },
  scanLabel: {
    marginTop: 6,
  },
});
