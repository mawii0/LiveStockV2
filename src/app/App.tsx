import { useState, useEffect } from "react";
import { SplashScreen } from "./components/SplashScreen";
import { HomeScreen } from "./components/HomeScreen";
import { ConnectScreen } from "./components/ConnectScreen";
import { ScanningScreen } from "./components/ScanningScreen";
import { LoginScreen } from "./components/LoginScreen";
import { SignUpScreen } from "./components/SignUpScreen";
import { ProfileScreen } from "./components/ProfileScreen";

export type Screen = "splash" | "login" | "signup" | "home" | "connect" | "scanning" | "profile";
export type ConnectState = "ready" | "pairing" | "connected";
export type ScanState = "idle" | "with-feed" | "complete" | "complete-feed" | "no-detect" | "no-detect-feed" | "no-device";
export type ActiveTab = "home" | "scan" | "connect";

export default function App() {
  const [screen, setScreen] = useState<Screen>("splash");
  const [connectState, setConnectState] = useState<ConnectState>("ready");
  const [scanState, setScanState] = useState<ScanState>("idle");
  const [activeTab, setActiveTab] = useState<ActiveTab>("home");
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (screen === "splash") {
      const t = setTimeout(() => setScreen("login"), 2200);
      return () => clearTimeout(t);
    }
  }, [screen]);

  const goHome = () => {
    setScreen("home");
    setActiveTab("home");
  };

  const goConnect = (state: ConnectState = "ready") => {
    setScreen("connect");
    setConnectState(state);
    setActiveTab("connect");
  };

  const goScanning = (state: ScanState = "idle") => {
    setScreen("scanning");
    setScanState(state);
  };

  const handleTabPress = (tab: ActiveTab) => {
    setActiveTab(tab);
    if (tab === "home") goHome();
    else if (tab === "connect") goConnect(isConnected ? "connected" : "ready");
    else if (tab === "scan") {
      if (isConnected) goScanning("with-feed");
      else goConnect("ready");
    }
  };

  const handleCardPress = () => {
    if (isConnected) goScanning("with-feed");
    else goConnect("ready");
  };

  const handleConnectDevice = () => {
    setConnectState("pairing");
    setTimeout(() => {
      setConnectState("connected");
      setIsConnected(true);
    }, 2000);
  };

  const handleStartScanning = () => {
    goScanning("with-feed");
  };

  const handleScanPress = () => {
    const outcomes: ScanState[] = ["complete-feed", "no-detect-feed"];
    const pick = outcomes[Math.floor(Math.random() * outcomes.length)];
    setScanState(pick);
  };

  const handleScanAgain = () => {
    setScanState("with-feed");
  };

  return (
    <div className="size-full flex items-center justify-center bg-gray-100 min-h-screen">
      <div
        className="relative overflow-hidden bg-white"
        style={{ width: 375, height: 812, borderRadius: 40, boxShadow: "0 32px 80px rgba(0,0,0,0.25)" }}
      >
        {screen === "splash" && <SplashScreen />}
        {screen === "login" && (
          <LoginScreen
            onLogin={() => setScreen("home")}
            onGoSignUp={() => setScreen("signup")}
          />
        )}
        {screen === "signup" && (
          <SignUpScreen
            onSignUp={() => setScreen("home")}
            onGoLogin={() => setScreen("login")}
          />
        )}
        {screen === "home" && (
          <HomeScreen
            activeTab={activeTab}
            onTabPress={handleTabPress}
            onCardPress={handleCardPress}
            onProfilePress={() => setScreen("profile")}
          />
        )}
        {screen === "connect" && (
          <ConnectScreen
            connectState={connectState}
            activeTab={activeTab}
            onTabPress={handleTabPress}
            onBack={goHome}
            onConnectDevice={handleConnectDevice}
            onStartScanning={handleStartScanning}
          />
        )}
        {screen === "scanning" && (
          <ScanningScreen
            scanState={scanState}
            onBack={goHome}
            onScanPress={handleScanPress}
            onScanAgain={handleScanAgain}
          />
        )}
        {screen === "profile" && (
          <ProfileScreen onBack={goHome} />
        )}
      </div>
    </div>
  );
}
