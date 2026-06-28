import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LogoHeader } from '../components/LogoHeader';
import { PigAnalysis } from '../components/PigAnalysis';
import type { ScanRecord } from '../shared/types';

interface WeightAnalysisScreenProps {
  onBack: () => void;
  scan: ScanRecord | null;
}

const DEFAULT_SCAN: ScanRecord = {
  mode: 'offline',
  flagged: false,
  weight: 90,
  measurements: {
    dorsalBodyLength: 87,
    heartGirth: 67,
    hipWidth: 51,
    dorsalArea: 47,
  },
  confidence: 'medium',
  timestamp: new Date().toISOString(),
};

export function WeightAnalysisScreen({
  onBack,
  scan,
}: WeightAnalysisScreenProps) {
  const data = scan ?? DEFAULT_SCAN;

  const reportRows = [
    { label: 'Dorsal Body Length Value', value: `${data.measurements.dorsalBodyLength} cm` },
    { label: 'Heart Girth', value: `${data.measurements.heartGirth} cm` },
    { label: 'Hip Width', value: `${data.measurements.hipWidth} cm` },
    { label: 'Dorsal Area', value: `${data.measurements.dorsalArea} cm` },
  ];

  return (
    <View style={styles.container}>
      <LogoHeader
        onBack={onBack}
        title="Weight Analysis"
        subtitle="View calculation breakdown"
        light={false}
      />

      <ScrollView
        style={styles.body}
        contentContainerStyle={styles.bodyContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Pig illustration */}
        <View style={styles.illustrationCard}>
          <PigAnalysis measurements={data.measurements} />
        </View>

        {/* Full Report */}
        <Text style={styles.reportTitle}>Full Report</Text>
        <View style={styles.reportCard}>
          {reportRows.map((row, i) => (
            <View
              key={row.label}
              style={[
                styles.reportRow,
                i < reportRows.length - 1 && styles.reportRowBorder,
              ]}
            >
              <Text style={styles.reportLabel}>{row.label}</Text>
              <Text style={styles.reportValue}>{row.value}</Text>
            </View>
          ))}
          <View style={styles.overallRow}>
            <Text style={styles.overallLabel}>Overall Weight</Text>
            <Text style={styles.overallValue}>{data.weight} kg</Text>
          </View>
        </View>

        <TouchableOpacity activeOpacity={0.7} style={styles.logDetails}>
          <Ionicons name="document-text-outline" size={14} color="#9ca3af" />
          <Text style={styles.logDetailsText}>Log Details</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  body: {
    flex: 1,
  },
  bodyContent: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 32,
  },
  illustrationCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  reportTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 10,
  },
  reportCard: {
    backgroundColor: '#e8e8e8',
    borderRadius: 16,
    paddingHorizontal: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  reportRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 13,
  },
  reportRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.06)',
  },
  reportLabel: {
    fontSize: 13,
    color: '#777',
  },
  reportValue: {
    fontSize: 13,
    fontWeight: '600',
    color: '#444',
  },
  overallRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    marginHorizontal: -16,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.08)',
  },
  overallLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#444',
  },
  overallValue: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#111827',
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
