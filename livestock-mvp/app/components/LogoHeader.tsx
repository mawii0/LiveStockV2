import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface LogoHeaderProps {
  onBack?: () => void;
  title?: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

export function LogoHeader({
  onBack,
  title,
  subtitle,
  light = true,
  centered = true,
}: LogoHeaderProps) {
  return (
    <View style={[styles.container, centered && styles.containerCentered]}>
      {onBack && (
        <TouchableOpacity
          onPress={onBack}
          activeOpacity={0.7}
          style={styles.backButton}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color={light ? '#fff' : '#111827'}
          />
        </TouchableOpacity>
      )}

      <View style={styles.logoBlock}>
        <Image
          source={require('../assets/livestock_logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        {title && (
          <View style={styles.textBlock}>
            <Text
              style={[
                styles.title,
                { color: light ? '#fff' : '#111827' },
              ]}
            >
              {title}
            </Text>
            {subtitle && (
              <Text
                style={[
                  styles.subtitle,
                  { color: light ? 'rgba(255,255,255,0.8)' : '#9ca3af' },
                ]}
              >
                {subtitle}
              </Text>
            )}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 52,
    paddingHorizontal: 20,
    paddingBottom: 12,
    minHeight: 96,
  },
  containerCentered: {
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 16,
    top: 52,
    padding: 4,
    zIndex: 10,
  },
  logoBlock: {
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 36,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  textBlock: {
    alignItems: 'center',
    marginTop: 6,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
    marginTop: 2,
  },
});
