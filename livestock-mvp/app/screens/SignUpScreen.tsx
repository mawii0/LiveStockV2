import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { LogoHeader } from '../components/LogoHeader';

interface SignUpScreenProps {
  onSignUp: () => void;
  onGoLogin: () => void;
}

export function SignUpScreen({ onSignUp, onGoLogin }: SignUpScreenProps) {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <LinearGradient
        colors={['#0d7a6a', '#1b8a6b', '#4caf50']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <LogoHeader onBack={onGoLogin} light />
      </LinearGradient>

      <ScrollView
        style={styles.flex}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Form card */}
        <View style={styles.card}>
          <Text style={styles.title}>Sign Up</Text>

          <View style={styles.fields}>
            <View style={styles.inputWrapper}>
              <Ionicons
                name="person-outline"
                size={18}
                color="#7cb342"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Full Name"
                placeholderTextColor="#9ccc65"
              />
            </View>
            <View style={styles.inputWrapper}>
              <Ionicons
                name="mail-outline"
                size={18}
                color="#7cb342"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#9ccc65"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            <View style={styles.inputWrapper}>
              <Ionicons
                name="lock-closed-outline"
                size={18}
                color="#7cb342"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#9ccc65"
                secureTextEntry
              />
            </View>
            <View style={styles.inputWrapper}>
              <Ionicons
                name="lock-closed-outline"
                size={18}
                color="#7cb342"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Confirm password"
                placeholderTextColor="#9ccc65"
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
      </ScrollView>
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
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    paddingBottom: 30,
  },
  card: {
    flex: 1,
    backgroundColor: '#f1f8e9',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    marginTop: -28,
    paddingHorizontal: 28,
    paddingTop: 28,
    paddingBottom: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#558b2f',
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
    height: 50,
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
    paddingVertical: 15,
    borderRadius: 28,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
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
    fontWeight: '700',
    color: '#2e7d32',
    textDecorationLine: 'underline',
  },
});
