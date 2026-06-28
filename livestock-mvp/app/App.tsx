import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { SplashScreen } from './screens/SplashScreen';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { LoginScreen } from './screens/LoginScreen';
import { SignUpScreen } from './screens/SignUpScreen';
import { HomeScreen } from './screens/HomeScreen';

import { ScanningScreen } from './screens/ScanningScreen';
import { WeightAnalysisScreen } from './screens/WeightAnalysisScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import type { ScanRecord } from './shared/types';

export type Screen =
  | 'splash'
  | 'welcome'
  | 'login'
  | 'signup'
  | 'home'
  | 'scanning'
  | 'weightAnalysis'
  | 'profile';

export type ScanState =
  | 'idle'
  | 'with-feed'
  | 'scanning'
  | 'complete'
  | 'complete-feed'
  | 'no-detect'
  | 'no-detect-feed'
  | 'no-device';

export type ActiveTab = 'home' | 'scan' | 'profile';

const DARK_SCREENS: Screen[] = ['welcome', 'scanning'];

export default function App() {
  const [screen, setScreen] = useState<Screen>('splash');
  const [scanState, setScanState] = useState<ScanState>('idle');
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [lastScan, setLastScan] = useState<ScanRecord | null>(null);

  useEffect(() => {
    if (screen === 'splash') {
      const t = setTimeout(() => setScreen('welcome'), 2200);
      return () => clearTimeout(t);
    }
  }, [screen]);

  const goHome = () => {
    setScreen('home');
    setActiveTab('home');
  };

  const goScanning = (state: ScanState = 'idle') => {
    setScreen('scanning');
    setScanState(state);
  };

  const handleTabPress = (tab: ActiveTab) => {
    setActiveTab(tab);
    if (tab === 'home') goHome();
    else if (tab === 'profile') setScreen('profile');
    else if (tab === 'scan') {
      goScanning('with-feed');
    }
  };

  const handleCardPress = () => {
    goScanning('with-feed');
  };

  const handleScanComplete = (record: ScanRecord) => {
    setLastScan(record);
    setScanState(record.flagged ? 'no-detect-feed' : 'complete-feed');
  };

  const handleScanPress = () => {
    setScanState('scanning');
    setTimeout(() => {
      const flagged = Math.random() < 0.15;
      const record: ScanRecord = {
        mode: 'offline',
        flagged,
        weight: flagged ? 0 : 88 + Math.floor(Math.random() * 12),
        measurements: {
          dorsalBodyLength: 82 + Math.floor(Math.random() * 10),
          heartGirth: 64 + Math.floor(Math.random() * 8),
          hipWidth: 48 + Math.floor(Math.random() * 8),
          dorsalArea: 44 + Math.floor(Math.random() * 8),
        },
        confidence: 'medium',
        timestamp: new Date().toISOString(),
      };
      handleScanComplete(record);
    }, 1500);
  };

  const handleScanAgain = () => {
    setScanState('with-feed');
  };

  const handleViewDetails = () => {
    setScreen('weightAnalysis');
  };

  return (
    <View style={styles.container}>
      {screen === 'splash' && <SplashScreen />}
      {screen === 'welcome' && (
        <WelcomeScreen
          onGetStarted={() => setScreen('signup')}
          onSignIn={() => setScreen('login')}
        />
      )}
      {screen === 'login' && (
        <LoginScreen
          onLogin={goHome}
          onGoSignUp={() => setScreen('signup')}
        />
      )}
      {screen === 'signup' && (
        <SignUpScreen
          onSignUp={goHome}
          onGoLogin={() => setScreen('login')}
        />
      )}
      {screen === 'home' && (
        <HomeScreen
          activeTab={activeTab}
          onTabPress={handleTabPress}
          onCardPress={handleCardPress}
        />
      )}
      {screen === 'scanning' && (
        <ScanningScreen
          scanState={scanState}
          scan={lastScan}
          onBack={goHome}
          onScanPress={handleScanPress}
          onScanAgain={handleScanAgain}
          onViewDetails={handleViewDetails}
        />
      )}
      {screen === 'weightAnalysis' && (
        <WeightAnalysisScreen onBack={goHome} scan={lastScan} />
      )}
      {screen === 'profile' && (
        <ProfileScreen
          activeTab={activeTab}
          onTabPress={handleTabPress}
          onBack={goHome}
        />
      )}
      <StatusBar style={DARK_SCREENS.includes(screen) ? 'light' : 'dark'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
