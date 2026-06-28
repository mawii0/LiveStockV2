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
      top: '8%',
      left: '46%',
    },
    {
      key: 'heartGirth',
      label: `${Math.round(measurements.heartGirth)}cm`,
      top: '32%',
      left: '34%',
    },
    {
      key: 'hipWidth',
      label: `${Math.round(measurements.hipWidth)}cm`,
      top: '30%',
      right: '14%',
    },
    {
      key: 'dorsalBodyLength',
      label: `${Math.round(measurements.dorsalBodyLength)}cm`,
      top: '42%',
      left: '4%',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Dashed bounding box */}
      <View style={styles.boundingBox} />

      {/* Horizontal dashed guide lines */}
      <View style={[styles.guideLine, styles.guideLineTop]} />
      <View style={[styles.guideLine, styles.guideLineMiddle]} />
      <View style={[styles.guideLine, styles.guideLineBottom]} />

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
    width: 220,
    height: 130,
    opacity: 0.9,
  },
  boundingBox: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    bottom: 10,
    borderWidth: 1.5,
    borderColor: 'rgba(120,120,120,0.35)',
    borderStyle: 'dashed',
    borderRadius: 2,
  },
  guideLine: {
    position: 'absolute',
    left: 10,
    right: 10,
    height: 0,
    borderTopWidth: 1.5,
    borderTopColor: 'rgba(120,120,120,0.3)',
    borderStyle: 'dashed',
    borderRadius: 1,
  },
  guideLineTop: {
    top: '28%',
  },
  guideLineMiddle: {
    top: '50%',
  },
  guideLineBottom: {
    top: '72%',
  },
  guideLineVertical: {
    position: 'absolute',
    top: 10,
    bottom: 10,
    width: 0,
    borderLeftWidth: 1.5,
    borderLeftColor: 'rgba(120,120,120,0.3)',
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
    backgroundColor: '#e8e8e8',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 5,
    minWidth: 44,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  bubbleText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#555',
  },
  pointer: {
    width: 0,
    height: 0,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderTopWidth: 6,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#e8e8e8',
    marginTop: -1,
  },
});
