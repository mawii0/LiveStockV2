import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

interface AuthHeaderProps {
  onBack?: () => void;
}

export function AuthHeader({ onBack }: AuthHeaderProps) {
  return (
    <LinearGradient
      colors={['#00695c', '#1b8a6b', '#7cb342', '#aed581']}
      locations={[0, 0.35, 0.7, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0.5 }}
      style={styles.container}
    >
      {/* Soft glow blob */}
      <View style={styles.glow} />

      {onBack && (
        <TouchableOpacity
          onPress={onBack}
          activeOpacity={0.7}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      )}

      <View style={styles.logoRow}>
        <Text style={styles.logoText}>LiveStock</Text>
        <Image
          source={require('../assets/livestock_logo.png')}
          style={styles.logoIcon}
          resizeMode="contain"
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 52,
    paddingBottom: 14,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: 104,
    position: 'relative',
    overflow: 'hidden',
  },
  glow: {
    position: 'absolute',
    top: -30,
    right: -40,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#ccff90',
    opacity: 0.35,
  },
  backButton: {
    position: 'absolute',
    left: 16,
    top: 52,
    padding: 4,
    zIndex: 10,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  logoText: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0,0.2)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 5,
  },
  logoIcon: {
    width: 22,
    height: 22,
    marginLeft: 3,
    marginTop: -2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
});
