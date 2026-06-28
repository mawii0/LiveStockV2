import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

interface AuthHeaderProps {
  onBack?: () => void;
}

function PigSnoutIcon({ size = 18 }: { size?: number }) {
  return (
    <View
      style={[
        styles.iconContainer,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
    >
      <View style={[styles.eye, { left: size * 0.28, top: size * 0.3 }]} />
      <View style={[styles.eye, { right: size * 0.28, top: size * 0.3 }]} />
      <View
        style={[
          styles.snout,
          {
            width: size * 0.52,
            height: size * 0.32,
            borderRadius: size * 0.16,
            bottom: size * 0.16,
          },
        ]}
      >
        <View style={[styles.nostril, { left: size * 0.12 }]} />
        <View style={[styles.nostril, { right: size * 0.12 }]} />
      </View>
    </View>
  );
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
        <PigSnoutIcon size={18} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 52,
    paddingBottom: 44,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: 150,
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
  iconContainer: {
    backgroundColor: '#9ccc65',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 4,
    marginTop: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
  },
  eye: {
    position: 'absolute',
    width: 2.5,
    height: 2.5,
    borderRadius: 1.25,
    backgroundColor: '#fff',
  },
  snout: {
    position: 'absolute',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nostril: {
    position: 'absolute',
    width: 2.5,
    height: 2.5,
    borderRadius: 1.25,
    backgroundColor: '#9ccc65',
  },
});
