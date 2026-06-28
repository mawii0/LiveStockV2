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
import { AuthHeader } from '../components/AuthHeader';

interface LoginScreenProps {
  onLogin: () => void;
  onGoSignUp: () => void;
}

export function LoginScreen({ onLogin, onGoSignUp }: LoginScreenProps) {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <AuthHeader onBack={onGoSignUp} />

      <ScrollView
        style={styles.flex}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.card}>
          <Text style={styles.title}>Sign In</Text>

          <View style={styles.fields}>
            <View style={styles.inputWrapper}>
              <Ionicons
                name="mail-outline"
                size={18}
                color="#8bc34a"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#9e9d24"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            <View style={styles.inputWrapper}>
              <Ionicons
                name="lock-closed-outline"
                size={18}
                color="#8bc34a"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#9e9d24"
                secureTextEntry
              />
            </View>
            <TouchableOpacity activeOpacity={0.7} style={styles.forgotRow}>
              <Text style={styles.forgotText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={onLogin}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          <View style={styles.dividerRow}>
            <View style={styles.divider} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.divider} />
          </View>

          <View style={styles.socialRow}>
            <TouchableOpacity activeOpacity={0.7}>
              <Ionicons name="logo-facebook" size={24} color="#8d8d8d" />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
              <Ionicons name="logo-apple" size={24} color="#8d8d8d" />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
              <Ionicons name="logo-google" size={24} color="#8d8d8d" />
            </TouchableOpacity>
          </View>

          <View style={styles.footerRow}>
            <Text style={styles.footerText}>Don&apos;t have an account? </Text>
            <TouchableOpacity onPress={onGoSignUp} activeOpacity={0.7}>
              <Text style={styles.footerLink}>Sign Up</Text>
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
  card: {
    flex: 1,
    backgroundColor: '#f1f8e9',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -32,
    paddingHorizontal: 28,
    paddingTop: 42,
    paddingBottom: 28,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#558b2f',
    marginBottom: 24,
  },
  fields: {
    gap: 14,
    marginBottom: 24,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dcedc8',
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 52,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#33691e',
  },
  forgotRow: {
    alignSelf: 'flex-end',
  },
  forgotText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#558b2f',
  },
  button: {
    backgroundColor: '#8bc34a',
    paddingVertical: 16,
    borderRadius: 28,
    alignItems: 'center',
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    color: '#1b5e20',
    fontSize: 16,
    fontWeight: '700',
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#c5e1a5',
  },
  orText: {
    marginHorizontal: 12,
    fontSize: 12,
    color: '#9e9d24',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 32,
    marginBottom: 20,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#8d8d8d',
  },
  footerLink: {
    fontSize: 12,
    fontWeight: '700',
    color: '#00695c',
    textDecorationLine: 'underline',
  },
});
