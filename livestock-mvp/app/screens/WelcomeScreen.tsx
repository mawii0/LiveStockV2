import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface WelcomeScreenProps {
  onGetStarted: () => void;
  onSignIn: () => void;
}

export function WelcomeScreen({ onGetStarted, onSignIn }: WelcomeScreenProps) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0d7a6a', '#1b8a6b', '#4caf50']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      {/* Soft glow/blob behind the pig */}
      <View style={styles.glow} />

      <View style={styles.content}>
        <View style={styles.spacer} />

        <Text style={styles.heading}>
          Pocket-sized{'\n'}precision.
        </Text>

        <View style={styles.footer}>
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={onGetStarted}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>

          <View style={styles.signInRow}>
            <Text style={styles.subText}>Already have an account? </Text>
            <TouchableOpacity onPress={onSignIn} activeOpacity={0.7}>
              <Text style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  glow: {
    position: 'absolute',
    top: '18%',
    right: '-10%',
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: '#aeea00',
    opacity: 0.35,
    transform: [{ scale: 1.1 }],
  },
  content: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 60,
    paddingBottom: 44,
  },
  spacer: {
    flex: 1,
  },
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    lineHeight: 44,
    marginBottom: 48,
    textShadowColor: 'rgba(0,0,0,0.15)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  footer: {
    width: '100%',
  },
  button: {
    backgroundColor: '#c8e6c9',
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: '#1b5e20',
    fontSize: 16,
    fontWeight: '700',
  },
  signInRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 12,
  },
  signInText: {
    color: '#b2ff59',
    fontSize: 12,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});
