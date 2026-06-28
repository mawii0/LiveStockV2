import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface WeightAnalysisScreenProps {
  onBack: () => void;
}

const REPORT_ROWS = [
  { label: 'Dorsal Body Length Value', value: '00 cm' },
  { label: 'Heart Girth', value: '00 cm' },
  { label: 'Hip Width', value: '00 cm' },
  { label: 'Dorsal Area', value: '00 cm' },
];

export function WeightAnalysisScreen({
  onBack,
}: WeightAnalysisScreenProps) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} activeOpacity={0.7} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>
        <View style={styles.headerTitleBlock}>
          <Text style={styles.headerTitle}>Weight Analysis</Text>
          <Text style={styles.headerSubtitle}>View calculation breakdown</Text>
        </View>
      </View>

      <View style={styles.body}>
        {/* Pig illustration */}
        <View style={styles.illustrationCard}>
          <View style={styles.pig}>
            {/* Body */}
            <View style={styles.pigBody} />
            {/* Head */}
            <View style={styles.pigHead} />
            {/* Snout */}
            <View style={styles.pigSnout} />
            {/* Ears */}
            <View style={styles.pigEarLeft} />
            <View style={styles.pigEarRight} />
            {/* Legs */}
            <View style={styles.pigLeg1} />
            <View style={styles.pigLeg2} />
            <View style={styles.pigLeg3} />
            <View style={styles.pigLeg4} />
            {/* Tail */}
            <View style={styles.pigTail} />

            {/* Measurement labels */}
            <View style={[styles.measureLabel, styles.labelTop]}>
              <Text style={styles.measureValue}>87cm</Text>
            </View>
            <View style={[styles.measureLabel, styles.labelShoulder]}>
              <Text style={styles.measureValue}>67cm</Text>
            </View>
            <View style={[styles.measureLabel, styles.labelHip]}>
              <Text style={styles.measureValue}>51cm</Text>
            </View>
            <View style={[styles.measureLabel, styles.labelLength]}>
              <Text style={styles.measureValue}>47cm</Text>
            </View>
          </View>
        </View>

        {/* Full Report */}
        <Text style={styles.reportTitle}>Full Report</Text>
        <View style={styles.reportCard}>
          {REPORT_ROWS.map((row, i) => (
            <View
              key={row.label}
              style={[
                styles.reportRow,
                i < REPORT_ROWS.length - 1 && styles.reportRowBorder,
              ]}
            >
              <Text style={styles.reportLabel}>{row.label}</Text>
              <Text style={styles.reportValue}>{row.value}</Text>
            </View>
          ))}
          <View style={styles.overallRow}>
            <Text style={styles.overallLabel}>Overall Weight</Text>
            <Text style={styles.overallValue}>00 kg</Text>
          </View>
        </View>

        <TouchableOpacity activeOpacity={0.7} style={styles.logDetails}>
          <Ionicons name="document-text-outline" size={14} color="#9ca3af" />
          <Text style={styles.logDetailsText}>Log Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    paddingTop: 52,
    paddingHorizontal: 20,
    paddingBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 52,
    padding: 4,
  },
  headerTitleBlock: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#111827',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#9ca3af',
    marginTop: 2,
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 24,
  },
  illustrationCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginBottom: 16,
  },
  pig: {
    width: 220,
    height: 130,
    position: 'relative',
  },
  pigBody: {
    position: 'absolute',
    left: 50,
    top: 30,
    width: 130,
    height: 70,
    backgroundColor: '#f5b0b0',
    borderRadius: 40,
  },
  pigHead: {
    position: 'absolute',
    left: 10,
    top: 25,
    width: 55,
    height: 55,
    backgroundColor: '#f5b0b0',
    borderRadius: 28,
  },
  pigSnout: {
    position: 'absolute',
    left: -5,
    top: 42,
    width: 22,
    height: 18,
    backgroundColor: '#f9c4c4',
    borderRadius: 8,
  },
  pigEarLeft: {
    position: 'absolute',
    left: 20,
    top: 8,
    width: 14,
    height: 22,
    backgroundColor: '#f5b0b0',
    borderRadius: 4,
    transform: [{ rotate: '-15deg' }],
  },
  pigEarRight: {
    position: 'absolute',
    left: 42,
    top: 5,
    width: 14,
    height: 22,
    backgroundColor: '#f5b0b0',
    borderRadius: 4,
    transform: [{ rotate: '15deg' }],
  },
  pigLeg1: {
    position: 'absolute',
    left: 65,
    bottom: 12,
    width: 14,
    height: 28,
    backgroundColor: '#f5b0b0',
    borderRadius: 7,
  },
  pigLeg2: {
    position: 'absolute',
    left: 90,
    bottom: 10,
    width: 14,
    height: 26,
    backgroundColor: '#f5b0b0',
    borderRadius: 7,
  },
  pigLeg3: {
    position: 'absolute',
    left: 135,
    bottom: 10,
    width: 14,
    height: 26,
    backgroundColor: '#f5b0b0',
    borderRadius: 7,
  },
  pigLeg4: {
    position: 'absolute',
    left: 160,
    bottom: 12,
    width: 14,
    height: 28,
    backgroundColor: '#f5b0b0',
    borderRadius: 7,
  },
  pigTail: {
    position: 'absolute',
    right: 8,
    top: 35,
    width: 22,
    height: 22,
    borderWidth: 3,
    borderColor: '#f5b0b0',
    borderRadius: 11,
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    transform: [{ rotate: '45deg' }],
  },
  measureLabel: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  measureValue: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#111827',
  },
  labelTop: {
    top: 0,
    left: '40%',
  },
  labelShoulder: {
    top: 30,
    left: '18%',
  },
  labelHip: {
    top: 55,
    right: '18%',
  },
  labelLength: {
    bottom: 0,
    left: '30%',
  },
  reportTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 10,
  },
  reportCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  reportRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  reportRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  reportLabel: {
    fontSize: 13,
    color: '#9ca3af',
  },
  reportValue: {
    fontSize: 13,
    fontWeight: '600',
    color: '#111827',
  },
  overallRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#f9f9f9',
    marginHorizontal: -16,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  overallLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111827',
  },
  overallValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a9e6e',
  },
  logDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 4,
  },
  logDetailsText: {
    fontSize: 12,
    color: '#9ca3af',
  },
});
