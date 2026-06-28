import {
  View,
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

      <Image
        source={require('../assets/login_screen_logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 52,
    paddingBottom: 18,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: 110,
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
  logo: {
    width: 130,
    height: 38,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
});
