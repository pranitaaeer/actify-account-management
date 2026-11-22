import { View, Text, FlatList } from 'react-native';
import { testResults } from '@shared/data';
import { CheckCircle2, XCircle } from 'lucide-react-native';

export default function TestResults() {
  return (
    <View className="flex-1 bg-gray-50">
      <FlatList
        data={testResults}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
        renderItem={({ item }) => {
          const scoreNum = parseInt(item.score.replace('%', ''), 10);
          return (
            <View className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm mb-4">
              <View className="flex-row justify-between items-start mb-3">
                <Text className="text-base font-bold text-gray-900 flex-1 mr-2">{item.testName}</Text>
                <View className={`flex-row items-center gap-1 px-2.5 py-1 rounded-full ${item.status === 'Passed' ? 'bg-emerald-100' : 'bg-red-100'}`}>
                  {item.status === 'Passed' ? <CheckCircle2 size={12} color="#047857" /> : <XCircle size={12} color="#B91C1C" />}
                  <Text className={`text-[10px] font-bold ${item.status === 'Passed' ? 'text-emerald-700' : 'text-red-700'}`}>
                    {item.status}
                  </Text>
                </View>
              </View>
              
              <View className="flex-row items-center gap-3">
                <Text className="text-sm font-bold text-gray-900 w-10">{item.score}</Text>
                <View className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <View 
                    className={`h-full rounded-full ${item.status === 'Passed' ? 'bg-emerald-500' : 'bg-red-500'}`} 
                    style={{ width: `${scoreNum}%` }} 
                  />
                </View>
                <Text className="text-xs text-gray-500">{item.date}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}