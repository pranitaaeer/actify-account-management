import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Upload, Download, FileText } from 'lucide-react-native';
import Animated, { 
  FadeInDown, 
  FadeInUp, 
  useSharedValue, 
  useAnimatedStyle, 
  withRepeat, 
  withTiming, 
  withSequence 
} from 'react-native-reanimated';
import { useEffect } from 'react';

export default function AccountUpload() {
  // Pulse Animation for Upload Box
  const scale = useSharedValue(1);

  useEffect(() => {
    // Infinite smooth pulse effect
    scale.value = withRepeat(
      withSequence(
        withTiming(1.02, { duration: 1000 }),
        withTiming(1, { duration: 1000 })
      ),
      -1, // Infinite
      true // Reverse
    );
  }, []);

  const animatedUploadStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <ScrollView className="flex-1 bg-gray-50 p-4">
      {/* How to use Section */}
      <Animated.View 
        entering={FadeInDown.delay(100).duration(500)}
        className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm mb-4"
      >
        <Text className="text-base font-bold text-gray-900 mb-2">How to use</Text>
        <Text className="text-sm text-gray-600 mb-1">1. Download the CSV template.</Text>
        <Text className="text-sm text-gray-600 mb-1">2. Fill in AccountName, Email, and Phone.</Text>
        <Text className="text-sm text-gray-600 mb-1">3. Upload your completed CSV file.</Text>
        <Text className="text-sm text-gray-600 mb-1">4. Review preview and import.</Text>
        
        <TouchableOpacity className="flex-row items-center gap-2 border border-gray-300 bg-white px-4 py-2 rounded-lg mt-4 self-start active:bg-gray-50">
          <Download size={16} color="#374151" />
          <Text className="text-sm font-medium text-gray-700">Download Template</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Upload Area */}
      <Animated.View 
        entering={FadeInDown.delay(300).duration(500)}
        className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm mb-6"
      >
        <Text className="text-base font-bold text-gray-900 mb-3">Select CSV File</Text>
        
        <TouchableOpacity activeOpacity={0.8}>
          <Animated.View 
            style={animatedUploadStyle}
            className="border-2 border-dashed border-gray-300 rounded-xl p-8 items-center justify-center bg-gray-50/50"
          >
            <Upload size={40} color="#9CA3AF" />
            <Text className="text-sm font-medium text-gray-900 mt-3">Click to browse or drag & drop</Text>
            <Text className="text-xs text-gray-500 mt-1">Only .csv files are accepted</Text>
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>

      {/* Empty State */}
      <Animated.View 
        entering={FadeInUp.delay(500).duration(500)}
        className="items-center justify-center py-8"
      >
        <FileText size={40} color="#D1D5DB" />
        <Text className="text-sm font-medium text-gray-900 mt-3">No file selected</Text>
        <Text className="text-xs text-gray-500 mt-1">Upload a CSV file above to preview</Text>
      </Animated.View>
    </ScrollView>
  );
}