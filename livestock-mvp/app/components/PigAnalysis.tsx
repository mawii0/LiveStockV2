import { View, Text, Image, StyleSheet } from 'react-native';
import type { MorphometricMeasurements } from '../shared/types';

interface PigAnalysisProps {
  measurements: MorphometricMeasurements;
}

export function PigAnalysis({ measurements }: PigAnalysisProps) {
  const points = [
    {
      key: 'dorsalArea',
      label: `${Math.round(measurements.dorsalArea)}cm`,
      top: '2%',
      left: '44%',
    },
    {
      key: 'dorsalBodyLength',
      label: `${Math.round(measurements.dorsalBodyLength)}cm`,
      top: '30%',
      left: '4%',
    },
    {
      key: 'heartGirth',
      label: `${Math.round(measurements.heartGirth)}cm`,
      top: '24%',
      left: '34%',
    },
    {
      key: 'hipWidth',
      label: `${Math.round(measurements.hipWidth)}cm`,
      top: '28%',
      right: '8%',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Top dashed bounding box */}
      <View style={styles.boxTop} />
      <View style={styles.boxLeft} />
      <View style={styles.boxRight} />

      {/* Horizontal dashed guide line */}
      <View style={[styles.guideLine, styles.guideLineMiddle]} />

      {/* Vertical dashed guide line */}
      <View style={[styles.guideLineVertical, styles.guideLineCenter]} />

      {/* Pig silhouette */}
      <Image
        source={require('../assets/pig-model.png')}
        style={styles.pig}
        resizeMode="contain"
      />

      {/* Measurement point bubbles */}
      {points.map((point) => (
        <View
          key={point.key}
          style={[
            styles.bubbleWrapper,
            {
              top: point.top as any,
              left: point.left as any,
              right: point.right as any,
            },
          ]}
        >
          <View style={styles.bubble}>
            <Text style={styles.bubbleText}>{point.label}</Text>
          </View>
          <View style={styles.pointer} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 280,
    height: 180,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pig: {
    width: 240,
    height: 130,
    opacity: 0.95,
  },
  boxTop: {
    position: 'absolute',
    top: 12,
    left: 12,
    right: 12,
    height: 0,
    borderTopWidth: 1.5,
    borderTopColor: 'rgba(160,160,160,0.35)',
    borderStyle: 'dashed',
    borderRadius: 1,
  },
  boxLeft: {
    position: 'absolute',
    top: 12,
    left: 12,
    bottom: '35%',
    width: 0,
    borderLeftWidth: 1.5,
    borderLeftColor: 'rgba(160,160,160,0.35)',
    borderStyle: 'dashed',
    borderRadius: 1,
  },
  boxRight: {
    position: 'absolute',
    top: 12,
    right: 12,
    bottom: '35%',
    width: 0,
    borderLeftWidth: 1.5,
    borderLeftColor: 'rgba(160,160,160,0.35)',
    borderStyle: 'dashed',
    borderRadius: 1,
  },
  guideLine: {
    position: 'absolute',
    left: 12,
    right: 12,
    height: 0,
    borderTopWidth: 1.5,
    borderTopColor: 'rgba(160,160,160,0.3)',
    borderStyle: 'dashed',
    borderRadius: 1,
  },
  guideLineMiddle: {
    top: '50%',
  },
  guideLineVertical: {
    position: 'absolute',
    top: 12,
    bottom: '20%',
    width: 0,
    borderLeftWidth: 1.5,
    borderLeftColor: 'rgba(160,160,160,0.3)',
    borderStyle: 'dashed',
    borderRadius: 1,
  },
  guideLineCenter: {
    left: '50%',
  },
  bubbleWrapper: {
    position: 'absolute',
    alignItems: 'center',
  },
  bubble: {
    backgroundColor: '#e0e0e0',
    borderRadius: 18,
    paddingHorizontal: 10,
    paddingVertical: 6,
    minWidth: 46,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 2,
  },
  bubbleText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#666',
  },
  pointer: {
    width: 0,
    height: 0,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderTopWidth: 6,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#e0e0e0',
    marginTop: -1,
  },
});
