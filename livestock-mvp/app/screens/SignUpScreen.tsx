import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

interface SignUpScreenProps {
  onSignUp: () => void;
  onGoLogin: () => void;
}

function PigIconSmall({ size = 18 }: { size?: number }) {
  return (
    <View
      style={[
        styles.pigIconContainer,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
    >
      <View style={[styles.pigEye, { left: size * 0.28, top: size * 0.22 }]} />
      <View style={[styles.pigEye, { right: size * 0.28, top: size * 0.22 }]} />
      <View
        style={[
          styles.pigSnout,
          {
            width: size * 0.45,
            height: size * 0.3,
            borderRadius: size * 0.15,
            bottom: size * 0.18,
          },
        ]}
      >
        <View style={[styles.pigNostril, { left: size * 0.1 }]} />
        <View style={[styles.pigNostril, { right: size * 0.1 }]} />
      </View>
    </View>
  );
}

export function SignUpScreen({ onSignUp, onGoLogin }: SignUpScreenProps) {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.flex}>
        {/* Header gradient */}
        <LinearGradient
          colors={['#00695c', '#2e7d32']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.header}
        >
          <TouchableOpacity
            onPress={onGoLogin}
            activeOpacity={0.7}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>

          <View style={styles.logoRow}>
            <Text style={styles.logoText}>LiveStock</Text>
            <PigIconSmall size={16} />
          </View>
        </LinearGradient>

        {/* Form card */}
        <View style={styles.card}>
          <Text style={styles.title}>Sign Up</Text>

          <View style={styles.fields}>
            <View style={styles.inputWrapper}>
              <Ionicons
                name="person-outline"
                size={18}
                color="#81c784"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Full Name"
                placeholderTextColor="#81c784"
              />
            </View>
            <View style={styles.inputWrapper}>
              <Ionicons
                name="mail-outline"
                size={18}
                color="#81c784"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#81c784"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            <View style={styles.inputWrapper}>
              <Ionicons
                name="lock-closed-outline"
                size={18}
                color="#81c784"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#81c784"
                secureTextEntry
              />
            </View>
            <View style={styles.inputWrapper}>
              <Ionicons
                name="lock-closed-outline"
                size={18}
                color="#81c784"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Confirm password"
                placeholderTextColor="#81c784"
                secureTextEntry
              />
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={onSignUp}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.dividerRow}>
            <View style={styles.divider} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.divider} />
          </View>

          <View style={styles.socialRow}>
            <TouchableOpacity activeOpacity={0.7} style={styles.socialButton}>
              <Ionicons name="logo-facebook" size={22} color="#1877F2" />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.socialButton}>
              <Ionicons name="logo-apple" size={22} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.socialButton}>
              <Ionicons name="logo-google" size={22} color="#DB4437" />
            </TouchableOpacity>
          </View>

          <View style={styles.footerRow}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <TouchableOpacity onPress={onGoLogin} activeOpacity={0.7}>
              <Text style={styles.footerLink}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f8e9',
  },
  flex: {
    flex: 1,
  },
  header: {
    height: 140,
    paddingTop: 52,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 52,
    padding: 4,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  logoText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  card: {
    flex: 1,
    backgroundColor: '#f1f8e9',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    marginTop: -28,
    paddingHorizontal: 28,
    paddingTop: 28,
    paddingBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 18,
  },
  fields: {
    gap: 12,
    marginBottom: 18,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dcedc8',
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 48,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#33691e',
  },
  button: {
    backgroundColor: '#7cb342',
    paddingVertical: 14,
    borderRadius: 28,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#c5e1a5',
  },
  orText: {
    marginHorizontal: 12,
    fontSize: 12,
    color: '#81c784',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 18,
  },
  socialButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#81c784',
  },
  footerLink: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2e7d32',
    textDecorationLine: 'underline',
  },
  pigIconContainer: {
    backgroundColor: '#9ccc65',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 3,
    marginTop: 2,
  },
  pigEye: {
    position: 'absolute',
    width: 2,
    height: 2,
    borderRadius: 1,
    backgroundColor: '#fff',
  },
  pigSnout: {
    position: 'absolute',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pigNostril: {
    position: 'absolute',
    width: 2,
    height: 2,
    borderRadius: 1,
    backgroundColor: '#9ccc65',
  },
});
