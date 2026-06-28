import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import type { ScanState } from '../App';
import type { ScanRecord } from '../shared/types';

interface ScanningScreenProps {
  scanState: ScanState;
  scan: ScanRecord | null;
  onBack: () => void;
  onScanPress: () => void;
  onScanAgain: () => void;
  onViewDetails: () => void;
}

const SCAN_DURATION_MS = 3000;
const PROGRESS_STEP_MS = 30;

export function ScanningScreen({
  scanState,
  scan,
  onBack,
  onScanPress,
  onScanAgain,
  onViewDetails,
}: ScanningScreenProps) {
  const [permission, requestPermission] = useCameraPermissions();
  const [progress, setProgress] = useState(0);

  const isScanning = scanState === 'scanning';
  const isComplete = scanState === 'complete' || scanState === 'complete-feed';
  const isNoDetect = scanState === 'no-detect' || scanState === 'no-detect-feed';

  useEffect(() => {
    if (!isScanning) {
      setProgress(0);
      return;
    }

    setProgress(0);
    const steps = SCAN_DURATION_MS / PROGRESS_STEP_MS;
    const increment = 100 / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= 100) {
        setProgress(100);
        clearInterval(interval);
      } else {
        setProgress(current);
      }
    }, PROGRESS_STEP_MS);

    return () => clearInterval(interval);
  }, [isScanning]);

  const showCamera =
    scanState === 'with-feed' ||
    scanState === 'scanning' ||
    scanState === 'complete-feed' ||
    scanState === 'no-detect-feed';

  const handleMainPress = () => {
    if (isComplete || isNoDetect) {
      onScanAgain();
    } else {
      onScanPress();
    }
  };

  const renderCamera = () => {
    if (!permission) {
      return (
        <View style={styles.centered}>
          <ActivityIndicator color="#fff" />
        </View>
      );
    }

    if (!permission.granted) {
      return (
        <View style={styles.centered}>
          <Text style={styles.messageText}>Camera access needed</Text>
          <TouchableOpacity
            onPress={requestPermission}
            style={styles.permissionButton}
          >
            <Text style={styles.permissionButtonText}>Allow Camera</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return <CameraView style={StyleSheet.absoluteFill} facing="back" mode="picture" />;
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} activeOpacity={0.7} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.title}>Live Scanning</Text>
          <Text style={styles.subtitle}>Internal device camera</Text>
        </View>
        <View style={styles.headerRight} />
      </View>

      {/* Viewfinder */}
      <View style={styles.viewfinder}>
        {showCamera && renderCamera()}

        {/* Scanning progress overlay */}
        {isScanning && (
          <View style={styles.progressOverlay}>
            <View style={styles.progressBox}>
              <Text style={styles.progressText}>
                Scanning... {Math.round(progress)}%
              </Text>
              <View style={styles.progressTrack}>
                <View
                  style={[
                    styles.progressFill,
                    { width: `${progress}%` },
                  ]}
                />
              </View>
            </View>
          </View>
        )}

        {/* Corner brackets */}
        <View style={[styles.corner, styles.cornerTL]}>
          <CornerBracket />
        </View>
        <View style={[styles.corner, styles.cornerTR]}>
          <CornerBracket rotate={90} />
        </View>
        <View style={[styles.corner, styles.cornerBL]}>
          <CornerBracket rotate={270} />
        </View>
        <View style={[styles.corner, styles.cornerBR]}>
          <CornerBracket rotate={180} />
        </View>

        {/* Result cards */}
        {isComplete && (
          <View style={styles.resultWrapper}>
            <View
              style={[
                styles.resultCard,
                showCamera && styles.resultCardFrosted,
              ]}
            >
              <View style={styles.cardRow}>
                <Ionicons
                  name="checkmark-circle"
                  size={16}
                  color="#1a9e6e"
                />
                <Text style={styles.successTitle}>Scan Complete</Text>
              </View>

              <View style={styles.cardBody}>
                <View style={styles.cardLeft}>
                  <Text style={styles.cardText}>Swine detected</Text>
                  <Text style={styles.cardHighlight}>
                    Weight: ~ {scan?.weight ?? 90} kg
                  </Text>
                  <TouchableOpacity
                    onPress={onViewDetails}
                    activeOpacity={0.7}
                    style={styles.viewDetailsRow}
                  >
                    <Text style={styles.viewDetailsText}>View Details</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.cardRight}>
                  <Text style={styles.cardText}>
                    Length: {scan?.measurements.dorsalBodyLength ?? 0} cm
                  </Text>
                  <Text style={styles.cardText}>
                    Girth: {scan?.measurements.heartGirth ?? 0} cm
                  </Text>
                  <Text style={styles.cardTime}>Just now</Text>
                </View>
              </View>
            </View>
          </View>
        )}

        {isNoDetect && (
          <View style={styles.resultWrapper}>
            <View
              style={[
                styles.resultCard,
                styles.errorCard,
                showCamera && styles.resultCardFrosted,
              ]}
            >
              <View style={styles.cardRow}>
                <Ionicons name="close-circle" size={16} color="#e05555" />
                <Text style={styles.errorTitle}>No Swine Detected</Text>
              </View>
              <Text style={[styles.cardText, styles.errorText]}>
                Please try again
              </Text>
            </View>
          </View>
        )}
      </View>

      {/* Bottom button */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={handleMainPress}
          style={styles.actionButton}
          disabled={isScanning}
        >
          <Text style={styles.buttonText}>
            {isScanning
              ? 'Scanning...'
              : isComplete
                ? 'Scan Now'
                : isNoDetect
                  ? 'Scan Again'
                  : 'Start Scanning'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function CornerBracket({ rotate = 0 }: { rotate?: number }) {
  return (
    <View
      style={[
        styles.bracket,
        { transform: [{ rotate: `${rotate}deg` }] },
      ]}
    >
      <View style={styles.bracketH} />
      <View style={styles.bracketV} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#757575',
  },
  header: {
    paddingTop: 52,
    paddingHorizontal: 16,
    paddingBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#757575',
  },
  backButton: {
    width: 40,
    alignItems: 'flex-start',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerRight: {
    width: 40,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  subtitle: {
    color: '#e0e0e0',
    fontSize: 12,
    marginTop: 2,
  },
  viewfinder: {
    flex: 1,
    backgroundColor: '#9e9e9e',
    marginHorizontal: 12,
    marginBottom: 12,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  centered: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 12,
  },
  permissionButton: {
    backgroundColor: '#616161',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 10,
  },
  permissionButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  corner: {
    position: 'absolute',
    width: 18,
    height: 18,
  },
  cornerTL: { top: 16, left: 16 },
  cornerTR: { top: 16, right: 16 },
  cornerBL: { bottom: 16, left: 16 },
  cornerBR: { bottom: 16, right: 16 },
  bracket: {
    width: 18,
    height: 18,
    position: 'relative',
  },
  bracketH: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 14,
    height: 2,
    backgroundColor: '#fff',
    borderRadius: 1,
  },
  bracketV: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 2,
    height: 14,
    backgroundColor: '#fff',
    borderRadius: 1,
  },
  progressOverlay: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  progressBox: {
    width: '72%',
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 16,
    padding: 18,
    alignItems: 'center',
  },
  progressText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 10,
  },
  progressTrack: {
    width: '100%',
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#1a9e6e',
    borderRadius: 4,
  },
  resultWrapper: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
  },
  resultCard: {
    backgroundColor: '#e0e0e0',
    borderRadius: 16,
    padding: 16,
  },
  resultCardFrosted: {
    backgroundColor: 'rgba(255,255,255,0.72)',
  },
  errorCard: {
    backgroundColor: 'rgba(224,85,85,0.28)',
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 10,
  },
  successTitle: {
    color: '#1a9e6e',
    fontSize: 14,
    fontWeight: 'bold',
  },
  errorTitle: {
    color: '#e05555',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardLeft: {
    flex: 1,
  },
  cardRight: {
    alignItems: 'flex-end',
  },
  cardText: {
    color: '#424242',
    fontSize: 13,
    marginBottom: 4,
  },
  cardHighlight: {
    color: '#111827',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  viewDetailsRow: {
    alignSelf: 'flex-start',
  },
  viewDetailsText: {
    color: '#1a9e6e',
    fontSize: 12,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  cardTime: {
    color: '#9e9e9e',
    fontSize: 11,
    marginTop: 4,
  },
  errorText: {
    color: '#e05555',
  },
  bottomBar: {
    paddingHorizontal: 16,
    paddingBottom: 28,
    paddingTop: 4,
    backgroundColor: '#757575',
  },
  actionButton: {
    backgroundColor: '#9e9e9e',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  scanningContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  scanningText: {
    color: '#e0e0e0',
    fontSize: 16,
    fontWeight: '500',
  },
});
