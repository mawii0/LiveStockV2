import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface WelcomeScreenProps {
  onGetStarted: () => void;
  onSignIn: () => void;
}

export function WelcomeScreen({ onGetStarted, onSignIn }: WelcomeScreenProps) {
  return (
    <View style={styles.container}>
      {/* Background gradient layers */}
      <View style={styles.gradientBase} />
      <View style={styles.blob} />

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
    backgroundColor: '#00695c',
  },
  gradientBase: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#00695c',
  },
  blob: {
    position: 'absolute',
    top: '8%',
    right: '-25%',
    width: 320,
    height: 320,
    borderRadius: 160,
    backgroundColor: '#9ccc65',
    opacity: 0.55,
    transform: [{ scale: 1.2 }],
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
    fontSize: 38,
    fontWeight: 'bold',
    color: '#fff',
    lineHeight: 46,
    marginBottom: 48,
  },
  footer: {
    width: '100%',
  },
  button: {
    backgroundColor: '#a5d6a7',
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#1b5e20',
    fontSize: 16,
    fontWeight: '600',
  },
  signInRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subText: {
    color: 'rgba(255,255,255,0.75)',
    fontSize: 12,
  },
  signInText: {
    color: '#b2ff59',
    fontSize: 12,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});
