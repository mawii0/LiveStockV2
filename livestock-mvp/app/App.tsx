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

  const handleScanPress = () => {
    setScanState('scanning');
    setTimeout(() => {
      const outcomes: ScanState[] = ['complete-feed', 'no-detect-feed'];
      const pick = outcomes[Math.floor(Math.random() * outcomes.length)];
      setScanState(pick);
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
          onBack={goHome}
          onScanPress={handleScanPress}
          onScanAgain={handleScanAgain}
          onViewDetails={handleViewDetails}
        />
      )}
      {screen === 'weightAnalysis' && (
        <WeightAnalysisScreen onBack={goHome} />
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
