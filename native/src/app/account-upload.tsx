import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Upload, Download, FileText } from 'lucide-react-native';

export default function AccountUpload() {
  return (
    <ScrollView className="flex-1 bg-gray-50 p-4">
      {/* How to use Section */}
      <View className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm mb-4">
        <Text className="text-base font-bold text-gray-900 mb-2">How to use</Text>
        <Text className="text-sm text-gray-600 mb-1">1. Download the CSV template.</Text>
        <Text className="text-sm text-gray-600 mb-1">2. Fill in AccountName, Email, and Phone.</Text>
        <Text className="text-sm text-gray-600 mb-1">3. Upload your completed CSV file.</Text>
        <Text className="text-sm text-gray-600 mb-1">4. Review preview and import.</Text>
        
        <TouchableOpacity className="flex-row items-center gap-2 border border-gray-300 bg-white px-4 py-2 rounded-lg mt-4 self-start">
          <Download size={16} color="#374151" />
          <Text className="text-sm font-medium text-gray-700">Download Template</Text>
        </TouchableOpacity>
      </View>

      {/* Upload Area */}
      <View className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm mb-6">
        <Text className="text-base font-bold text-gray-900 mb-3">Select CSV File</Text>
        <TouchableOpacity className="border-2 border-dashed border-gray-300 rounded-xl p-8 items-center justify-center bg-gray-50/50">
          <Upload size={40} color="#9CA3AF" />
          <Text className="text-sm font-medium text-gray-900 mt-3">Click to browse or drag & drop</Text>
          <Text className="text-xs text-gray-500 mt-1">Only .csv files are accepted</Text>
        </TouchableOpacity>
      </View>

      {/* Empty State */}
      <View className="items-center justify-center py-8">
        <FileText size={40} color="#D1D5DB" />
        <Text className="text-sm font-medium text-gray-900 mt-3">No file selected</Text>
        <Text className="text-xs text-gray-500 mt-1">Upload a CSV file above to preview</Text>
      </View>
    </ScrollView>
  );
}
